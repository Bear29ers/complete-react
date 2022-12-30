import { useRouter } from "next/router";

export default function MultiPage() {
  const router = useRouter();
  // クエリパラメータで渡ってきた値は文字列型になる
  const step = router.query.step ?? 0;

  const goToStep = (_step, asPath) => {
    router.push(`/08_multipage?step=${_step}`, asPath);
  };

  /* asPathで指定しているURLに直接アクセスした場合は404エラーとなる
  これを回避するにはnext.config.jsでrewritesメソッドにdestinationを記載する */

  // http://localhost:3001/08_multipage
  // http://localhost:3001/personal
  // http://localhost:3001/confirm
  // http://localhost:3001/08_multipage

  return (
    <div>
      {step == 0 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(1, "/parsonal")}>Next Step</button>
        </>
      )}
      {step == 1 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(2, "/confirm")}>Next Step</button>
        </>
      )}
      {step == 2 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(0, "/08_multipage")}>
            Next Step
          </button>
        </>
      )}
    </div>
  );
}
