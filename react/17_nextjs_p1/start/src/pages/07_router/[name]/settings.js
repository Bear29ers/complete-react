import { useRouter } from "next/router";

export default function Setting({ query }) {
  // パスの情報や画面遷移に使う情報が取得できる
  const router = useRouter();
  console.log(router);
  return <h1>routerから取得：{router.query.name}</h1>;
}

// SSRの際の関数コンポーネントのpropsを定義する関数
export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}
