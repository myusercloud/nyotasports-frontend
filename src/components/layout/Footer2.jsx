// src/components/layout/Footer.jsx
import {
  Box,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Flex,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const quickLinks = ["Shipping Policy", "Size Guide", "Returns", "Contact Us", "About Us"];
const shopLinks  = ["New Arrivals", "Best Sellers", "Footwear", "Apparel", "Equipment"];

// Simple SVG social icons
const SocialIcon = ({ label, path }) => (
  <Box
    as="a"
    href="#"
    aria-label={label}
    w="36px"
    h="36px"
    borderRadius="sm"
    border="1px solid"
    borderColor="whiteAlpha.150"
    display="flex"
    alignItems="center"
    justifyContent="center"
    color="whiteAlpha.400"
    transition="all 0.2s"
    _hover={{ borderColor: "#C8A86B", color: "#C8A86B", transform: "translateY(-2px)" }}
    cursor="pointer"
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d={path} />
    </svg>
  </Box>
);

const socials = [
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Twitter / X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

function Footer() {
  const ink    = "#0D0D0D";
  const cream  = "#F5F0E8";
  const sand   = "#E8E0D0";
  const accent = "#C8A86B";

  return (
    <Box
      bg={ink}
      color={cream}
      fontFamily="'Georgia', serif"
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
    >
      {/* ── Main footer body ──────────────────────── */}
      <Box px={{ base: 5, md: 10, lg: 16 }} pt={16} pb={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 10, md: 8 }}>

          {/* Brand column */}
          <VStack align="flex-start" spacing={4} gridColumn={{ lg: "span 1" }}>
            <Box w="32px" h="3px" bg={accent} />
            <Flex align="baseline" gap={1}>
              <Text fontSize="xl" fontWeight="900" letterSpacing="-1px" textTransform="uppercase" color={cream}>
                Nyota
              </Text>
              <Text fontSize="xl" fontWeight="400" letterSpacing="widest" color={accent} textTransform="uppercase">
                Sports
              </Text>
            </Flex>
            <Text color="whiteAlpha.400" fontSize="xs" lineHeight={1.9} fontFamily="'Arial', sans-serif" maxW="220px">
              The #1 destination for premium sports gear in the region. Quality, durability, and style in every stitch.
            </Text>
            <HStack spacing={2} pt={1}>
              {socials.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </HStack>
          </VStack>

          {/* Quick links */}
          <VStack align="flex-start" spacing={3}>
            <Text
              fontSize="9px"
              fontWeight="700"
              letterSpacing="widest"
              textTransform="uppercase"
              color={accent}
              fontFamily="'Arial', sans-serif"
              mb={1}
            >
              Support
            </Text>
            {quickLinks.map((item) => (
              <Text
                key={item}
                color="whiteAlpha.400"
                fontSize="xs"
                fontFamily="'Arial', sans-serif"
                cursor="pointer"
                letterSpacing="0.02em"
                transition="color 0.2s"
                _hover={{ color: cream }}
              >
                {item}
              </Text>
            ))}
          </VStack>

          {/* Shop links */}
          <VStack align="flex-start" spacing={3}>
            <Text
              fontSize="9px"
              fontWeight="700"
              letterSpacing="widest"
              textTransform="uppercase"
              color={accent}
              fontFamily="'Arial', sans-serif"
              mb={1}
            >
              Shop
            </Text>
            {shopLinks.map((item) => (
              <Text
                key={item}
                color="whiteAlpha.400"
                fontSize="xs"
                fontFamily="'Arial', sans-serif"
                cursor="pointer"
                letterSpacing="0.02em"
                transition="color 0.2s"
                _hover={{ color: cream }}
              >
                {item}
              </Text>
            ))}
          </VStack>

          {/* Newsletter */}
          <VStack align="flex-start" spacing={4}>
            <Text
              fontSize="9px"
              fontWeight="700"
              letterSpacing="widest"
              textTransform="uppercase"
              color={accent}
              fontFamily="'Arial', sans-serif"
              mb={1}
            >
              Newsletter
            </Text>
            <Text color={cream} fontSize="md" fontWeight="700" letterSpacing="-0.3px" lineHeight={1.2}>
              Get the latest drops & exclusive deals.
            </Text>
            <Text color="whiteAlpha.400" fontSize="xs" fontFamily="'Arial', sans-serif" lineHeight={1.8}>
              No spam, ever. Unsubscribe anytime.
            </Text>
            <Box w="full">
              <Flex gap={0} w="full">
                <Input
                  placeholder="your@email.com"
                  size="sm"
                  bg="whiteAlpha.50"
                  border="1px solid"
                  borderColor="whiteAlpha.150"
                  borderRight="none"
                  borderRadius="sm 0 0 sm"
                  color={cream}
                  fontSize="xs"
                  fontFamily="'Arial', sans-serif"
                  _placeholder={{ color: "whiteAlpha.300" }}
                  _focus={{ borderColor: accent, boxShadow: "none", bg: "whiteAlpha.100" }}
                />
                <Button
                  bg={accent}
                  color={ink}
                  size="sm"
                  borderRadius="0 sm sm 0"
                  fontWeight="800"
                  fontSize="10px"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  fontFamily="'Arial', sans-serif"
                  flexShrink={0}
                  px={4}
                  _hover={{ opacity: 0.85 }}
                >
                  Join
                </Button>
              </Flex>
            </Box>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* ── Bottom bar ───────────────────────────── */}
      <Box
        borderTop="1px solid"
        borderColor="whiteAlpha.80"
        px={{ base: 5, md: 10, lg: 16 }}
        py={5}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={3}
        >
          <Text fontSize="10px" color="whiteAlpha.300" fontFamily="'Arial', sans-serif" letterSpacing="wide">
            © {new Date().getFullYear()} Nyota Sports. All rights reserved.
          </Text>
          <HStack spacing={1} display={{ base: "none", md: "flex" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i, arr) => (
              <HStack key={item} spacing={1}>
                <Text
                  fontSize="10px"
                  color="whiteAlpha.300"
                  fontFamily="'Arial', sans-serif"
                  cursor="pointer"
                  letterSpacing="wide"
                  _hover={{ color: cream }}
                  transition="color 0.2s"
                >
                  {item}
                </Text>
                {i < arr.length - 1 && (
                  <Text fontSize="10px" color="whiteAlpha.150" mx={1}>·</Text>
                )}
              </HStack>
            ))}
          </HStack>
          <HStack spacing={1}>
            <Box w="5px" h="5px" borderRadius="full" bg={accent} />
            <Text fontSize="10px" color="whiteAlpha.300" fontFamily="'Arial', sans-serif" letterSpacing="wide">
              Designed for athletes, by athletes.
            </Text>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;