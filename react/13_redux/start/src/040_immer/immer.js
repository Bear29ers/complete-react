import { produce } from "immer";

const state = {
  name: "Tom",
  hobbies: ["tennis", "soccer"],
};
// produce(コピー元オブジェクト、コールバック関数)
// immerを使用してimmutabilityを保持する
// const newState = state;
// newState.name = 'John';
const newState = produce(state, (draft) => {
  draft.name = "John";
  draft.hobbies[0] = "baseball";

  console.log(draft);
  // mutableな操作をした場合はreturnしない ← エラーの原因になる
  // return state;
});

console.log(state, newState);
