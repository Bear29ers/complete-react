/* DOM要素の取得方法 */
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

it("should have h1 tag", () => {
  // debugを戻り値として受け取る
  // containerにはレンダリング結果が格納されている
  const { debug, container } = render(<Greet />);

  // テキストで要素を取得
  // const h1El = screen.getByText("こんにちは");
  // expect(h1El).toBeInTheDocument();

  // roleで要素を取得
  // const radioEl = screen.getByRole("radio");
  // screen.getAllByRole("radio");
  // debug(radioEl);
  // expect(radioEl).toBeInTheDocument();

  // const imgEl = screen.getByRole("img");
  // debug(imgEl);

  // alt属性でimgタグを取得する
  // const imgEl = screen.getByAltText("React Logo");
  // debug(imgEl);

  // 複数見出しタグがある場合はテキストの内容を指定して取得する
  // const headingEl = screen.getByRole("heading", { name: "こんにちは" });
  // debug(headingEl);

  // containerからquerySelectorで要素を取得
  // const h2El = container.querySelector("h2");
  // debug(h2El);

  // labelタグに紐づいたinput要素を取得
  // const elByLabel = screen.getByLabelText("氏名");
  // debug(elByLabel);

  // placeholder属性を設定しているinput要素を取得
  const elByPlaceholder = screen.getByPlaceholderText("Yuta Okuma");
  debug(elByPlaceholder);
});
