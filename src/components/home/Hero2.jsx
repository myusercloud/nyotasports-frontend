// src/components/home/Hero.jsx
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Container,
  Flex,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

function Hero() {
  const ink    = "#0D0D0D";
  const cream  = "#F5F0E8";
  const accent = "#C8A86B";

  const heroContent = {
    title: "Nyota Sports",
    subtitle: "Performance and style, perfected. Premium gear for athletes who refuse to compromise.",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
  };

  return (
    <Box
      as="section"
      w="full"
      h={{ base: "100svh", md: "92vh" }}
      position="relative"
      overflow="hidden"
      fontFamily="'Georgia', serif"
    >
      {/* Background image */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage={`url(${heroContent.imageUrl})`}
        backgroundSize="cover"
        backgroundPosition="center 30%"
        animation={`${fadeIn} 1.2s ease both`}
        transform="scale(1.03)"
        transition="transform 8s ease"
        _after={{
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.55) 55%, rgba(13,13,13,0.15) 100%)",
        }}
      />

      {/* Vertical side label */}
      <Box
        display={{ base: "none", lg: "flex" }}
        position="absolute"
        right={8}
        top="50%"
        transform="translateY(-50%) rotate(90deg)"
        zIndex={3}
        animation={`${fadeIn} 1s 0.8s ease both`}
        opacity={0}
      >
        <Text
          fontSize="9px"
          letterSpacing="widest"
          color="whiteAlpha.400"
          textTransform="uppercase"
          fontFamily="'Arial', sans-serif"
        >
          Premium Sports Equipment — Nairobi
        </Text>
      </Box>

      {/* Main content */}
      <Container
        maxW="container.xl"
        h="full"
        position="relative"
        zIndex={2}
        px={{ base: 6, md: 12 }}
      >
        <Flex h="full" align="center">
          <VStack align="flex-start" spacing={0} maxW={{ base: "100%", md: "640px" }}>
            {/* Gold bar */}
            <Box
              w="48px"
              h="3px"
              bg={accent}
              mb={6}
              animation={`${fadeUp} 0.6s 0.1s ease both`}
              opacity={0}
            />

            {/* Eyebrow */}
            <Text
              fontSize="10px"
              letterSpacing="widest"
              color="whiteAlpha.500"
              textTransform="uppercase"
              mb={4}
              fontFamily="'Arial', sans-serif"
              animation={`${fadeUp} 0.6s 0.2s ease both`}
              opacity={0}
            >
              New Collection — 2025
            </Text>

            {/* Main heading */}
            <Heading
              as="h1"
              fontSize={{ base: "5xl", sm: "6xl", md: "8xl" }}
              color={cream}
              fontWeight="900"
              lineHeight={0.9}
              letterSpacing="-3px"
              textTransform="uppercase"
              animation={`${fadeUp} 0.7s 0.3s ease both`}
              opacity={0}
            >
              Nyota
              <Box
                as="span"
                display="block"
                color={accent}
                fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
                letterSpacing="-2px"
              >
                Sports
              </Box>
            </Heading>

            {/* Subtitle */}
            <Text
              mt={6}
              fontSize={{ base: "sm", md: "md" }}
              color="whiteAlpha.600"
              maxW="420px"
              lineHeight={1.9}
              fontFamily="'Arial', sans-serif"
              animation={`${fadeUp} 0.7s 0.45s ease both`}
              opacity={0}
            >
              {heroContent.subtitle}
            </Text>

            {/* CTAs */}
            <HStack
              mt={10}
              spacing={4}
              animation={`${fadeUp} 0.7s 0.6s ease both`}
              opacity={0}
              wrap="wrap"
              gap={3}
            >
              <Button
                bg={accent}
                color={ink}
                size={{ base: "md", md: "lg" }}
                px={8}
                borderRadius="sm"
                fontWeight="800"
                fontSize="xs"
                letterSpacing="widest"
                textTransform="uppercase"
                fontFamily="'Arial', sans-serif"
                _hover={{ opacity: 0.85, transform: "translateY(-3px)", boxShadow: "0 12px 32px rgba(200,168,107,0.35)" }}
                transition="all 0.25s"
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                borderColor="whiteAlpha.300"
                color={cream}
                size={{ base: "md", md: "lg" }}
                px={8}
                borderRadius="sm"
                fontWeight="600"
                fontSize="xs"
                letterSpacing="widest"
                textTransform="uppercase"
                fontFamily="'Arial', sans-serif"
                _hover={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.500" }}
                transition="all 0.2s"
              >
                View Lookbook
              </Button>
            </HStack>

            {/* Stats row */}
            <HStack
              mt={12}
              spacing={8}
              animation={`${fadeUp} 0.7s 0.75s ease both`}
              opacity={0}
              wrap="wrap"
              gap={4}
            >
              {[["200+", "Products"], ["12", "Categories"], ["5★", "Rated"]].map(([val, label]) => (
                <Box key={label}>
                  <Text color={accent} fontWeight="900" fontSize="lg" letterSpacing="-0.5px" lineHeight={1}>
                    {val}
                  </Text>
                  <Text
                    color="whiteAlpha.400"
                    fontSize="9px"
                    letterSpacing="widest"
                    textTransform="uppercase"
                    fontFamily="'Arial', sans-serif"
                    mt={1}
                  >
                    {label}
                  </Text>
                </Box>
              ))}
            </HStack>
          </VStack>
        </Flex>
      </Container>

      {/* Bottom scroll hint */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        zIndex={3}
        animation={`${fadeIn} 1s 1.2s ease both`}
        opacity={0}
      >
        <VStack spacing={1}>
          <Text
            fontSize="9px"
            letterSpacing="widest"
            color="whiteAlpha.300"
            textTransform="uppercase"
            fontFamily="'Arial', sans-serif"
          >
            Scroll
          </Text>
          <Box
            w="1px"
            h="32px"
            bg="whiteAlpha.200"
            position="relative"
            overflow="hidden"
            _after={{
              content: '""',
              position: "absolute",
              top: "-100%",
              left: 0,
              w: "full",
              h: "full",
              bg: accent,
              animation: "scrollLine 1.8s ease infinite",
            }}
          />
        </VStack>
      </Box>

      <style>{`
        @keyframes scrollLine {
          0%   { top: -100%; }
          100% { top: 100%; }
        }
      `}</style>
    </Box>
  );
}

export default Hero;