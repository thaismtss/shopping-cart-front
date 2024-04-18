import { HttpResponse, http } from "msw";

interface CartItem {
  productId: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

let cartItems: CartItem[] = [
  {
    productId: 1,
    title: "Produto Teste 1",
    price: 100,
    image: "",
    quantity: 1,
  },
];

export const cartHandler = [
  http.get("/api/cart", () => {
    return HttpResponse.json({
      cartItems,
      subtotal: 0,
      totalCartItems: 1,
    });
  }),

  http.post("/api/cart/item", () => {
    return HttpResponse.json({
      success: true,
    });
  }),

  http.delete("/api/cart/item/:id", ({ params }) => {
    const { id } = params;
    cartItems = cartItems.filter((item) => item.productId !== Number(id));
    return HttpResponse.json({
      success: true,
    });
  }),

  http.patch("/api/cart/item/:id", async ({ request, params }) => {
    const { id } = params;
    const product = (await request.json()) as { quantity: number };
    cartItems = cartItems.map((item) => {
      if (item.productId === Number(id)) {
        return {
          ...item,
          quantity: product.quantity,
        };
      }
      return item;
    });

    return HttpResponse.json({
      success: true,
    });
  }),
];
