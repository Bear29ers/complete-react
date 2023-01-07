// API Routes
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ArticleList from "../../components/articleList";

export default function Page() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const ENDPOINT = "/api/articles";
      const result = await axios.get(ENDPOINT).then((res) => res.data);
      setArticles(result);
    };
    getArticles();
  }, []);

  return (
    <>
      <Head>
        <title>ページ一覧</title>
      </Head>
      <h3>Fetch & SG</h3>
      <ArticleList list={articles} />
    </>
  );
}
