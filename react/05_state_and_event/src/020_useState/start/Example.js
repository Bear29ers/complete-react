import { useState } from "react";

/*
useState

配列の0番目に参照用の値が渡ってくる
配列の0番目：参照用の値
配列の1番目：更新用の関数
*/

const Example = () => {
  let [val, setVal] = useState();

  return (
    <>
      <input
        type="text"
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
