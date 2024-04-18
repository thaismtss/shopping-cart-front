import Cart from "@/app/cart/page";
import { HttpResponse, http } from "msw";
import { render, screen, server, user, waitFor } from "./test-utils";

describe("Cart Page", () => {
  afterEach(() => {
    server.resetHandlers();
  });
  it("should empty cart", async () => {
    server.use(
      http.get("/api/cart", () => {
        return HttpResponse.json({
          cartItems: [],
          subtotal: 0,
          totalCartItems: 0,
        });
      })
    );

    render(<Cart />);
    await waitFor(() => {
      expect(screen.getByText("Seu carrinho está vazio")).toBeInTheDocument();
    });
  });

  it("should render cart with products", async () => {
    render(<Cart />);

    await waitFor(() => {
      expect(screen.getByText("Produto Teste 1")).toBeInTheDocument();
    });
  });

  it("should update quantity of item in cart", async () => {
    render(<Cart />);

    await waitFor(() => {
      expect(screen.getByText("Produto Teste 1")).toBeInTheDocument();
    });

    user.click(
      screen.getByRole("button", {
        name: /aumentar/i,
      })
    );

    await waitFor(() => {
      expect(screen.getByDisplayValue("2")).toBeInTheDocument();
    });
  });

  it("should delete item from cart", async () => {
    render(<Cart />);

    await waitFor(() => {
      expect(screen.getByText("Produto Teste 1")).toBeInTheDocument();
    });

    const deleteButton = screen.getByRole("button", {
      name: /remover/i,
    });

    user.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("Produto Teste 1")).not.toBeInTheDocument();
    });
  });
});
