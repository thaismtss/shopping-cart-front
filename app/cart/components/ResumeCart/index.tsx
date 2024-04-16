import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";

interface ResumeCartProps {
  quantityItems: number;
  subtotal: number;
  shipping: number;
  total: number;
}

export default function ResumeCart({
  quantityItems,
  subtotal,
  shipping,
  total,
}: ResumeCartProps) {
  return (
    <Card border="1px solid #e2e8f0">
      <CardBody>
        <Text textAlign="center" fontWeight={600} fontSize="xl">
          Resumo do pedido
        </Text>
        <Divider my={4} />
        <HStack justifyContent="space-between">
          <Text fontWeight={600}>Itens</Text>
          <Text>{quantityItems}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text fontWeight={600}>Subtotal</Text>
          <Text>R$ {subtotal}</Text>
        </HStack>
        <Divider my={4} />
        <HStack justifyContent="space-between">
          <Text fontWeight={600}>Total</Text>
          <Text>R$ {total}</Text>
        </HStack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing={3} width="100%">
          <Button variant="outline" colorScheme="blue" width="100%">
            <Link href="/">Continuar comprando</Link>
          </Button>
          <Button variant="solid" colorScheme="blue" width="100%">
            Finalizar compra
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
