/* ダイナミックインポートとは */
import { add } from "./add"; // static import

const Example = () => {
  // import関数（promiseが帰ってくる） → dynamic import
  import("./add").then((module) => {
    console.log(module);
  });

  // 関数で記述すればawait構文も使える
  const dynamicImport = async () => {
    const module = await import("./add");
    console.log(module);
  };
  dynamicImport();

  console.log(add(1, 2));
};

export default Example;
