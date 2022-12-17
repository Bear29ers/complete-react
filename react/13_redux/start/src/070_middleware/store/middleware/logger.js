const logger = (store) => {
  return (next) => {
    return (action) => {
      // 更新前のstateの状態が取得できる
      console.log("変更前", store.getState());
      next(action);
      // 更新後
      console.log("変更後", store.getState());
    };
  };
};

export default logger;
