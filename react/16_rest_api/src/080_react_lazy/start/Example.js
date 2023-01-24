/* コンポーネントをダイナミックインポート */
import { lazy, Suspense, useState, startTransition } from "react";

const LazyComponentA = lazy(() => import("./components/ComponentA"));
const LazyComponentB = lazy(() => import("./components/ComponentB"));

const Example = () => {
  const [compA, setCompA] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          // startTransitionメソッドで更新関数を囲うことで、次のコンポーネントが読み込まれるまで、前のコンポーネントを表示してくれる
          startTransition(() => {
            setCompA((prev) => !prev);
          });
        }}
      >
        ComponentA
      </button>
      {/* Suspenseコンポーネントでコンポーネントが読み込まれるまでの間のコンテンツを記述できる */}
      <Suspense fallback={<div>Loading!!!!!</div>}>
        {compA ? <LazyComponentA /> : <LazyComponentB />}
      </Suspense>
    </>
  );
};

export default Example;
