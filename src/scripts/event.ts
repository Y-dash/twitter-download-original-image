const CONTEXT_ID: string = 'twitter-download-original-image.y-dash.net';
let isCreatedContextMenu: boolean = false;

chrome.runtime.onInstalled.addListener(init);
chrome.runtime.onStartup.addListener(init);

chrome.contextMenus.onClicked.addListener((info) => {
	if (info.srcUrl && (info.menuItemId === CONTEXT_ID)) {
		download(new URL(info.srcUrl));
	}}
);

function init(): void {
	if (isCreatedContextMenu) {
		return;
	}

	chrome.contextMenus.create({
		'type': 'normal',
		'id': CONTEXT_ID,
		'title': '元画像を保存',
		'contexts': ['image'],
		'targetUrlPatterns': ['*://pbs.twimg.com/media/*']
	});
	isCreatedContextMenu = true;
}

function download(src: URL): void {
	let sourceUri: URL = replaceUrlWithBiggest(src);
	let fileName: string = makeFileNameFromUrl(sourceUri);

	chrome.downloads.download({
		url: sourceUri.toString(),
		filename: fileName
	});
}

function replaceUrlWithBiggest(src: URL): URL {
	let srcString: string = src.toString();
	
	if (srcString.indexOf('=orig') !== -1) {
		return src;
	}

	srcString = srcString.replace(/name=.*$/, 'name=orig');

	src = new URL(srcString);
	return src;
}

function makeFileNameFromUrl(url: URL): string {
	let fileName: string = url.toString().match(/media\/(.*)\?/)?.[1] || 'downloadFile';
	return `${fileName}_${url.searchParams.get('name')}.${url.searchParams.get('format')}`;
}