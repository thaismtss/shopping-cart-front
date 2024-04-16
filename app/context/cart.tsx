"use client";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

interface Cart {
  cartItems: {
    productId: number;
    title: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  subtotal: number;
  totalCartItems: number;
}

type CartContextType = {
  cart: Cart | undefined;
  isLoading: boolean;
  refetch: () => void;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const {
    data: cart,
    isLoading,
    refetch,
  } = useQuery<Cart>({
    queryKey: ["cart"],
    queryFn: () => fetch("/api/cart").then((res) => res.json()),
  });

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        refetch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
