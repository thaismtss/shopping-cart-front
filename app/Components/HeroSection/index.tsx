import { Box, Image, Text } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

interface HeroSectionProps {
  children: string;
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <Box position="relative" height="250px" flexShrink={0}>
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundColor="#2b6cb0c4"
      />
      <Image
        src="/img/banner.jpg"
        alt="Banner"
        width="100%"
        height="100%"
        objectFit="cover"
      />
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        fontSize="4xl"
        fontWeight="700"
        textShadow="0 0 10px rgba(0, 0, 0, 0.5)"
        textAlign="center"
        className={montserrat.className}
      >
        {children}
      </Text>
    </Box>
  );
}
