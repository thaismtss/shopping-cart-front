"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: number;
  onAddToCart: () => void;
}

export default function ProductCard({
  imageUrl,
  title,
  price,
  onAddToCart,
}: ProductCardProps) {
  const handleAddToCart = () => {
    onAddToCart();
  };

  return (
    <Card maxW="sm" flexBasis="calc(33.3333% - 20px)" margin="10px">
      <CardBody display="flex" flexDirection="column" gap={3}>
        <Image
          src={imageUrl}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          objectFit="contain"
          maxW={{ base: "100%", sm: "200px" }}
          height="200px"
          margin="auto"
        />
        <Heading size="md" flex={1}>
          {title}
        </Heading>
        <Text color="blue.600" fontSize="2xl">
          R$ {price}
        </Text>
      </CardBody>
      <Box>
        <Divider />
      </Box>
      <CardFooter>
        <Button
          variant="solid"
          colorScheme="blue"
          width="100%"
          onClick={handleAddToCart}
        >
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
}
