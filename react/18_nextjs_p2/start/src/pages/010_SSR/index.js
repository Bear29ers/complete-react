import { useEffect, useState } from "react";

/* Reactは仮想DOMを内部で保持しているので、擬似的にDOMツリーのようなものを作成できるため、
それを元にHTMLを作成することができる */
export default function SSR() {
  console.log("hello");

  // Node.jsはwindowオブジェクトを保持していないので、使用できない → useEffectを使用してwindowオブジェクトを使用する
  // useEffectはNode.js上では実行されず、ブラウザのみで実行される
  useEffect(() => {
    console.log("useEffect");
    window.localStorage.setItem("key", "value");
  }, []);

  const [state, setState] = useState("bye");
  const val = 0;
  return <h3>{state}</h3>;
}
