/* Reactと純粋関数 */
let value = 0;

const Child = () => {
  value++;
  return <div>{value}</div>;
};

// 解決策として引数で渡すようにする
const ChildPure = ({ value }) => {
  return <div>{value}</div>;
};

// 引数を受け取ってJSXを返す純粋関数
const Example = () => {
  let value = 0;

  return (
    <>
      {/* 関数スコープ外の変数は使用してはならない */}
      {/*<div>{value}</div>*/}
      <Child />
      <Child />
      <Child />
      <ChildPure value={++value} />
      <ChildPure value={++value} />
      <ChildPure value={++value} />
    </>
  );
};

export default Example;
