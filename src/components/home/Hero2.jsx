import { Box, Heading, Text, Button, VStack, Container } from "@chakra-ui/react";

function Hero() {
  // Theme Colors
  const beigeWhite = "#FAF9F6"; // A clean, modern beige
  const deepBlack = "#1A1A1A"; 

  // Placeholder logic
  const heroContent = {
    title: "Nyota Sports",
    subtitle: "Experience the fusion of performance and style. Find the best deals everyday on premium sports gear.",
    // Using a high-quality Unsplash image for the Hero
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
  };

  return (
    <Box 
      as="section"
      w="full"
      h="70vh"
      position="relative"
      backgroundImage={`url(${heroContent.imageUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
    >
      {/* Dark Overlay for Text Contrast */}
      <Box 
        position="absolute" 
        top={0} 
        left={0} 
        w="full" 
        h="full" 
        bg="blackAlpha.700" 
        zIndex={1}
      />

      <Container maxW="container.lg" position="relative" zIndex={2}>
        <VStack 
          spacing={6} 
          align="flex-start" 
          textAlign="left"
          p={8}
          borderLeft="4px solid"
          borderColor={beigeWhite}
        >
          <Heading 
            as="h1" 
            size="3xl" 
            color={beigeWhite} 
            textTransform="uppercase"
            letterSpacing="tighter"
          >
            {heroContent.title}
          </Heading>
          
          <Text 
            fontSize="xl" 
            color="gray.300" 
            maxW="600px"
          >
            {heroContent.subtitle}
          </Text>

          <Button 
            bg={beigeWhite} 
            color={deepBlack} 
            size="lg" 
            px={10}
            _hover={{ bg: "gray.200", transform: "translateY(-2px)" }}
            transition="all 0.2s"
          >
            Shop Now
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default Hero;