import { Flex, Box, Text, HStack, IconButton, useDisclosure, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"; // You'll need @chakra-ui/icons installed

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const beigeWhite = "#FAF9F6";
  const deepBlack = "#1A1A1A";

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
        <Text fontSize="xl" fontWeight="900" letterSpacing="tighter" textTransform="uppercase">
          Nyota <Box as="span" color="orange.400">Sports</Box>
        </Text>

        {/* Desktop Links */}
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {["Home", "Shop", "Categories", "Cart"].map((link) => (
            <Text 
              key={link} 
              cursor="pointer" 
              fontSize="sm" 
              fontWeight="bold" 
              textTransform="uppercase"
              _hover={{ color: "gray.400" }}
            >
              {link}
            </Text>
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
            {["Home", "Shop", "Categories", "Cart"].map((link) => (
              <Text key={link} py={2} fontWeight="bold" borderBottom="1px solid" borderColor="gray.800">
                {link}
              </Text>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;