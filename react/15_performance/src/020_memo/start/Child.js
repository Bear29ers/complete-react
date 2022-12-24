import { memo } from "react";

// memoの第2引数に指定する関数
function areEqual(prevProps, nextProps) {
  if (prevProps.countB !== nextProps.countB) {
    return false; // 再レンダリング
  } else {
    return true; // 再レンダリングなし
  }
  /*
  nextPropsをrenderに渡した結果が
  prevProsをrenderに渡した結果となるときにtrueを返し、
  それ以外のときにfalseを返す
* */
}

// memo関数はpropsの値のみが対象
const ChildMemo = memo(({ countB }) => {
  console.log("%cChild render", "color: red");

  return (
    <div className="child">
      <h2>子コンポーネント領域</h2>
      <span>ボタンBクリック回数：{countB}</span>
    </div>
  );
}, areEqual);

export default ChildMemo;
