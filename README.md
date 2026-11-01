# WEB技術Ⅱ 第7回 中間テストサイト / Ver.5

添付された `php-final-test-main(1).zip` の `style.css` から基本のレイアウトと配色・カードデザインを流用し、4ページ構成の中間テストサイト用に調整しました。

## ファイル

- `index.html`：試験説明・ルール・提出方法
- `question1.html`：HP管理（prompt・バリデーション）
- `question2.html`：商品在庫確認
- `question3.html`：映画館チケット料金計算（田中・鈴木・佐藤）
- `style.css`：共通スタイル・CSSのみの斜め透かし
- `script.js`：TOPボタン・ブラウザ上の簡易コピー抑制

## GitHub Pages

すべてのファイルをリポジトリ直下に置き、Settings → Pages から main / root を選択してください。別途画像ファイルやライブラリは必要ありません。

## 透かしについて

画像ファイルではなく、参考CSSと同じ `body::before` により作成しています。濃さは `style.css` の `body::before` にある `color: rgba(30,58,138,0.075)` を調整できます。画面幅640px以下は別の濃さになります。

## 注意

JavaScriptによるコピー抑制・ショートカット抑制や透かしは、問題文のコピー・スクリーンショット・開発者ツール・生成AIへの入力を完全に防止するものではありません。GitHub Pages上のHTML/CSS/JSは閲覧・取得できます。試験前に公開したくない場合、公開タイミングを調整してください。
