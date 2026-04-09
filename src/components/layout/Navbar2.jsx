// src/components/layout/Navbar2.jsx
import {
  Flex,
  Box,
  Text,
  HStack,
  VStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { keyframes } from "@emotion/react"; // ✅ use emotion for animations

// ── Animation ─────────────────────────────
const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ── Default links ─────────────────────────
const DEFAULT_LINKS = [
  { name: "Home",       path: "/" },
  { name: "Shop",       path: "/products" },
  { name: "Categories", path: "/categories" },
  { name: "Cart",       path: "/cart" },
];

const Navbar2 = ({ links = DEFAULT_LINKS }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const location = useLocation();

  const ink    = "#0D0D0D";
  const cream  = "#F5F0E8";
  const accent = "#C8A86B";

  const isActive = (path) => location.pathname === path;

  return (
    <Box position="sticky" top={0} zIndex={200} w="full" fontFamily="'Georgia', serif">
      {/* ── Main bar ───────────────────────────── */}
      <Flex
        bg={ink}
        color={cream}
        px={{ base: 5, md: 10, lg: 16 }}
        h="64px"
        align="center"
        justify="space-between"
        borderBottom="1px solid"
        borderColor="whiteAlpha.100"
      >
        {/* Brand */}
        <Link to="/" onClick={onClose}>
          <Flex align="baseline" gap={1} _hover={{ opacity: 0.85 }} transition="opacity 0.2s">
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="900"
              letterSpacing="-1px"
              textTransform="uppercase"
              color={cream}
              lineHeight={1}
            >
              Nyota
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="400"
              letterSpacing="widest"
              color={accent}
              textTransform="uppercase"
              lineHeight={1}
            >
              Sports
            </Text>
          </Flex>
        </Link>

        {/* Desktop links */}
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link key={link.name} to={link.path}>
              <Box position="relative" pb={0.5}>
                <Text
                  fontSize="10px"
                  fontWeight="700"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  fontFamily="'Arial', sans-serif"
                  color={isActive(link.path) ? cream : "whiteAlpha.500"}
                  transition="color 0.2s"
                  _hover={{ color: cream }}
                >
                  {link.name}
                </Text>
                <Box
                  position="absolute"
                  bottom="-2px"
                  left={0}
                  w={isActive(link.path) ? "100%" : "0%"}
                  h="2px"
                  bg={accent}
                  transition="width 0.25s ease"
                />
              </Box>
            </Link>
          ))}
        </HStack>

        {/* Right side: mobile toggle */}
        <HStack spacing={3}>
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            color={cream}
            aria-label="Toggle Navigation"
            borderRadius="sm"
            _hover={{ bg: "whiteAlpha.100" }}
            size="sm"
          />
        </HStack>
      </Flex>

      {/* ── Mobile drawer ─────────────────────────── */}
      {isOpen && (
        <Box
          display={{ md: "none" }}
          bg={ink}
          borderBottom="1px solid"
          borderColor="whiteAlpha.100"
          animation={`${slideDown} 0.25s ease both`}
        >
          <VStack align="stretch" spacing={0} px={5} pb={4}>
            {links.map((link) => (
              <Link key={link.name} to={link.path} onClick={onClose}>
                <Flex
                  py={4}
                  align="center"
                  justify="space-between"
                  borderBottom="1px solid"
                  borderColor="whiteAlpha.50"
                  _last={{ borderBottom: "none" }}
                >
                  <Text
                    fontSize="xs"
                    fontWeight="700"
                    letterSpacing="widest"
                    textTransform="uppercase"
                    fontFamily="'Arial', sans-serif"
                    color={isActive(link.path) ? cream : "whiteAlpha.500"}
                  >
                    {link.name}
                  </Text>
                  <Text color={accent} fontSize="sm">→</Text>
                </Flex>
              </Link>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar2;