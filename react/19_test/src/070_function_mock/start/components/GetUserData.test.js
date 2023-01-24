/* 外部APIのモック化の手法について */
import { render, screen } from "@testing-library/react";
import GetUserData from "./GetUserData";
import { ENDPOINT_URL } from "../Example";
import axios from "axios";

// モック化
jest.mock("axios");

describe("GetUserDataコンポーネントの動作確認", () => {
  test("外部データ取得中", async () => {
    axios.get.mockResolvedValue({
      data: {
        id: 2,
        name: "コードマフィア",
      },
    });

    render(<GetUserData url={ENDPOINT_URL} />);
    const h1El = await screen.findByRole("heading", { name: "通信中です！" });
    expect(h1El).toBeInTheDocument();
  });

  test("外部データ取得後", async () => {
    // ここで設定した値がGETメソッドのレスポンスとなる
    axios.get.mockResolvedValue({
      data: {
        id: 2,
        name: "コードマフィア",
      },
    });

    render(<GetUserData url={ENDPOINT_URL} />);
    // findByRoleは非同期処理で、探している要素が見つかるまでこの処理で待機する
    const h2El = await screen.findByRole("heading", { name: "プロフィール" });
    expect(h2El).toBeInTheDocument();

    // タグを複数取得する → findAllByRole
    const itemEls = await screen.findAllByRole("listitem");
    expect(itemEls[0].textContent).toBe("ID: 2");
    expect(itemEls[1].textContent).toBe("Name: コードマフィア");
  });
});
