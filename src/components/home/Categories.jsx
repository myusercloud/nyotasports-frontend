// src/components/home/Categories.jsx
import {
  Box,
  Text,
  Heading,
  Image,
  Center,
  SimpleGrid,
  VStack,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const categories = [
  { name: "Jerseys",  tag: "Apparel",  img: "https://images.unsplash.com/photo-1580087444152-c2b6239df5b0?q=80&w=500&auto=format&fit=crop" },
  { name: "Boots",    tag: "Footwear", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop" },
  { name: "Gloves",   tag: "Protect",  img: "https://images.unsplash.com/photo-1583522676223-1a067035f212?q=80&w=500&auto=format&fit=crop" },
  { name: "Trainers", tag: "Training", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop" },
];

function Categories() {
  const ink    = "#0D0D0D";
  const cream  = "#F5F0E8";
  const sand   = "#E8E0D0";
  const accent = "#C8A86B";

  return (
    <Box
      bg={cream}
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
            color="gray.400"
            textTransform="uppercase"
            fontFamily="'Arial', sans-serif"
          >
            Browse the Range
          </Text>
          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            color={ink}
            fontWeight="900"
            textTransform="uppercase"
            letterSpacing="-1.5px"
            lineHeight={0.95}
          >
            Shop by
            <Box as="span" color={accent}> Category</Box>
          </Heading>
        </VStack>

        {/* Decorative divider on desktop */}
        <Flex
          display={{ base: "none", md: "flex" }}
          align="center"
          gap={3}
          pb={1}
        >
          <Divider w="60px" borderColor={sand} />
          <Text
            fontSize="10px"
            letterSpacing="widest"
            color="gray.400"
            textTransform="uppercase"
            fontFamily="'Arial', sans-serif"
            whiteSpace="nowrap"
          >
            4 Categories
          </Text>
        </Flex>
      </Flex>

      {/* Category grid */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: 4, md: 5 }}
      >
        {categories.map((cat, i) => (
          <Box
            key={i}
            role="group"
            position="relative"
            h={{ base: "220px", sm: "260px", md: "360px" }}
            borderRadius="lg"
            overflow="hidden"
            cursor="pointer"
            animation={`${fadeUp} 0.55s ${i * 0.08}s ease both`}
            opacity={0}
            _hover={{ "& .cat-overlay": { opacity: 1 } }}
          >
            {/* Background image */}
            <Image
              src={cat.img}
              alt={cat.name}
              w="100%"
              h="100%"
              objectFit="cover"
              transition="transform 0.6s ease"
              _groupHover={{ transform: "scale(1.07)" }}
            />

            {/* Permanent dark gradient at bottom */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              h="60%"
              bgGradient="linear(to-t, blackAlpha.800, transparent)"
              zIndex={1}
            />

            {/* Hover overlay */}
            <Box
              className="cat-overlay"
              position="absolute"
              inset={0}
              bg={`${accent}22`}
              opacity={0}
              transition="opacity 0.3s ease"
              zIndex={2}
              borderBottom={`3px solid ${accent}`}
            />

            {/* Text content */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              p={{ base: 4, md: 5 }}
              zIndex={3}
            >
              <Text
                fontSize="9px"
                letterSpacing="widest"
                color={`${accent}`}
                textTransform="uppercase"
                fontFamily="'Arial', sans-serif"
                mb={1}
              >
                {cat.tag}
              </Text>
              <Text
                color={cream}
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="900"
                textTransform="uppercase"
                letterSpacing="-0.5px"
                lineHeight={1}
              >
                {cat.name}
              </Text>
              {/* Arrow on hover */}
              <Text
                fontSize="xs"
                color={accent}
                fontFamily="'Arial', sans-serif"
                mt={1.5}
                opacity={0}
                transform="translateX(-8px)"
                transition="all 0.25s ease"
                _groupHover={{ opacity: 1, transform: "translateX(0)" }}
                letterSpacing="wider"
              >
                Shop →
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Categories;