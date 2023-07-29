const CONTEXT_ID: string = 'twitter-download-original-image';

chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.removeAll(() => {
		chrome.contextMenus.create({
			'type': 'normal',
			'id': CONTEXT_ID,
			'title': '画像をオリジナルサイズで保存',
			'contexts': ['image'],
			'targetUrlPatterns': ['*://pbs.twimg.com/media/*']
		});
	});
});

chrome.contextMenus.onClicked.addListener((info) => {
	if (info.srcUrl && (info.menuItemId === CONTEXT_ID)) {
		callDownload(new URL(info.srcUrl));
	}}
);

function callDownload(targetSrc: URL): void {
	targetSrc.searchParams.set('name', 'orig');

	// 画像拡大後の右クリック
	if (targetSrc.searchParams.get('format') !== 'webp') {
		download(targetSrc);
		return;
	}

	// ツイート内サムネイルの右クリック
	targetSrc.searchParams.set('format', 'jpg');

	fetch(targetSrc.toString()).then((response) => {
		if (!response.ok) {
			targetSrc.searchParams.set('format', 'png');
		}

		download(targetSrc);
	});
}

function download(targetSrc: URL) {
	chrome.downloads.download({
		url: targetSrc.toString(),
		filename: `${targetSrc.pathname.replace('/media/', '')}_${targetSrc.searchParams.get('name')}.${targetSrc.searchParams.get('format')}`
	});
}