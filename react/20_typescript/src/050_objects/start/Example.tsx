/* TypeScriptにおけるオブジェクトの型定義 */
const Example = () => {
  // 配列の型定義
  const arry1: number[] = [1, 2, 3];
  const arry2: string[] = ["hello", "bye"];
  // ジェネリック型
  const arry3: Array<number> = [1, 2, 3];
  // 複合型
  const arry4: (string | number)[] = [1, "bye"];
  // ユニオン型
  const arry5: Array<string | number> = [1, "bye"];
  console.log(arry1, arry2, arry3, arry4, arry5);

  // オブジェクトの型定義
  type Person = { name: string; age?: number };
  const obj1: Person = { name: "Taro" };

  // オブジェクトを含む配列
  const users: Person[] = [{ name: "Taro" }, { name: "Hanako", age: 30 }];
  console.log(users, obj1);
};

export default Example;
