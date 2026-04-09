// src/components/home/FeaturedProducts.jsx
import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Flex,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import ProductCard from "../product/ProductCard";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const products = [
  { id: 1, name: "Pro Series Jersey",    price: 4500,  image: "https://images.unsplash.com/photo-1541339907198-e08759dfc3f3?q=80&w=500&auto=format&fit=crop" },
  { id: 2, name: "Elite Turf Boots",     price: 8900,  image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=500&auto=format&fit=crop" },
  { id: 3, name: "Stealth Grip Gloves",  price: 2500,  image: "https://images.unsplash.com/photo-1583522676223-1a067035f212?q=80&w=500&auto=format&fit=crop" },
  { id: 4, name: "Cloud-Run Trainers",   price: 12000, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop" },
];

function FeaturedProducts() {
  const ink    = "#0D0D0D";
  const cream  = "#F5F0E8";
  const sand   = "#E8E0D0";
  const accent = "#C8A86B";

  return (
    <Box
      bg={ink}
      px={{ base: 5, md: 10, lg: 16 }}
      py={{ base: 14, md: 20 }}
      fontFamily="'Georgia', serif"
    >
      {/* Section header */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "flex-end" }}
        justify="space-between"
        mb={10}
        gap={4}
      >
        <VStack align="flex-start" spacing={3}>
          <Box w="36px" h="3px" bg={accent} />
          <Text
            fontSize="10px"
            letterSpacing="widest"
            color="whiteAlpha.400"
            textTransform="uppercase"
            fontFamily="'Arial', sans-serif"
          >
            Handpicked for You
          </Text>
          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            color={cream}
            fontWeight="900"
            textTransform="uppercase"
            letterSpacing="-1.5px"
            lineHeight={0.95}
          >
            Featured
            <Box as="span" color={accent}> Products</Box>
          </Heading>
        </VStack>

        <Button
          display={{ base: "none", md: "flex" }}
          variant="outline"
          borderColor="whiteAlpha.200"
          color={cream}
          size="sm"
          px={6}
          borderRadius="sm"
          fontWeight="600"
          fontSize="xs"
          letterSpacing="widest"
          textTransform="uppercase"
          fontFamily="'Arial', sans-serif"
          _hover={{ bg: "whiteAlpha.100", borderColor: accent, color: accent }}
          transition="all 0.2s"
          mb={1}
        >
          View All →
        </Button>
      </Flex>

      {/* Divider */}
      <Box w="full" h="1px" bg="whiteAlpha.100" mb={10} />

      {/* Product grid */}
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 5, md: 6 }}>
        {products.map((p, i) => (
          <Box
            key={p.id}
            animation={`${fadeUp} 0.55s ${i * 0.1}s ease both`}
            opacity={0}
            transition="transform 0.25s ease, box-shadow 0.25s ease"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: `0 24px 56px rgba(0,0,0,0.5)`,
            }}
            borderRadius="lg"
            overflow="hidden"
            bg="#161616"
            cursor="pointer"
          >
            <ProductCard product={p} />
          </Box>
        ))}
      </SimpleGrid>

      {/* Mobile "View All" */}
      <Flex justify="center" mt={10} display={{ base: "flex", md: "none" }}>
        <Button
          variant="outline"
          borderColor="whiteAlpha.200"
          color={cream}
          size="sm"
          px={8}
          borderRadius="sm"
          fontWeight="600"
          fontSize="xs"
          letterSpacing="widest"
          textTransform="uppercase"
          fontFamily="'Arial', sans-serif"
          _hover={{ bg: "whiteAlpha.100", borderColor: accent, color: accent }}
          transition="all 0.2s"
        >
          View All Products →
        </Button>
      </Flex>

      {/* Bottom accent strip */}
      <HStack mt={14} spacing={6} justify="center" opacity={0.35}>
        {["Free Delivery Over KES 5K", "Authentic Gear", "30-Day Returns", "Nairobi Based"].map((item) => (
          <HStack key={item} spacing={2} display={{ base: "none", md: "flex" }}>
            <Box w="4px" h="4px" borderRadius="full" bg={accent} />
            <Text
              fontSize="9px"
              color="whiteAlpha.500"
              letterSpacing="widest"
              textTransform="uppercase"
              fontFamily="'Arial', sans-serif"
            >
              {item}
            </Text>
          </HStack>
        ))}
      </HStack>
    </Box>
  );
}

export default FeaturedProducts;