/* テストコードの基本
Arrage:(テストデータ、条件、環境の設定)
Act:(ロジックの実行、関数の実行)
Assertion:(実行結果と期待する結果の比較)
*/

import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("「カウントアップ」押下で「現在のカウント」が+1される", () => {
  // Arrange
  render(<Counter originCount={0} />);

  // 更新前をテストするとより正確になる
  const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
  expect(spanElBeforeUpdate).toBeInTheDocument();

  // Act
  const btn = screen.getByRole("button", { name: "カウントアップ" });
  fireEvent.click(btn);

  // Assertion
  const spanEl = screen.getByText("現在のカウント:1");
  expect(spanEl).toBeInTheDocument();
});
