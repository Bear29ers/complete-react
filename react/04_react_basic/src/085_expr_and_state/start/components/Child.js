/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = () => {
  const hello = () => {};
  const a = hello();

  console.log(1 === 1);

  for (let i = 0; i < 5; i++) {}

  // JSX内では式しか使えない
  return (
    <div className="component">
      <h3>式と文</h3>
      {}
    </div>
  );
};

export default Child;
