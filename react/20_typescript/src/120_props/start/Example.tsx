import Hello, { Btn } from "./Hello";

/* Reactコンポーネントでpropsの型定義を行う */
const Example: React.FC = () => {
  return (
    <>
      <Btn fn={(text) => console.log(`Hello ${text}`)} />
      <Hello text="TypeScript">Children</Hello>;
    </>
  );
};

export default Example;
