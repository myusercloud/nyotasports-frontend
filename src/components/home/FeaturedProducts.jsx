import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import ProductCard from "../product/ProductCard";

const products = [
  { id: 1, name: "Pro Series Jersey", price: 4500, image: "https://images.unsplash.com/photo-1541339907198-e08759dfc3f3?q=80&w=500&auto=format&fit=crop" },
  { id: 2, name: "Elite Turf Boots", price: 8900, image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=500&auto=format&fit=crop" },
  { id: 3, name: "Stealth Grip Gloves", price: 2500, image: "https://images.unsplash.com/photo-1583522676223-1a067035f212?q=80&w=500&auto=format&fit=crop" },
  { id: 4, name: "Cloud-Run Trainers", price: 12000, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop" },
];

function FeaturedProducts() {
  const beigeWhite = "#FAF9F6";
  const deepBlack = "#1A1A1A";

  return (
    <Box p={{ base: 6, md: 12 }} bg={beigeWhite}>
      <VStack align={{ base: "center", md: "flex-start" }} mb={10} spacing={2}>
        <Heading 
          fontSize={{ base: "2xl", md: "3xl" }} 
          color={deepBlack} 
          textTransform="uppercase"
          fontWeight="900"
        >
          Featured Products
        </Heading>
        <Box w="80px" h="4px" bg={deepBlack} />
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default FeaturedProducts;