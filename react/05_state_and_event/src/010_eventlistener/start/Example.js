const Example = () => {
  const clickHander = () => {
    alert("ボタンがクリックされました。");
  };

  const clickHander2 = () => {
    console.log("ボタンがクリックされました。");
  };

  // ()をつけると実行結果が返ってくる（return文がないのでundefined）
  // console.log(clickHander());

  return (
    <>
      {/* イベントハンドラの末尾に()は付けない */}
      <button onClick={clickHander}>クリックしてね</button>
      <button onClick={clickHander2}>クリックしてね</button>
    </>
  );
};

export default Example;
