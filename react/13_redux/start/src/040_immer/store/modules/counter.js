import { createSlice } from "@reduxjs/toolkit";

// useReducerと同様に純粋関数であることとImmutabilityを保つことが必要
const counter = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, { payload }) {
      // Toolkitの中ではmutableな操作を行っても問題ない
      state.count = state.count + payload;
      /* const newState = { ...state };
      newState.count = state.count + payload;
      return newState; */
    },
    minus(state, { payload }) {
      // mutableな値を変更した場合はreturnしない
      state.count = state.count - payload;
      /* const newState = { ...state };
      newState.count = state.count - payload;
      return newState; */
    },
  },
});

const { add, minus } = counter.actions;

export { add, minus };
export default counter.reducer;
