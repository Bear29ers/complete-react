/* ErrorBoundaryの使い方 */
import { Component } from "react";
import BuggyCounter from "./component/BuggyCounter";
import ErrorBoundary from "./component/ErrorBoundary";

// 現在のところ、Error Boundaryはクラスコンポーネントでしか使用できない
// Error Boundaryを使用すると、エラーが発生した用のUIを表示させることができる
class Example extends Component {
  render() {
    return (
      <div>
        <h3>React16 Error Boundaries</h3>
        <p>下記の数値をクリック！</p>
        <hr />
        <h4>同じError Boundary内のコンポーネント</h4>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <h4>異なるError Boundary内のコンポーネント</h4>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </div>
    );
  }
}

export default Example;
