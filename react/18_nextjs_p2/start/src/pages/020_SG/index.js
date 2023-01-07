// Static Site Generation
export default function IndexPage({ message }) {
  return <h3>SG:{message}</h3>;
}

// getStaticProps関数を用いてpropsをページに渡す
// Node.js上でビルド時に実行される
export async function getStaticProps() {
  return {
    props: { message: "From Static Props" },
  };
}
