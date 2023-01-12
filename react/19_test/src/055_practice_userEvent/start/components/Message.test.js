import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Message from "./Message";

describe("Messageコンポーネントの動作確認", () => {
  describe("初期表示の正常性確認", () => {
    test("input要素が存在するか", () => {
      render(<Message />);
      // const inputEl = screen.getByRole("textbox");
      const inputEl =
        screen.getByPlaceholderText("メッセージを入力してください");
      expect(inputEl).toBeInTheDocument();
    });
  });

  describe("画面操作正常性確認", () => {
    test("input要素のstateが更新され、値が正しく変更されているか", async () => {
      const user = userEvent.setup();

      render(<Message />);

      const inputEl = screen.getByRole("textbox");

      await user.type(inputEl, "こんにちは");

      expect(inputEl.value).toBe("こんにちは");
    });
  });
});
