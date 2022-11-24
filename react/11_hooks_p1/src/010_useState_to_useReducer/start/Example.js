import { useReducer, useState } from "react";

/* useReducerの使い方
const [state, dispatch] = useReducer(reducer, initialArg, init)
reducer(state, action)
*/
// useReducerはuseStateの書き換えに使用
const Example = () => {
  const [state, setState] = useState(0);
  // useReducerはReduxの影響を受けている
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        // return ++prev;
        return prev + step;
      case "-":
        // return --prev;
        return prev - step;
      default:
        throw new Error("不明なactionです。");
    }
    /* if (action === "+") {
      return ++prev;
    } else if (action === "-") {
      return --prev;
    } */
  }, 0);

  const countUp = () => {
    setState((prev) => ++prev);
  };
  const rcountUp = () => {
    dispatch({ type: "+", step: 2 });
  };
  const rcountDown = () => {
    dispatch({ type: "-", step: 3 });
  };
  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
