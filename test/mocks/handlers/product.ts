import { HttpResponse, http } from "msw";
export const productsHandler = [
  http.get("https://fakestoreapi.com/products", () => {
    return HttpResponse.json([
      {
        id: 1,
        title: "Produto Teste 1",
        price: 109.95,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
    ]);
  }),
];
