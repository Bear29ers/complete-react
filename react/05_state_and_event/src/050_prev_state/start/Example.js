import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
    setCount((prevState) => prevState + 1);
    // countの値はすぐに更新されない
    console.log(count);
  };

  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
