const CONTEXT_ID: string = 'download-original-image';
let isCreatedContextMenu: boolean = false;

chrome.runtime.onInstalled.addListener(init);
chrome.runtime.onStartup.addListener(init);

chrome.contextMenus.onClicked.addListener(
	function(info) {
		if (info.srcUrl && (info.menuItemId === CONTEXT_ID)) {
			download(info.srcUrl);
		}
	}
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

function download(src: string): void {
	let sourceUri: string = replaceUrlWithBiggest(src);
	let fileName: string = makeFileNameFromUrl(sourceUri);

	chrome.downloads.download({
		url: sourceUri,
		filename: fileName
	});
}

function replaceUrlWithBiggest(src: string): string {
	if (src.indexOf(':orig') !== -1) {
		return src;
	}

	// 新UI以降のURL
	if (src.indexOf('?format=') !== -1) {
		src = src.replace('?format=', '.').split('&name=')[0] += ':orig';
	}
	// 旧UI時のURL
	else {
		let srcSplitColons: string[] = src.split(':');
		src = `${srcSplitColons[0]}:${srcSplitColons[1]}:orig`;
	}

	if (!getSrcExist(src)) {
		src = src.replace(':orig', ':large');

		if (!getSrcExist(src)) {
			src = src.replace(':large', '');
		}
	}

	return src;
}

function getSrcExist(src: string): boolean {
	let xmlHttpRequset: XMLHttpRequest = new XMLHttpRequest();
	xmlHttpRequset.open('GET', src.toString(), false);
	xmlHttpRequset.send();

	if ((xmlHttpRequset.status === 200) || (xmlHttpRequset.status === 500)) {
		return true;
	}
	return false;
}

function makeFileNameFromUrl(url: string): string {
	let nameSplitDots: string[] = url.substr(url.lastIndexOf("/") + 1).split('.');
	let nameSplitColons: string[] = nameSplitDots[1].split(':');

	return `${nameSplitDots[0]}_${nameSplitColons[1]}.${nameSplitColons[0]}`;
}