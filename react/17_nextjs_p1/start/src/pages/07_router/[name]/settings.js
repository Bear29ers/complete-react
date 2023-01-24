import { useRouter } from "next/router";

export default function Setting({ query }) {
  // パスの情報や画面遷移に使う情報が取得できる
  const router = useRouter();

  const clickHandler = () => {
    // 第2引数に設定したURLがブラウザに表示される（実際に遷移するのは第1引数のURL）
    // router.push("/", "/dummy-url");

    // アクセス履歴が上書きされる（ブラウザバックで戻れなくなる）
    router.replace("/", "/dummy-url");

    // 一つ前の画面に戻る
    router.back();

    // 画面を更新する
    router.reload();
  };

  return (
    <>
      <h1>routerから取得：{router.query.name}</h1>
      <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  );
}

// SSRの際の関数コンポーネントのpropsを定義する関数
export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}
