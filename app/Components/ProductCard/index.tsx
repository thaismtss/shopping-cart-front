"use client";

import {
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
}

export default function ProductCard({
  imageUrl,
  title,
  price,
}: ProductCardProps) {
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
      <Divider />
      <CardFooter>
        <Button variant="solid" colorScheme="blue" width="100%">
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
}
