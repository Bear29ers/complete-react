import { useState } from "react";

// 複数のstateの管理と使用上の注意
const Example = () => {
  /* stateはトップレベル（if文などで囲まない）で呼ぶ
  複数のstateを取り扱う場合はそれぞれ名前を変更可能
  */
  console.log(<Example />);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);

  // stateが呼ばれる順番は常に一定とする
  return (
    <>
      <p>ボタンAを{countA}回押しました！</p>
      <button
        onClick={() => {
          setCountA(countA + 1);
        }}
      >
        ボタンA
      </button>

      <p>ボタンBを{countB}回押しました！</p>
      <button
        onClick={() => {
          setCountB(countB + 1);
        }}
      >
        ボタンB
      </button>

      <p>ボタンCを{countC}回押しました！</p>
      <button
        onClick={() => {
          setCountC(countC + 1);
        }}
      >
        ボタンC
      </button>
    </>
  );
};

export default Example;
