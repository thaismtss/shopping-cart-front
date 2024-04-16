"use client";
import {
  Container,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/cart";
import CartItem from "./components/CartItem";
import EmptyCart from "./components/EmptyCart";
import ResumeCart from "./components/ResumeCart";

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

export default function Cart() {
  const { cart, isLoading, refetch } = useContext(CartContext);
  async function handleDeleteItem(productId: number) {
    const res = await fetch(`/api/cart/item/${productId}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      refetch();
    }
  }

  async function handleUpdateItem(productId: number, quantity: number) {
    const res = await fetch(`/api/cart/item/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    });

    const data = await res.json();

    if (data.success) {
      refetch();
    }
  }

  return (
    <main>
      <Container maxW="container.xl" mt="10" mb="10">
        {isLoading ? (
          <Flex justifyContent="center" alignItems="center" h="70vh">
            <Spinner size="xl" />
          </Flex>
        ) : (
          <>
            {!cart || cart?.cartItems.length === 0 ? (
              <EmptyCart />
            ) : (
              <>
                <Text
                  fontSize="3xl"
                  color="#2B6CB0"
                  fontWeight="400"
                  textAlign="center"
                  textTransform="uppercase"
                >
                  Meu carrinho
                </Text>
                <Grid
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                  }}
                  gap={12}
                  mt="12"
                >
                  <GridItem>
                    <Text fontSize="xl" fontWeight="600" mb={2}>
                      {cart?.totalCartItems} Itens no carrinho
                    </Text>
                    <Flex flexDirection="column" gap={7}>
                      {cart &&
                        cart?.cartItems.map((item) => (
                          <CartItem
                            key={item.productId}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            quantity={item.quantity}
                            onRemove={() => handleDeleteItem(item.productId)}
                            onUpdate={(quantity) =>
                              handleUpdateItem(item.productId, quantity)
                            }
                          />
                        ))}
                    </Flex>
                  </GridItem>
                  <GridItem mt={{ md: 10 }}>
                    <ResumeCart
                      quantityItems={cart?.totalCartItems || 0}
                      subtotal={cart?.subtotal || 0}
                      shipping={0}
                      total={cart?.subtotal || 0}
                    />
                  </GridItem>
                </Grid>
              </>
            )}
          </>
        )}
      </Container>
    </main>
  );
}
