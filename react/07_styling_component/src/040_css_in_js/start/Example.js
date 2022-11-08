/* css-in-js（styled-components）*/
import { useState } from "react";
import styled from "styled-components";

console.dir(styled);
// タグ付きテンプレート
/* POINT 生成する要素を指定し、スタイルをテンプレートリテラルで記述する
React要素扱いなので変数名は大文字で記述 */
const StyledButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  /* POINT valueを関数にすることで、引数をpropsを受け取ることができる。
  { isSelected }の部分を変更することで受け取る名前を変更することができる */
  background: ${({ isSelected }) => (isSelected ? "pink" : "")};

  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const OrangeButton = styled(StyledButton)`
  background-color: orange;

  /* 擬似クラスの追加 */
  :hover,
  :active {
    color: red;
    opacity: 0.7;
  }

  span {
    font-size: 2em;
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>
        ボタン
      </StyledButton>
      <OrangeButton isSelected={isSelected} onClick={clickHandler}>
        <span>ボタン</span>
      </OrangeButton>
      <button
        className={`btn ${isSelected ? "selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
