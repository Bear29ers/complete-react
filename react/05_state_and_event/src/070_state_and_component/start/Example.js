import { useState } from "react";

// stateとコンポーネントの関係
const Example = () => {
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      {/* コンポーネントの位置によってstateが識別される */}
      <button onClick={toggleComponent}>toggle</button>
      {/* titleが変わるだけでコンポーネントの表示位置に変化はないので、
      この場合、Reactはstateの値を引き継ぐ仕様になっている
      同じ表示位置で異なるstateを管理したい場合はkeyを指定する => 別のコンポーネントとして見なされる*/}
      {toggle ? <Count key="A" title="A" /> : <Count key="B" title="B" />}
    </>
  );
};

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>
        {title}: {count}
      </h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
