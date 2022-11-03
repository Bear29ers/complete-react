import { useState } from "react";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const style = {
    width: 120,
    height: 60,
    display: "block",
    fontWeight: "bold",
    "border-radius": 9999,
    cursor: "pointer",
    border: "none",
    margin: "auto",
    background: isSelected ? "pink" : "",
  };

  // インラインスタイルの注意点
  // ・同じスタイルを適用したい場合は同じstyle属性の値（オブジェクト）を指定する必要がある
  // ・擬似セレクタが使用できない（::before、::after、::hover、::active）
  // ・メディアクエリも使用できない（@media）

  return (
    <>
      <button onClick={clickHandler} style={style}>
        ボタン
      </button>
      <button style={style}>ボタン2</button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
