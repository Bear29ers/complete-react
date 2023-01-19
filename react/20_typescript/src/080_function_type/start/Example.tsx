/* 関数の型定義 */
const Example = () => {
  // 引数には必ず型を指定する
  function sum1(x: number, y: number) {
    return x + y;
  }

  const result1 = sum1(1, 2);
  console.log(result1);

  const sum2 = (x: number, y: number) => x + y;
};

export default Example;
