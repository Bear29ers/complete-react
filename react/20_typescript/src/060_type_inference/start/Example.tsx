/* 型推論 */
/* TypeScriptでは型推論（type inference）によって型をある程度推定してくれる機能がある。
基本的には、明らかに型がわかるような場合の型定義は型推論に任せるようにする。 */
const Example = () => {
  let str = "hello";
  let obj = { name: "Taro", age: 10 };

  // constで定義した場合は型推論でリテラル型になる
  const bye = "bye";
  const num = 123;
};

export default Example;
