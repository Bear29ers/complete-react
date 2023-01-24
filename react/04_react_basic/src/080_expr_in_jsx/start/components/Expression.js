/* JSXにはJavaScript式を記述できる
JSX内の波括弧{...}で囲んだ部分はJavaScript式として実行時に評価される
*/
import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  const arry = ["item1", "item2", "item3"];
  const hello = (arg) => `${arg} Function`;
  const jsx = <h3>Hello JSX</h3>;
  const bool = true;

  return (
    // {...}は属性値にも使用できる
    <div className={title.toLowerCase()}>
      {/* 波括弧内は実行時に評価される */}
      <h3>Hello {title}</h3>
      {/* 配列を子要素に指定すると配列の要素が値の列として展開される */}
      <h3>{arry}</h3>
      {/* 関数を呼び出してreturnした値をうめこむこともできる */}
      <h3>{hello("Hello")}</h3>
      {/* 波括弧内にJSXを記述することもできる */}
      <h3>{/* 画面上に表示されません。 */}</h3>
      {<h3>Hello JSX</h3>}
      {/* 変数に代入したJSXも埋め込める */}
      {jsx}
      {bool}
    </div>
  );
};

export default Expression;
