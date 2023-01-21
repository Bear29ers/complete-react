import Hello from "./Hello";

/* TypeScriptでReactコンポーネントを作成する */
// React18以降はVFCは非推奨になっているので、FCを使用する
const Example: React.FC = () => {
  return <Hello />;
};

export default Example;
