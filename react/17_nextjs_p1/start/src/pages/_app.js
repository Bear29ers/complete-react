// ページ全体で使用するようなスタイルは_app.jsで読み込む
import "../styles/globals.css";
import { AppProvider } from "../context/AppContext";
import Layout1 from "../components/layout/layout1";

// pagesディレクトリ以下のコンポーネントが実行される際に必ず通るコンポーネントを_app.jsに記述する
function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ?? ((page) => <Layout1>{page}</Layout1>);
  return (
    // どのページからでもcontextを取得できるようにする
    <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
  );
}

export default MyApp;
