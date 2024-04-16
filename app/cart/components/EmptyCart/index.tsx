import { Button, Center, Link, Text, VStack } from "@chakra-ui/react";

export default function EmptyCart() {
  return (
    <Center h="70vh">
      <VStack spacing={6}>
        <Center>
          <Text textAlign="center" mt="12" fontSize="3xl">
            Seu carrinho está vazio
          </Text>
        </Center>
        <Center>
          <Button variant="solid" colorScheme="blue">
            <Link href="/">Ver Produtos</Link>
          </Button>
        </Center>
      </VStack>
    </Center>
  );
}
