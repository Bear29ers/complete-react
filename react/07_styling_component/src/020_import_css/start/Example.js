import { useState } from "react";
import SubButton from "./components/SubButton";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      {/* POINT 動的なスタイルの適用 */}
      {/* POINT クラスの付け外しに論理積（&&）は使用してはいけない。
      例）className={`btn ${isSelected && 'selected'}`}

      isSelectedがfalseの場合、className='btn false'になってしまう。*/}
      <button
        className={`btn ${isSelected ? " selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <SubButton />
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
