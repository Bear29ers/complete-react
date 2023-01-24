// propsの型定義
type HelloProps = {
  text: string;
  // React18からはchildrenを型を明示的に定義する必要がある
  children: React.ReactNode;
};

// ジェネリクスとして型をセットする
const Hello: React.FC<HelloProps> = (props) => {
  return (
    <h1>
      Hello {props.text}! {props.children}
    </h1>
  );
};

type FnProps = {
  fn: (text: string) => void;
};

// propsとして関数を渡す場合
export const Btn: React.FC<FnProps> = (props) => {
  return <button onClick={() => props.fn("TypeScript")}>ボタン</button>;
};
export default Hello;
