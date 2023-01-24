/* propsの受け取り方
親コンポーネントで属性値のように記述した各値は、1つのオブジェクトとして子コンポーネントで受け取ることができる
*/
import "./Child.css";

// propsを分割代入で受け取る
// propsのデフォルト値を設定する
const Child = ({ color: c = "green", num, fn, bool, obj }) => {
  return (
    <div className={`component ${c}`}>
      <h3>Hello Component</h3>
      <h3>{num}</h3>
      <h3>{fn("Props")}</h3>
      <h3>{bool ? "true" : "false"}</h3>
      <h3>{obj.name + obj.age}</h3>
    </div>
  );
};

export default Child;
