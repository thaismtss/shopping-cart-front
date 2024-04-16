import { Skeleton, Stack } from "@chakra-ui/react";

export default function ProductSkeleton() {
  return (
    <Stack maxW="sm" minW="xs" flexBasis="calc(33.3333% - 20px)" margin="10px">
      <Skeleton height="200px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
}
