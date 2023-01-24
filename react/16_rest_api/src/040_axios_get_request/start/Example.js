/* axiosでGetリクエスト */
// https://axios-http.com/

import { useEffect } from "react";
import axios from "axios";

const Example = () => {
  useEffect(() => {
    /* axios.get("http://localhost:3003/user").then((res) => {
      console.log(res.data);
    }); */

    // useEffect関数では先頭にasyncキーワードを使用することができないため、useEffectの中で別関数を定義してその関数でasyncを使用する
    const getUser = async () => {
      const res = await axios.get("http://localhost:3003/user");
      console.log(res.data);
    };
    getUser();
  });
  return <></>;
};

export default Example;
