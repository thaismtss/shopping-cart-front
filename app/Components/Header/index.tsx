"use client";
import { CartContext } from "@/app/context/cart";
import { Box, Link, Text } from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";

export default function Header() {
  const { cart, isLoading } = useContext(CartContext);
  return (
    <Box as="header" p={18} w="100%" bg="#2b6cb0" display="flex">
      <Text color="white" fontWeight={600}>
        <Link href="/" outline="none">
          FakeStore
        </Link>
      </Text>
      <Link
        color="white"
        ml="auto"
        display="flex"
        alignItems="center"
        gap={2}
        href="/cart"
      >
        <ShoppingCart />
        Carrinho ({!isLoading ? cart?.totalCartItems : " "})
      </Link>
    </Box>
  );
}
