import { Box, Text, Heading, Image, Center, SimpleGrid, VStack } from "@chakra-ui/react";

const categories = [
  { name: "Jerseys", img: "https://images.unsplash.com/photo-1580087444152-c2b6239df5b0?q=80&w=500&auto=format&fit=crop" },
  { name: "Boots", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop" },
  { name: "Gloves", img: "https://images.unsplash.com/photo-1583522676223-1a067035f212?q=80&w=500&auto=format&fit=crop" },
  { name: "Trainers", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop" },
];

function Categories() {
  const beigeWhite = "#FAF9F6";
  const deepBlack = "#1A1A1A";

  return (
    <Box 
      p={{ base: 4, md: 10 }} // Less padding on mobile, more on desktop
      bg={beigeWhite}
    >
      <VStack align={{ base: "center", md: "flex-start" }} mb={8} spacing={1}>
        <Heading 
          fontSize={{ base: "2xl", md: "3xl" }} // Smaller text on mobile
          color={deepBlack} 
          textTransform="uppercase" 
          fontWeight="900"
          textAlign={{ base: "center", md: "left" }}
        >
          Shop by Category
        </Heading>
        <Box w="60px" h="4px" bg={deepBlack} />
      </VStack>

      <SimpleGrid 
        columns={{ base: 1, sm: 2, lg: 4 }} // 1 col on mobile, 2 on tablet, 4 on desktop
        spacing={{ base: 4, md: 6 }}
      >
        {categories.map((cat, i) => (
          <Box
            key={i}
            role="group"
            position="relative"
            h={{ base: "200px", md: "300px" }} // Shorter cards on mobile to prevent endless scrolling
            borderRadius="lg"
            overflow="hidden"
            cursor="pointer"
          >
            {/* Background Image */}
            <Image
              src={cat.img}
              alt={cat.name}
              w="100%"
              h="100%"
              objectFit="cover"
              transition="transform 0.5s ease"
              _groupHover={{ transform: "scale(1.1)" }}
            />

            {/* Dark Overlay */}
            <Box
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              bg="blackAlpha.600"
              transition="background 0.3s ease"
              _groupHover={{ bg: "blackAlpha.400" }}
            />

            {/* Text Overlay */}
            <Center
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              zIndex={2}
            >
              <Text
                color={beigeWhite}
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="800"
                textTransform="uppercase"
                letterSpacing="widest"
              >
                {cat.name}
              </Text>
            </Center>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Categories;