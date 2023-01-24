import "./Container.css";

/* props.childrenとして子要素を受け取る
ここでは分割代入を使用して、props.childrenを取り出している
*/
const Container = ({ title, children, first, second, color }) => {
  return (
    <div className={`container ${color}`}>
      <h3>{title}</h3>
      <div>{children} </div>
      <div>{first} </div>
      <div>{second} </div>
    </div>
  );
};

export default Container;
