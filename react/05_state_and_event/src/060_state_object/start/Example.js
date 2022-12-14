/* 
プリミティブ型: 1, 'str', boo, 10n, Symbol(), null, undefined
オブジェクト型: {}, []などのプリミティブ型以外
オブジェクト型のstateを変更する場合には必ず新しいオブジェクトを作成する
*/
import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
    console.log({ ...person } === person);
    // オブジェクトのstate更新は新しいオブジェクトを設定する必要がある
    // setPerson({ name: e.target.value, age: person.age });
    // スプレッド構文で実装
    setPerson({ ...person, name: e.target.value });
  };

  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value });
  };

  const reset = () => {
    setPerson({ name: "", age: "" });
  };

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <div>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  );
};

export default Example;
