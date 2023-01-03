import { useEffect, useState } from "react";

/* Reactは仮想DOMを内部で保持しているので、擬似的にDOMツリーのようなものを作成できるため、
それを元にHTMLを作成することができる */
// export default function SSR({ message }) {
export default function SSR() {
  console.log("hello");
  // console.log(message);

  // Node.jsはwindowオブジェクトを保持していないので、使用できない → useEffectを使用してwindowオブジェクトを使用する
  // useEffectはNode.js上では実行されず、ブラウザのみで実行される
  useEffect(() => {
    console.log("useEffect");
    window.localStorage.setItem("key", "value");
    document.cookie = "val=0; path=/;";
  }, []);

  const [state, setState] = useState("bye");
  const val = 0;
  return <h3>{state}</h3>;
}

// Node.js上で実行される関数
// 引数のcontextには通信の情報が入ってくる
// export async function getServerSideProps(context) {
//   const { cookie } = context.req.headers;
//   console.log("cookie", cookie);
//   console.log("getServerSideProps is executed");
//
//   return {
//     // リダイレクトの設定
//     /* redirect: {
//       destination: "/",
//       // 308のPermanent Redirectと307のTemporary Redirectのどちらにするか設定できる
//       permanent: true,
//     }, */
//     // 関数コンポーネントのpropsの値を定義
//     props: { message: "From Server Side Props" },
//   };
// }
