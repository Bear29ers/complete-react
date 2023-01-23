/* 関数の型定義 */
const Example = () => {
  // 引数には必ず型を指定する
  // void型は戻り値が何もない場合に指定する
  function sum1(x: number, y: number): void {
    console.log(y);
    // return x + y;
  }

  const result1 = sum1(1, 2);
  console.log(result1);

  // TypeScriptでは戻り値はある程度型推論される
  const sum2 = (x: number, y: number): number => x + y;
  const result2 = sum2(10, 20);
  console.log(result2);

  // 関数の型を定義することも可能
  type Sum = (x: number, y: number) => number;
  const sum3: (x: number, y: number) => number = (x, y) => x + y;
  const result3 = sum3(1, 2);
  console.log(result3);
};

export default Example;
