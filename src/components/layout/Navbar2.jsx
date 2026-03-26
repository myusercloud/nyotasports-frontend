// src/components/layout/Navbar.jsx
import { Flex, Box, Text, HStack, IconButton, useDisclosure, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom"; // Add this import

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const beigeWhite = "#FAF9F6";
  const deepBlack = "#1A1A1A";

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" }, // <- links to your Products page
    { name: "Categories", path: "/categories" }, // you can create this later
    { name: "Cart", path: "/cart" } // placeholder, create Cart page later
  ];

  return (
    <Box position="sticky" top={0} zIndex={10} w="full">
      <Flex 
        bg={deepBlack} 
        color={beigeWhite} 
        p={4} 
        px={{ base: 4, md: 10 }}
        align="center" 
        justify="space-between"
        borderBottom="1px solid"
        borderColor="gray.800"
      >
        {/* Brand */}
        <Text fontSize="2xl" fontWeight="900" letterSpacing="tighter" textTransform="uppercase">
          Nyota <Box as="span" fontWeight="400" letterSpacing="widest" color="gray.400">Sports</Box>
        </Text>

        {/* Desktop Links */}
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link key={link.name} to={link.path}>
              <Text 
                cursor="pointer" 
                fontSize="sm" 
                fontWeight="bold" 
                textTransform="uppercase"
                _hover={{ color: "gray.400" }}
              >
                {link.name}
              </Text>
            </Link>
          ))}
        </HStack>

        {/* Mobile Menu Toggle */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          color={beigeWhite}
          aria-label="Toggle Navigation"
          _hover={{ bg: "gray.800" }}
        />
      </Flex>

      {/* Mobile Dropdown */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }} bg={deepBlack} color={beigeWhite} px={4}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <Link key={link.name} to={link.path}>
                <Text py={2} fontWeight="bold" borderBottom="1px solid" borderColor="gray.800">
                  {link.name}
                </Text>
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;