/*
JSON Serverとは、APIのモックを手軽に作成できるnode.jsのライブラリ。
APIモックとは、モックアップのことで、開発環境用の簡易APIのこと。
APIモックを使用することで、開発・テスト用の擬似的なレスポンスを簡単に取得することが可能になる。

JSON Serverをインストールする
npm i -D json-server

jsonファイルを用意する

オブジェクト形式でパス名をkeyにする
{
  "パス名": json形式のデータ
}
*/

// json-serverの立ち上げ
// npx json-server -w src/**/db.json

const Example = () => {
  return (
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
    </p>
  );
};

export default Example;
