/* React要素とコンポーネントの関係 */
import React from "react";

const Hello = () => {
  return <h1>Hello</h1>;
};

const Bye = () => {
  return <h2>GoodBye!</h2>;
};

const Example = () => {
  return (
    <div>
      {/*<Hello />*/}
      <Bye />
    </div>
  );
};

console.log(Example());

export default Example;
