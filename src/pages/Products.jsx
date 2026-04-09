// src/pages/Products.jsx
import { useState, useMemo } from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Container,
  HStack,
  Flex,
  Button,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import ProductCard from "../components/product/ProductCard";
import ProductModal from "../components/product/ProductModal";
import Navbar from "../components/layout/Navbar2";
import Footer from "../components/layout/Footer2";

// ─── Data ────────────────────────────────────────────────────────────────────
const ALL_PRODUCTS = [
  { id: 1,  name: "Premier League Ball",   price: 4500,  category: "Football",  image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=500&auto=format&fit=crop" },
  { id: 2,  name: "Elite Basketball",      price: 3800,  category: "Basketball",image: "https://images.unsplash.com/photo-1546519156-d8121288c54e?q=80&w=500&auto=format&fit=crop" },
  { id: 3,  name: "Pro Graphite Racket",   price: 12500, category: "Tennis",    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?q=80&w=500&auto=format&fit=crop" },
  { id: 4,  name: "CloudRun Sneakers",     price: 9500,  category: "Footwear",  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop" },
  { id: 5,  name: "Compression Jersey",    price: 3200,  category: "Apparel",   image: "https://images.unsplash.com/photo-1580087444152-c2b6239df5b0?q=80&w=500&auto=format&fit=crop" },
  { id: 6,  name: "Stealth Goalie Gloves", price: 2800,  category: "Football",  image: "https://images.unsplash.com/photo-1583522676223-1a067035f212?q=80&w=500&auto=format&fit=crop" },
  { id: 7,  name: "Carbon Fiber Helmet",   price: 15000, category: "Safety",    image: "https://images.unsplash.com/photo-1558444053-ff44c0239191?q=80&w=500&auto=format&fit=crop" },
  { id: 8,  name: "Yoga Master Mat",       price: 2200,  category: "Fitness",   image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=500&auto=format&fit=crop" },
  { id: 9,  name: "Adjustable Dumbbell",   price: 7500,  category: "Fitness",   image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?q=80&w=500&auto=format&fit=crop" },
  { id: 10, name: "Speed Skipping Rope",   price: 1200,  category: "Fitness",   image: "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=500&auto=format&fit=crop" },
  { id: 11, name: "Stadium Scarf",         price: 1800,  category: "Apparel",   image: "https://images.unsplash.com/photo-1520367288098-2794e89920b3?q=80&w=500&auto=format&fit=crop" },
  { id: 12, name: "Waterproof Duffel",     price: 5400,  category: "Bags",      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500&auto=format&fit=crop" },
  { id: 13, name: "Performance Socks",     price: 950,   category: "Apparel",   image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=500&auto=format&fit=crop" },
  { id: 14, name: "Hydration Bottle",      price: 1500,  category: "Fitness",   image: "https://images.unsplash.com/photo-1602143303410-fd3d39e36500?q=80&w=500&auto=format&fit=crop" },
  { id: 15, name: "Boxing Wraps",          price: 1100,  category: "Boxing",    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=500&auto=format&fit=crop" },
  { id: 16, name: "Terrain Hiking Boots",  price: 13500, category: "Footwear",  image: "https://images.unsplash.com/photo-1520639889456-47abab4d2b9b?q=80&w=500&auto=format&fit=crop" },
  { id: 17, name: "Cycling Shorts",        price: 3900,  category: "Apparel",   image: "https://images.unsplash.com/photo-1517707711963-adf9078bdf71?q=80&w=500&auto=format&fit=crop" },
  { id: 18, name: "Swim Goggles Pro",      price: 2100,  category: "Swimming",  image: "https://images.unsplash.com/photo-1551698618-1fed5d978044?q=80&w=500&auto=format&fit=crop" },
  { id: 19, name: "Resistance Band Set",   price: 2800,  category: "Fitness",   image: "https://images.unsplash.com/photo-1598289431512-b97b0917a63e?q=80&w=500&auto=format&fit=crop" },
  { id: 20, name: "Reflective Run Vest",   price: 3400,  category: "Apparel",   image: "https://images.unsplash.com/photo-1518611012118-296062030659?q=80&w=500&auto=format&fit=crop" },
];

const CATEGORIES = ["All", ...Array.from(new Set(ALL_PRODUCTS.map((p) => p.category))).sort()];
const SORT_OPTIONS = [
  { label: "Featured",        value: "featured" },
  { label: "Price: Low → High", value: "low" },
  { label: "Price: High → Low", value: "high" },
];

// ─── Keyframes ────────────────────────────────────────────────────────────────
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Page ─────────────────────────────────────────────────────────────────────
const Products = () => {
  const cream  = "#F5F0E8";
  const ink    = "#0D0D0D";
  const sand   = "#E8E0D0";
  const accent = "#C8A86B"; // warm gold

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const filtered = useMemo(() => {
    let list = activeCategory === "All"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === activeCategory);

    if (sortBy === "low")  list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCategory, sortBy]);

  return (
    <Box bg={cream} minH="100vh" fontFamily="'Georgia', serif">
      <Navbar />

      {/* ── Hero Banner ────────────────────────────────────────────── */}
      <Box
        position="relative"
        bg={ink}
        overflow="hidden"
        px={{ base: 6, md: 16 }}
        pt={{ base: 16, md: 20 }}
        pb={{ base: 12, md: 16 }}
      >
        {/* Background decorative number */}
        <Text
          position="absolute"
          right={{ base: "-10px", md: "40px" }}
          top="50%"
          transform="translateY(-50%)"
          fontSize={{ base: "180px", md: "280px" }}
          fontWeight="900"
          color="whiteAlpha.50"
          lineHeight={1}
          userSelect="none"
          letterSpacing="-8px"
          fontFamily="'Georgia', serif"
        >
          20
        </Text>

        {/* Accent line */}
        <Box w="48px" h="3px" bg={accent} mb={5} />

        <Heading
          fontSize={{ base: "3xl", sm: "5xl", md: "7xl" }}
          color="white"
          fontWeight="900"
          lineHeight={0.95}
          letterSpacing="-2px"
          textTransform="uppercase"
          maxW="600px"
          animation={`${fadeUp} 0.7s ease both`}
        >
          Elite
          <Box as="span" color={accent}> Gear</Box>
          <br />
          Collection
        </Heading>

        <Text
          mt={5}
          color="whiteAlpha.600"
          fontSize={{ base: "sm", md: "md" }}
          maxW="380px"
          lineHeight={1.8}
          letterSpacing="0.02em"
          animation={`${fadeUp} 0.7s 0.15s ease both`}
        >
          Curated performance equipment for athletes who refuse to compromise.
        </Text>

        {/* Stats row */}
        <HStack
          mt={10}
          spacing={10}
          animation={`${fadeUp} 0.7s 0.25s ease both`}
          wrap="wrap"
          gap={4}
        >
          {[["20+", "Products"], ["12", "Categories"], ["KES 950", "From"]].map(([val, label]) => (
            <Box key={label}>
              <Text color={accent} fontWeight="900" fontSize="xl" letterSpacing="-0.5px">{val}</Text>
              <Text color="whiteAlpha.500" fontSize="xs" letterSpacing="wider" textTransform="uppercase">{label}</Text>
            </Box>
          ))}
        </HStack>
      </Box>

      {/* ── Sticky Filter Bar ──────────────────────────────────────── */}
      <Box
        position="sticky"
        top={0}
        zIndex={100}
        bg={cream}
        borderBottom="1px solid"
        borderColor={sand}
        backdropFilter="blur(12px)"
        px={{ base: 4, md: 10 }}
        py={4}
      >
        <Flex
          justify="space-between"
          align="center"
          wrap="wrap"
          gap={3}
          maxW="container.xl"
          mx="auto"
        >
          {/* Category pills */}
          <Flex wrap="wrap" gap={2}>
            {CATEGORIES.map((cat) => {
              const active = cat === activeCategory;
              return (
                <Button
                  key={cat}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                  bg={active ? ink : "transparent"}
                  color={active ? "white" : "gray.600"}
                  border="1px solid"
                  borderColor={active ? ink : "gray.300"}
                  borderRadius="full"
                  fontWeight={active ? "700" : "500"}
                  fontSize="xs"
                  letterSpacing="0.04em"
                  px={4}
                  _hover={{ bg: active ? ink : sand, borderColor: ink }}
                  transition="all 0.18s"
                >
                  {cat}
                </Button>
              );
            })}
          </Flex>

          {/* Sort + count */}
          <HStack spacing={4}>
            <Text fontSize="xs" color="gray.400" letterSpacing="wider" display={{ base: "none", sm: "block" }}>
              {filtered.length} ITEMS
            </Text>
            <Flex gap={1}>
              {SORT_OPTIONS.map((opt) => (
                <Button
                  key={opt.value}
                  size="xs"
                  onClick={() => setSortBy(opt.value)}
                  variant="ghost"
                  color={sortBy === opt.value ? ink : "gray.400"}
                  fontWeight={sortBy === opt.value ? "700" : "400"}
                  fontSize="xs"
                  borderBottom={sortBy === opt.value ? `2px solid ${accent}` : "2px solid transparent"}
                  borderRadius={0}
                  px={2}
                  _hover={{ color: ink }}
                >
                  {opt.label}
                </Button>
              ))}
            </Flex>
          </HStack>
        </Flex>
      </Box>

      {/* ── Product Grid ───────────────────────────────────────────── */}
      <Box py={{ base: 10, md: 16 }} px={{ base: 4, md: 10 }}>
        <Box maxW="container.xl" mx="auto">

          {/* Section label */}
          <Flex align="center" gap={4} mb={8}>
            <Divider borderColor={sand} />
            <Text
              fontSize="xs"
              letterSpacing="widest"
              color="gray.400"
              textTransform="uppercase"
              whiteSpace="nowrap"
              fontFamily="'Arial', sans-serif"
            >
              {activeCategory === "All" ? "All Products" : activeCategory}
            </Text>
            <Divider borderColor={sand} />
          </Flex>

          {filtered.length === 0 ? (
            <VStack py={20} spacing={3}>
              <Text fontSize="4xl">🏃</Text>
              <Text color="gray.400" fontSize="sm" letterSpacing="wide">No products in this category yet.</Text>
            </VStack>
          ) : (
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
              spacing={{ base: 5, md: 7 }}
            >
              {filtered.map((product, i) => (
                <Box
                  key={product.id}
                  onClick={() => handleCardClick(product)}
                  cursor="pointer"
                  role="button"
                  aria-label={`View details for ${product.name}`}
                  animation={`${fadeUp} 0.5s ${(i % 8) * 0.05}s ease both`}
                  transition="transform 0.25s ease, box-shadow 0.25s ease"
                  _hover={{
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                  }}
                  borderRadius="xl"
                  overflow="hidden"
                  bg="white"
                  /* Highlight new arrivals (last 4) */
                  outline={product.id > 16 ? `2px solid ${accent}` : "none"}
                  outlineOffset="0px"
                >
                  {/* New badge */}
                  {product.id > 16 && (
                    <Badge
                      position="absolute"
                      top={3}
                      left={3}
                      zIndex={2}
                      bg={accent}
                      color={ink}
                      fontSize="9px"
                      fontWeight="800"
                      letterSpacing="wider"
                      px={2}
                      py={0.5}
                      borderRadius="sm"
                      textTransform="uppercase"
                      pointerEvents="none"
                    >
                      New
                    </Badge>
                  )}
                  <Box position="relative">
                    <ProductCard product={product} />
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          )}
        </Box>
      </Box>

      {/* ── Bottom CTA Strip ───────────────────────────────────────── */}
      <Box bg={ink} py={14} px={{ base: 6, md: 16 }} mt={4}>
        <Flex
          maxW="container.xl"
          mx="auto"
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={6}
        >
          <Box>
            <Box w="32px" h="2px" bg={accent} mb={3} />
            <Heading color="white" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="900" textTransform="uppercase" letterSpacing="-0.5px">
              Need Help Choosing?
            </Heading>
            <Text color="whiteAlpha.500" fontSize="sm" mt={2}>
              Our experts are ready to guide your purchase.
            </Text>
          </Box>
          <HStack spacing={4} flexShrink={0}>
            <Button
              bg={accent}
              color={ink}
              fontWeight="800"
              letterSpacing="wide"
              textTransform="uppercase"
              fontSize="sm"
              px={7}
              borderRadius="full"
              _hover={{ opacity: 0.85, transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              Contact Us
            </Button>
            <Button
              variant="outline"
              borderColor="whiteAlpha.300"
              color="white"
              fontWeight="600"
              fontSize="sm"
              px={7}
              borderRadius="full"
              _hover={{ bg: "whiteAlpha.100" }}
            >
              View Deals
            </Button>
          </HStack>
        </Flex>
      </Box>

      <Footer />

      {/* Modal */}
      <ProductModal product={selectedProduct} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Products;