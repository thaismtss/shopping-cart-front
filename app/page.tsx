"use client";
import { Container, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import HeroSection from "./Components/HeroSection";
import ProductCard from "./Components/ProductCard";
import ProductSkeleton from "./Components/ProductSkeleton";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {
  const router = useRouter();
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products?limit=6").then((res) =>
        res.json()
      ),
  });

  async function handleAddToCart(product: Product) {
    const res = await fetch("/api/cart/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: product.id,
        quantity: 1,
        image: product.image,
        price: product.price,
        title: product.title,
      }),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/cart");
    }
  }

  return (
    <main>
      <HeroSection>FakeStore</HeroSection>
      <Container maxW="container.xl" mt="10">
        <Text
          fontSize="3xl"
          color="#2B6CB0"
          fontWeight="400"
          textAlign="center"
          textTransform="uppercase"
        >
          Novidades
        </Text>
      </Container>
      <Container maxW="container.xl" mt="10" mb="20">
        <Flex flexWrap="wrap" gap={3}>
          {isLoading &&
            [...Array(6)].map((_, index) => <ProductSkeleton key={index} />)}
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.image}
              title={product.title}
              price={product.price}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </Flex>
      </Container>
    </main>
  );
}
