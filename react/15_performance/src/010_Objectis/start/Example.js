/* 再レンダリングが発生する条件
stateの値が変更された時
Object.isによって変更は検知される */

import { useState } from "react";

const Example = () => {
  console.log("render");

  const [countA, setCountA] = useState({
    val: 0,
  });

  const obj1 = { val: 0 };
  // const obj2 = obj1;
  const obj3 = { val: 0 };
  // falseになる、比較対象がオブジェクトの場合は値が同じでも異なるメモリ空間に割り当てられていればfalseになる
  // const isSame = Object.is({ val: 0 }, { val: 0 });
  // 参照先が同じなのでtrue
  // const isSame = Object.is(obj1, obj2);
  // 参照先が別なのでfalse
  const isSame = Object.is(obj1, obj3);
  const isSameEqual = "" == false;
  console.log(isSame);
  console.log(isSameEqual);

  return (
    <div className="parent">
      <div>
        <h3>再レンダリング？</h3>
        <button
          onClick={() => {
            setCountA((prev) => {
              const newState = { ...prev };
              // prev.val = 1;
              return newState;
            });
          }}
        >
          ボタンA
        </button>
      </div>
      <div>
        <p>ボタンAクリック回数：{countA.val}</p>
      </div>
    </div>
  );
};

export default Example;
