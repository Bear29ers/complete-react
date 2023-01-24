/* 子コンポーネントの再レンダリング
親コンポーネントが再レンダリングされると子コンポーネントも再レンダリングされる */

import { useState } from "react";
import Child from "./Child";
import "./Example.css";

const Example = () => {
  console.log("Parent render");

  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  return (
    <div className="parent">
      <div>
        <h3>親コンポーネント領域</h3>
        <div>
          <button
            onClick={() => {
              setCountA((pre) => pre + 1);
            }}
          >
            ボタンA
          </button>
          <span>親のstateを更新</span>
        </div>
        <div>
          <button
            onClick={() => {
              setCountB((pre) => pre + 1);
            }}
          >
            ボタンB
          </button>
          <span>子のstateを更新</span>
        </div>
      </div>
      <div>
        <p>ボタンAクリック回数：{countA}</p>
      </div>
      {/* 親コンポーネントの再レンダリングによって子コンポーネントにも不要な再レンダリングが実行されてしまう */}
      <Child countB={countB} />
    </div>
  );
};

export default Example;
