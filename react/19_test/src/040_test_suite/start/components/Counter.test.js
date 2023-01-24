/* テストケースをまとめる */
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

/* テストケースをどこまで記述するのか
→ 基本的には、初期表示の状態と変化があった場合
重複しないようにする */
describe("Counterコンポーネントの動作確認", () => {
  // describeを入れ子にできる
  describe("初期表示の正常確認", () => {
    test("現在のカウントが0かどうか", () => {
      render(<Counter originCount={0} />);

      const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
      expect(spanElBeforeUpdate).toBeInTheDocument();
    });

    test("現在のカウントが1かどうか", () => {
      render(<Counter originCount={1} />);

      const spanElBeforeUpdate = screen.getByText("現在のカウント:1");
      expect(spanElBeforeUpdate).toBeInTheDocument();
    });
  });

  describe("ボタン制御の確認", () => {
    test("「カウントアップ」押下で「現在のカウント」が+1されるか", () => {
      render(<Counter originCount={0} />);

      const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
      expect(spanElBeforeUpdate).toBeInTheDocument();

      const btn = screen.getByRole("button", { name: "カウントアップ" });
      fireEvent.click(btn);

      const spanEl = screen.getByText("現在のカウント:1");
      expect(spanEl).toBeInTheDocument();
    });

    test("「カウントダウン」押下で「現在のカウント」が-1されるか", () => {
      render(<Counter originCount={0} />);

      const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
      expect(spanElBeforeUpdate).toBeInTheDocument();

      const btn = screen.getByRole("button", { name: "カウントダウン" });
      fireEvent.click(btn);

      const spanEl = screen.getByText("現在のカウント:-1");
      expect(spanEl).toBeInTheDocument();
    });

    test("「クリア」押下で「現在のカウント」が0になるか", () => {
      render(<Counter originCount={2} />);

      const spanElBeforeUpdate = screen.getByText("現在のカウント:2");
      expect(spanElBeforeUpdate).toBeInTheDocument();

      const btn = screen.getByRole("button", { name: "クリア" });
      fireEvent.click(btn);

      const spanEl = screen.getByText("現在のカウント:0");
      expect(spanEl).toBeInTheDocument();
    });
  });
});
