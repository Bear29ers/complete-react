import Bye from "./components/Bye";
import Hello from "./components/Hello";

const Example = () => {
  // propsの流れは一方通行
  const name = "Tom";

  return (
    <>
      <Hello name={name} />
      <Bye name={name} />
    </>
  );
};

export default Example;
