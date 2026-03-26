import { Box, Text, SimpleGrid, VStack, Heading, Divider, HStack } from "@chakra-ui/react";

function Footer() {
  const beigeWhite = "#FAF9F6";
  const deepBlack = "#1A1A1A";

  return (
    <Box bg={deepBlack} color={beigeWhite} pt={16} pb={8} px={{ base: 6, md: 20 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10}>
        {/* Brand Column */}
        <VStack align="flex-start">
          <Heading size="md" textTransform="uppercase" mb={2}>Nyota Sports</Heading>
          <Text color="gray.400" fontSize="sm">
            The #1 destination for premium sports gear in the region. 
            Quality, durability, and style in every stitch.
          </Text>
        </VStack>

        {/* Quick Links */}
        <VStack align="flex-start">
          <Text fontWeight="bold" mb={2}>Quick Links</Text>
          {["Shipping Policy", "Size Guide", "Returns", "Contact Us"].map((item) => (
            <Text key={item} color="gray.400" fontSize="sm" cursor="pointer" _hover={{ color: "white" }}>
              {item}
            </Text>
          ))}
        </VStack>

        {/* Newsletter/Social Placeholder */}
        <VStack align="flex-start">
          <Text fontWeight="bold" mb={2}>Connect With Us</Text>
          <HStack spacing={4}>
            {/* These would be icons in a real app */}
            <Box w="30px" h="30px" bg="gray.700" borderRadius="full" />
            <Box w="30px" h="30px" bg="gray.700" borderRadius="full" />
            <Box w="30px" h="30px" bg="gray.700" borderRadius="full" />
          </HStack>
          <Text color="gray.500" fontSize="xs" mt={4}>
            Subscribe to get the latest drops and sales.
          </Text>
        </VStack>
      </SimpleGrid>

      <Divider borderColor="gray.800" mb={8} />

      <Text textAlign="center" fontSize="xs" color="gray.500">
        © {new Date().getFullYear()} Nyota Sports. All rights reserved. 
        Designed for athletes, by athletes.
      </Text>
    </Box>
  );
}

export default Footer;