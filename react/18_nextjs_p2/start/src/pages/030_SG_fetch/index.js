import axios from "axios";
import ArticleList from "../../components/articleList";

export default function Page({ articles }) {
  if (!articles) {
    return <div>データがありません。</div>;
  }

  return (
    <>
      <h3>Fetch & SG</h3>
      <ArticleList list={articles} />
    </>
  );
}

export async function getStaticProps() {
  const ENDPOINT = "http://localhost:4030/articles";
  const result = await axios.get(ENDPOINT).then((res) => res.data);
  return { props: { articles: result } };
}
