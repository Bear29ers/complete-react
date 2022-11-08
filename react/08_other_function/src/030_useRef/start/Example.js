import { useRef, useState } from "react";

/* POINT useRefでDOMを取得
refオブジェクトでref属性に渡すとDOMを参照することができる。
*/
const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  // console.log(inputRef);

  return (
    <div>
      <h3>ユースケース1</h3>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

// POINT 動画の再生・停止を制御
const Case2 = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();
  return (
    <div>
      <video style={{ maxWidth: "100%" }} ref={videoRef}>
        <source src="./sample.mp4"></source>
      </video>
      <button
        onClick={() => {
          if (playing) {
            videoRef.current.pause();
          } else {
            videoRef.current.play();
          }
          setPlaying((prev) => !prev);
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

const createTimeStamp = () => new Date().getTime();

/* POINT useRefは再レンダリングされない。
書き換え可能な情報としてコンポーネントに保持させておくことができる。
stateは更新されるごとに再レンダーされるが、refオブジェクトの中身が変わっても再レンダーが走ることはない。
*/
const Case3 = () => {
  const [timeStamp, setTimeStamp] = useState(createTimeStamp());
  const ref = useRef(createTimeStamp());

  const updateState = () => {
    setTimeStamp(createTimeStamp());
  };

  const updateRef = () => {
    // コンソールを見るとブラウザの表示と、ref.currentの中身が異なることを確認できる
    ref.current = createTimeStamp();
    console.log("ref.current -> ", ref.current);
  };

  return (
    <div>
      <h3>ユースケース3</h3>
      <p>
        state: {timeStamp}
        <button onClick={updateState}>更新</button>
      </p>
      <p>
        ref: {ref.current}
        <button onClick={updateRef}>更新</button>
      </p>
    </div>
  );
};

/* POINT refを使うべきタイミング
Reactでは一般的に、propsを通して親から子へ作用させる、というデータフローが原則。
refを使ってコンポーネントに作用を起こすことは、その原則を崩す行為なので多用は避ける。

refに適した使用例は以下の場合とされている。
- フォームへのフォーカス、テキストの選択、メディア（動画・音声）の再生の管理
- アニメーションの発火
- サードパーティのDOMや、React管理外のDOMの埋め込み
*/
const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
      <Case3 />
    </>
  );
};

export default Example;
