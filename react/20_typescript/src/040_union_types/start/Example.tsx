/* Union型 */
/* ユニオン型（union type）は、複数の型を組み合わせて「型Tまたは型U」のような、「または」の意味を表すことができる。
T | U というように、|（パイプ）を用いてユニオン型を表す */
const Example = () => {
  let strOrNum: string | number = "Hello";
  strOrNum = 123;
  console.log(strOrNum);

  // 3つ以上の型も指定可能
  let strOrNumOrBool: string | number | boolean = "Hello";
  strOrNumOrBool = true;
  console.log(strOrNumOrBool);

  // リテラル型も複合可能
  let helloOrNumOrBool: "Hello" | number | boolean = "Hello";
  helloOrNumOrBool = false;
  console.log(helloOrNumOrBool);

  // 型定義
  type HelloOrNum = "Hello" | number;
  const hello: HelloOrNum = "Hello";
  console.log(hello);

  type DayOfWeek = "Monday" | "Tuesday";
  const day: DayOfWeek = "Monday";
  console.log(day);
};

export default Example;
