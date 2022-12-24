/* useEffectの基礎 */
import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  // コンポーネントが描画された時に一度だけ実行させる
  // 第二引数は空の配列にする
  useEffect(() => {
    // console.log("useEffect is called");
    window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;
