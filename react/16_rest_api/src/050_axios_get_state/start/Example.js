/* サーバーから取得したデータを画面表示 */

import axios from "axios";
import { useEffect, useState } from "react";

// Reactとしては非同期処理で取得したデータはstateを使用して画面に表示させる
const Example = () => {
  // 初期値に空の配列を指定しないと、JSXでのmapメソッドによる展開でundefinedとなってしまいエラーとなる
  // もしくはmapメソッドを使用する際にオプショナル記法を使用する
  const [users, setUsers] = useState([]);

  // useEffectの第2引数に空の配列を指定する → setUsersの呼び出しによる無限ループを防ぐ
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("http://localhost:3003/user");
      setUsers(res.data);
    };
    getUser();
  }, []);

  return (
    <div>
      {users?.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>age: {user.age}</p>
            <p>hobby: {user.hobbies.join(", ")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Example;
