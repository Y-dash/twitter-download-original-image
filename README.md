# Twitter, Download Original Image

[Twitter, Download Original Image \- Chrome ウェブストア](https://chrome.google.com/webstore/detail/twitter-download-original/oohidjkamhoccdjfhokgjcefajmfbgep)

Google Chrome 拡張機能。Twitter Web App (twitter.com) のツイート内画像を右クリックした際に「画像をオリジナルサイズで保存」メニューを表示します。

Twitter のタイムラインにはリサイズされた画像が読み込まれているため、そのまま保存しても最大サイズの画像を保存できません。

本拡張機能は、ツイートへの添付画像を右クリックした際のメニューに「オリジナルサイズで画像を保存」という項目を追加します。「右クリック」->「オリジナルサイズで画像を保存」の流れで大きな画像が保存できるようになります。

2023年7月頃より Twitter の仕様変更でタイムラインのサムネイルが webp 形式で読み込まれるようになっていますが、それらについても元の jpg, png 形式で落としてくるように暫定の対策を組んであります。

---

## よくある質問

<dl>
<dt>Q. 保存先を「ダウンロード」フォルダから変更したい</dt>
<dd>A. Chromeの [ 設定 > ダウンロード > ダウンロード保存先 ]での設定が適用されます</dd>
<dt>Q. 毎回保存先を選択したい</dt>
<dd>A. 上記と同じ設定項目で「ダウンロード前に各ファイルの保存場所を確認する」にチェック</dd>
<dt>Q. 前回の保存時に選択したフォルダを初期表示してほしい</dt>
<dd>A. 大変残念ではありますが、現在の Google Chrome の仕様上実現が困難です</dd>
</dl>

## 注意事項

- 本拡張機能では Twitter 内に「orig」というパラメータで保持されている画像をダウンロードします。観測範囲内ではこのパラメータを指定した場合に投稿時と同じサイズの画像が返ってくることを確認していますが、それであっても Twitter による処理を経ているため、厳密な元画像ではない部分もあります。たとえば投稿前に存在した Exif 情報は保持されていません。
- 日本語表示選択時を対象に開発しています。理論上は他言語表示でも問題なく動くはずですが、検証はしていません。
- Google Chrome を対象に開発しています。拡張機能互換を謳う Chromium 系ブラウザでもおそらくは動きますが、検証はしていません。

## 不具合報告など

- [Chrome ウェブストアのページ](https://chrome.google.com/webstore/detail/twitter-download-original/oohidjkamhoccdjfhokgjcefajmfbgep)の「サポート」タブからご連絡ください。
- 「保存できる画像と保存できない画像がある」といった場合、可能であれば問題の生じているツイートの URL を示していただけると助かります。
- 自分用ツールの延長線上での公開であり、対応優先順位としてはあまり高くありません。すべてに即時対応可能ではない旨をご了承ください。
- 私はこの拡張機能から収益を得るつもりはありません。この拡張機能の収益化を勧めるご連絡はご遠慮ください。(I do not intend to make money from this extension. Please do not contact me to suggest monetization of this extension.)

## 更新履歴

[こちら](https://github.com/Y-dash/twitter-download-original-image/releases)をご覧ください。

---

[![クリエイティブ・コモンズ・ライセンス](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
この 作品 は [クリエイティブ・コモンズ 表示 - 非営利 - 継承 4.0 国際 ライセンス](http://creativecommons.org/licenses/by-nc-sa/4.0/)の下に提供されています。

---