"use client";
import { useDebounce } from "@/app/hooks/useDebounce";
import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  IconButton,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { Trash } from "lucide-react";
import { useEffect, useState } from "react";

interface CartItemProps {
  title: string;
  price: number;
  image: string;
  quantity: number;
  onRemove: () => void;
  onUpdate: (quantity: number) => void;
}
export default function CartItem({
  title,
  price,
  image,
  quantity,
  onRemove,
  onUpdate,
}: CartItemProps) {
  const [quantityValue, setQuantityValue] = useState(quantity);
  const debouncedQuantity = useDebounce(quantityValue, 700);

  useEffect(() => {
    if (typeof debouncedQuantity === "number") {
      onUpdate(debouncedQuantity);
    }
  }, [debouncedQuantity, onUpdate]);

  function handleChangeQuantity(event: React.ChangeEvent<HTMLInputElement>) {
    setQuantityValue(Number(event.target.value));
  }

  function handlePlusQuantity() {
    setQuantityValue(quantityValue + 1);
  }

  function handleMinusQuantity() {
    if (quantityValue > 1) {
      setQuantityValue(quantityValue - 1);
    }
  }

  function handleDeleteItem() {
    onRemove();
  }

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      border="1px solid #e2e8f0"
    >
      <Image
        src={image}
        alt={title}
        objectFit="contain"
        p={4}
        w={{ base: "100%", sm: "100px" }}
      />
      <CardBody
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={4}
      >
        <Box w="100%">
          <Text fontSize="lg" fontWeight={600}>
            {title}
          </Text>
          <Text fontSize="lg" fontWeight={600} color="gray.500">
            R$ {price}
          </Text>
        </Box>
        <HStack maxW="160px">
          <Button onClick={handleMinusQuantity}>-</Button>
          <Input
            value={quantityValue}
            textAlign="center"
            onChange={handleChangeQuantity}
          />
          <Button onClick={handlePlusQuantity}>+</Button>
        </HStack>
        <IconButton
          aria-label="Remover"
          icon={<Trash />}
          onClick={handleDeleteItem}
        />
      </CardBody>
    </Card>
  );
}
