import { useRouter } from "next/router";

export default function Page({ id, date }) {
  const router = useRouter();
  // ページが存在しない状態だとtrueになる
  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }
  return (
    <h3>
      このページは{id}です。{date}
    </h3>
  );
}

// getStaticPaths関数を使用して[id]に該当するページを定義する
export async function getStaticPaths() {
  console.log("getStaticPaths executed");
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
    ],
    // paramsに存在しないページへのアクセスがあった場合にNode.jsが自動的にページを生成する
    // fallback: true,
    // 別の存在しないページへのアクセス時にisFallbackを無視して遷移する
    fallback: "blocking",
  };
}

// contextにparamsの情報が含まれているので、そちらでidを取得する
// 初回の一度のみ実行される
export async function getStaticProps({ params }) {
  console.log("getStaticProps executed");
  const date = new Date();
  return {
    props: {
      id: params.id,
      // 直接Date型のオブジェクトを渡すことができないので、String型に変換する
      date: date.toJSON(),
    },
    // 5秒間は静的ファイルを再生成しない
    revalidate: 5,
    /*
    ・SGでは一度生成した静的ファイルは変更されない
    ・ISRでは設定した秒数ごとに変更がある場合は静的ファイルが更新される
    ・SSRではリクエストを投げるたびに静的ファイルが更新される
     */
  };
}
