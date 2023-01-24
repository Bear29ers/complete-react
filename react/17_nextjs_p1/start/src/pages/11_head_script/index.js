// headタグに要素を追加できる
import Head from "next/head";
// scriptタグを挿入できる
import Script from "next/script";
import { useState } from "react";

export default function Page() {
  const [load, setLoad] = useState(false);
  return (
    <>
      <Head>
        <title>ページのタイトル</title>
        <meta property="og:title" content="ページのタイトル" />
      </Head>
      <Script
        src="/jquery-3.2.1.min.js"
        // 初期値のafterInteractiveではnext.jsのスクリプトが読み込まれてからScriptが実行される
        // strategy="beforeInteractive"
        // ブラウザの処理に空きが出た場合にScriptを読み込む
        strategy="lazyOnload"
        onLoad={() => setLoad(true)}
        onError={(e) => {
          console.log(e);
        }}
      />
      <h3>jQuery loaded: {load ? "true" : "false"}</h3>

      {/* インラインスクリプトの実装 */}
      <Script
        dangerouslySetInnerHTML={{
          __html: `console.log('Inline Script')`,
        }}
      />
    </>
  );
}
