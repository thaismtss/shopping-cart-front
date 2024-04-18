import Home from "@/app/page";
import { act } from "react-dom/test-utils";
import { mockRouter, render, screen, user, waitFor } from "./test-utils";

describe("Home", () => {
  it("should render Home", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: "FakeStore" })
    ).toBeInTheDocument();
  });

  it("should render Home with products", async () => {
    render(<Home />);

    await waitFor(async () => {
      expect(screen.getByText("Produto Teste 1")).toBeInTheDocument();
    });
  });

  it("should render Home with products and add to cart", async () => {
    render(<Home />);

    await waitFor(async () => {
      expect(screen.getByText("Produto Teste 1")).toBeInTheDocument();
    });

    act(() => {
      user.click(screen.getByRole("button", { name: "Adicionar ao carrinho" }));
    });

    await waitFor(async () => {
      expect(mockRouter.asPath).toBe("/cart");
    });
  });
});
