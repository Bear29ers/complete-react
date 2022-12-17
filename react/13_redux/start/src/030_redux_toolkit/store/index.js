import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/counter";

// configureStoreの場合はあらかじめ複数のreducerが登録される設計になっている
export default configureStore({
  reducer: {
    counter: reducer,
  },
});
