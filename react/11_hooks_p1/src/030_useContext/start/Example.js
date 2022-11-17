// useContextの基礎
import { createContext } from "react";
import Child from "./components/Child";

export const MyContext = createContext("hello");

const Example = () => {
  // const value = "hello";
  return <Child />;
};

export default Example;
