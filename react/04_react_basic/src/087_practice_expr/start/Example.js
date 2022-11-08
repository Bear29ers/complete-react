import { Fragment } from "react";

const title = "Expression";
const array = ["item1", "item2", "item3"];
const fn = (arg) => {
  return `${arg} Function`;
};
const upperCaseText = "UpperCaseText";

const Example = () => {
  return (
    <Fragment>
      <h3>Hello JSX</h3>
      {/* toUpperCaseメソッドで文字列をすべて大文字にする */}
      <h3>{upperCaseText.toUpperCase()}</h3>
      {/* 演算子で文字列を結合する */}
      <h3>{`Hello ${title}`}</h3>
      {/* 配列がJSX内で渡されると自動的に要素が展開されて表示される */}
      <h3>{array}</h3>
      {/* 関数の実行はreturnに続く値が返ってくる */}
      <h3>{fn("Hello")}</h3>
    </Fragment>
  );
};

export default Example;
