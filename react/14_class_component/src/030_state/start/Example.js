/* クラスコンポーネントにおける状態管理 */
import { Component } from "react";

class SwitchButton extends Component {
  // クラスが呼ばれる際に一度だけ実行される
  constructor(props) {
    super(props);
    this.state = {
      // stateの初期値
      switchOn: true,
      label: "On",
    };
    // thisの束縛
    this.changeSwitch = this.changeSwitch.bind(this);
  }

  // イベントハンドラー
  changeSwitch() {
    // thisの呼び出し方によって参照先が変わる
    this.setState((prevState) => {
      return {
        switchOn: !prevState.switchOn,
        label: !prevState.switchOn ? "On" : "Off",
      };
    });
  }

  render() {
    const { label } = this.state;
    return <button onClick={this.changeSwitch}>{label}</button>;
  }
}
const Example = () => {
  return (
    <>
      <SwitchButton />
    </>
  );
};

export default Example;
