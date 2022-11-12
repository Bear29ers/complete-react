import { useState } from "react";

/* useState
配列の0番目に参照用の値が渡ってくる
配列の0番目：参照用の値
配列の1番目：更新用の関数
*/

const Example = () => {
  // useStateは[ 値、更新用の値 ]（分割代入）を返す
  let [val, setVal] = useState();

  return (
    <>
      <input
        type="text"
        // 入力状態をstateで管理する標準的な書き方
        onChange={(e) => {
          // const setFn = valArry[1];
          setVal(e.target.value);
        }}
      />{" "}
      = {val}
    </>
  );
};

export default Example;
