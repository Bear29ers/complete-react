import { useCalc, useCalcDispach } from "../context/CalcProvider";

const Input = ({ name }) => {
  const state = useCalc();
  const dispatch = useCalcDispach();

  const numChangeHandler = (e) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  return (
    <div>
      {name}:
      <input
        type="number"
        name={name}
        value={state[name]}
        onChange={numChangeHandler}
      />
    </div>
  );
};

export default Input;
