import { useState } from "react";

/* 条件分岐 if文、&&、??（Null合体演算子）、三項演算子
A ?? B（Aがnullもしくはundefinedの時、Bを使う）
*/
const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {
            // if文
            // if (animal === "Dog") {
            //   return <li key={animal}>{animal}★</li>;
            // } else {
            //   return <li key={animal}>{animal}</li>;
            // }
            // 三項演算子
            // return (
            //   <li key={animal}>{animal === "Dog" ? animal + "★" : animal}</li>
            // );
            return (
              <li key={animal}>
                {animal ?? "null,undefinedでした"}
                {animal === "Dog" && "★"}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Example;
