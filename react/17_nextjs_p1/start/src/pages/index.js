import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* as属性でURL表示内容を指定できる */}
      {/*<Link href="/07_router" as="/dummy-url" >*/}
      <Link href={{ pathname: "/07_router", query: { key: "value" } }}>
        <a>/07_router</a>
      </Link>
      <Link href="/07_router/hello/settings">
        <a>/07_router</a>
      </Link>
      {/* aタグだと画面遷移の際に読み込みが実行される */}
      {/*<a href="/07_router">/07_router</a>*/}
    </>
  );
}
