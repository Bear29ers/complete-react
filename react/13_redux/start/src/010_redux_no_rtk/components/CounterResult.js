// import { useCounter } from "../context/CounterContext";
import { useSelector } from "react-redux";

const CounterResult = () => {
  const state = useSelector((state) => state);
  // const state = useCounter();
  return <h3>{state}</h3>;
};

export default CounterResult;
