/* [Concurrent Mode] useTransitionでユーザビリティを向上 */
import { useState, useTransition } from "react";

const generateDummyItem = (num) => {
  return new Array(num).fill(null).map((item, index) => `item ${index}`);
};

const dummyItems = generateDummyItem(10000);

const Example = () => {
  const [isPending, startTransition] = useTransition();
  const [filterVal, setFilterVal] = useState("");

  const changeHandler = (e) => {
    // startTransitionの引数に渡したコールバック関数の優先順位が下がる
    startTransition(() => {
      setFilterVal(e.target.value);
    });
  };

  return (
    <>
      <input type="text" onChange={changeHandler} />
      {/* useTransitionの処理が実行中はisPendingがtrueを返す */}
      {isPending && <div>Loading...</div>}
      <ul>
        {dummyItems
          .filter((item) => {
            if (filterVal === "") return true;
            return item.includes(filterVal);
          })
          .map((item) => (
            <li key={item}>{item}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;
