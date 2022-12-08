// 素のReduxでグローバルな状態管理を記述する
import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";
import { Provider } from "react-redux";
import store from "./store";

// useContext & useReducer
const Example = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Example;
