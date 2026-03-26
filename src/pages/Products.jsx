// src/pages/Products.jsx
import { 
  Box, 
  SimpleGrid, 
  Heading, 
  Text, 
  VStack, 
  Container, 
  HStack, 
  Select, 
  Divider 
} from "@chakra-ui/react";
import ProductCard from "../components/product/ProductCard";

// Import your existing header and footer
import Navbar from "../components/layout/Navbar2";
import Footer from "../components/layout/Footer2";

// 20 Diversified Sports Products
const products = [
  { id: 1, name: "Premier League Ball", price: 4500, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=500&auto=format&fit=crop" },
  { id: 2, name: "Elite Basketball", price: 3800, image: "https://images.unsplash.com/photo-1546519156-d8121288c54e?q=80&w=500&auto=format&fit=crop" },
  { id: 3, name: "Pro Graphite Racket", price: 12500, image: "https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?q=80&w=500&auto=format&fit=crop" },
  { id: 4, name: "CloudRun Sneakers", price: 9500, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop" },
  { id: 5, name: "Compression Jersey", price: 3200, image: "https://images.unsplash.com/photo-1580087444152-c2b6239df5b0?q=80&w=500&auto=format&fit=crop" },
  { id: 6, name: "Stealth Goalie Gloves", price: 2800, image: "https://images.unsplash.com/photo-1583522676223-1a067035f212?q=80&w=500&auto=format&fit=crop" },
  { id: 7, name: "Carbon Fiber Helmet", price: 15000, image: "https://images.unsplash.com/photo-1558444053-ff44c0239191?q=80&w=500&auto=format&fit=crop" },
  { id: 8, name: "Yoga Master Mat", price: 2200, image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=500&auto=format&fit=crop" },
  { id: 9, name: "Adjustable Dumbbell", price: 7500, image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?q=80&w=500&auto=format&fit=crop" },
  { id: 10, name: "Speed skipping Rope", price: 1200, image: "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=500&auto=format&fit=crop" },
  { id: 11, name: "Stadium Scarf", price: 1800, image: "https://images.unsplash.com/photo-1520367288098-2794e89920b3?q=80&w=500&auto=format&fit=crop" },
  { id: 12, name: "Waterproof Duffel", price: 5400, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500&auto=format&fit=crop" },
  { id: 13, name: "Performance Socks", price: 950, image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=500&auto=format&fit=crop" },
  { id: 14, name: "Hydration Bottle", price: 1500, image: "https://images.unsplash.com/photo-1602143303410-fd3d39e36500?q=80&w=500&auto=format&fit=crop" },
  { id: 15, name: "Boxing Wraps", price: 1100, image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=500&auto=format&fit=crop" },
  { id: 16, name: "Terrain Hiking Boots", price: 13500, image: "https://images.unsplash.com/photo-1520639889456-47abab4d2b9b?q=80&w=500&auto=format&fit=crop" },
  { id: 17, name: "Cycling Shorts", price: 3900, image: "https://images.unsplash.com/photo-1517707711963-adf9078bdf71?q=80&w=500&auto=format&fit=crop" },
  { id: 18, name: "Swim Goggles Pro", price: 2100, image: "https://images.unsplash.com/photo-1551698618-1fed5d978044?q=80&w=500&auto=format&fit=crop" },
  { id: 19, name: "Resistance Band Set", price: 2800, image: "https://images.unsplash.com/photo-1598289431512-b97b0917a63e?q=80&w=500&auto=format&fit=crop" },
  { id: 20, name: "Reflective Run Vest", price: 3400, image: "https://images.unsplash.com/photo-1518611012118-296062030659?q=80&w=500&auto=format&fit=crop" },
];

const Products = () => {
  const beigeWhite = "#FAF9F6";
  const deepBlack = "#1A1A1A";

  return (
    <Box bg={beigeWhite} minH="100vh">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box py={12}>
        <Container maxW="container.xl">
          {/* Header Section */}
          <VStack spacing={4} mb={12} align={{ base: "center", md: "flex-start" }}>
            <Heading 
              fontSize={{ base: "3xl", md: "5xl" }} 
              color={deepBlack} 
              textTransform="uppercase" 
              fontWeight="900"
            >
              Shop Products
            </Heading>
            <Text color="gray.600" fontSize="lg">
              High-performance gear curated for the modern athlete.
            </Text>
            <Box w="100px" h="5px" bg={deepBlack} />
          </VStack>

          {/* Filter Bar */}
          <HStack justify="space-between" mb={8} w="full" wrap="wrap" gap={4}>
            <Text fontWeight="bold" fontSize="sm" color="gray.500">
              SHOWING {products.length} PRODUCTS
            </Text>
            <HStack spacing={4}>
              <Select 
                variant="flushed" 
                placeholder="Sort By" 
                w="150px" 
                fontSize="sm"
                borderColor={deepBlack}
              >
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="new">Newest Arrivals</option>
              </Select>
            </HStack>
          </HStack>

          <Divider mb={10} borderColor="gray.300" />

          {/* Product Grid */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Products;