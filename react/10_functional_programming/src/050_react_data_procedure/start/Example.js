import { useState } from "react";

/* Reactでの状態管理（state）と処理（関数コンポーネント）の分離

関数型（純粋関数）
・fn(決まった引数)：propsとstateに保存
  -> 決まった戻り値：Jsx
*/

// 関数外の状態（データ）は参照・変更しない
const Example = () => {
  // 関数コンポーネントはJSXを作成する場所なので、それ以外の処理は書かない

  // 状態はstateに分離する
  const [state, setState] = useState(0);

  /* 関数外に影響を及ぼさない
  window.alert('hello')のような処理は　関数内に書かない
  */
  const increment = () => {
    setState(state + 1);
  };
  return (
    <>
      <button onClick={increment}>+</button>
      <h3>{state}</h3>
    </>
  );
};

export default Example;
