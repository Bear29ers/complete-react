/* ジェネリクス */
// ジェネリクスとは、型引数（type parameters）を受け取る関数を作る機能のことをさす
const Example = () => {
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  };

  const repeatNum = (value: number, times: number): string[] => {
    return new Array(times).fill(value);
  };

  // ジェネリクスを定義 → 関数実行時に型を指定できる
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  };

  // Tにあたる型を指定することができる
  const strArry = repeat<string>("hello", 3);
  const numArry = repeat<number>(10, 3);
  const boolArry = repeat<boolean>(true, 3);
  // const strArry = repeatStr("hello", 3);
  // const numArry = repeatNum(10, 3);
  // console.log(strArry);
  // console.log(numArry);
};

export default Example;
