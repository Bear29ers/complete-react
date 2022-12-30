import "../styles/globals.css";
import { AppProvider } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    // どのページからでもcontextを取得できるようにする
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
