import { useRef, forwardRef } from "react";

/* forwardRef
子コンポーネント内のDOMに直接アクセスしたい時に使用する。
refは親から子コンポーネントへprops形式で渡して参照することができないため、
参照したい場合は子コンポーネント内でforwardRefを使用する必要がある。
*/
const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
