/* インラインスタイル
  再利用性が低い
  擬似要素やメディアクエリが使用できない
  レンダリングの度に計算されるのでパフォーマンスが劣る
  動的で頻繁に計算されるスタイルの適用
*/
import { useState } from "react";
import { reduceEachTrailingCommentRange } from "typescript";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  /* インラインスタイルのメリットとデメリット
  メリット
    直感的に記述することができる
  デメリット
    再レンダリングの度に計算されるのでパフォーマンス的に優れていない
    要素に直接記述しているので詳細度が一番高くなり、CSSのスタイルが何も効かない
    擬似セレクタやメディアクエリにも対応していないため、実装しようとするとわかりづらいコードになってしまう
  */

  // style属性に適応させるスタイルをオブジェクトで記述します
  const style = {
    /* 単位を書かない場合
    単位を書かずに文字列ではなく数字を与えてあげると、reactが自動で解釈し値にpxを付けてくれる */
    width: 120,
    height: 60,
    display: "block",
    fontWeight: "bold",
    "border-radius": 9999,
    cursor: "pointer",
    border: "none",
    margin: "auto",
    /* 三項演算子を使用してisSelectedがtrueの場合は'pink' falseの場合は空文字( '' )を与えている。
    valueに空文字を与えた場合、プロパティは適用されない */
    background: isSelected ? "pink" : "",
  };

  /* インラインスタイルの注意点
  ・同じスタイルを適用したい場合は同じstyle属性の値（オブジェクト）を指定する必要がある
  ・擬似セレクタが使用できない（::before、::after、::hover、::active）
  ・メディアクエリも使用できない（@media）
  */
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
