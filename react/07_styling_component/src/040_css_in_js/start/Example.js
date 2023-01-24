/* css-in-js（styled-components）*/
import { useState } from "react";
import styled from "styled-components";

console.dir(styled);
// タグ付きテンプレート
/* 生成する要素を指定し、スタイルをテンプレートリテラルで記述する
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
  /* valueを関数にすることで、引数をpropsを受け取ることができる。
  { isSelected }の部分を変更することで受け取る名前を変更することができる */
  background: ${({ isSelected }) => (isSelected ? "pink" : "")};

  /* メディアクエリ */
  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

// スタイルの継承。styled()でラップする
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

  /* css-in-jsのメリットとデメリット
  メリット
    ・スタイルをコンポーネントで定義するので、外部のCSSに依存することなくコンポーネント単体で動作する
    ・JavaScriptで記述するため、JSの文法が使用できたり、propsとして値を渡すこともできる
    ・ユニークなクラス名が自動生成され、他のコンポーネントに影響を与えないことが保証される
    ・CSSの設計が必要なくなる
    ・コンポーネントで完結しているため、他のプロジェクトで再利用がしやすい
  デメリット
    ・自動生成されるユニークなクラス名が読めない
    ・CSSに比べパフォーマンスに劣る
    ※ 些細な差なのでデメリットというほどでもない
    ※ どうしても気になる方は、Next.jsを使用することでパフォーマンス面は気にしなくて良くなる
  */
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
