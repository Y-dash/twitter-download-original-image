const CONTEXT_ID: string = 'twitter-download-original-image';

chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.removeAll();

	chrome.contextMenus.create({
		'type': 'normal',
		'id': CONTEXT_ID,
		'title': '元画像を保存',
		'contexts': ['image'],
		'targetUrlPatterns': ['*://pbs.twimg.com/media/*']
	});
});

chrome.contextMenus.onClicked.addListener((info) => {
	if (info.srcUrl && (info.menuItemId === CONTEXT_ID)) {
		download(new URL(info.srcUrl));
	}}
);

function download(src: URL): void {
	src.searchParams.set('name', 'orig');

	let fileName: string = `${src.pathname.replace('/media/', '')}_${src.searchParams.get('name')}.${src.searchParams.get('format')}`;

	chrome.downloads.download({
		url: src.toString(),
		filename: fileName
	});
}