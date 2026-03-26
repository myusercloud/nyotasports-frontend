import { Box, Image, Text, Button, VStack, Badge } from "@chakra-ui/react";

function ProductCard({ product }) {
  const beigeWhite = "#FAF9F6";
  const deepBlack = "#1A1A1A";

  return (
    <Box 
      bg="white" 
      border="1px solid" 
      borderColor="gray.100"
      overflow="hidden" 
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
    >
      <Box position="relative">
        <Image 
          src={product.image} 
          alt={product.name} 
          w="100%" 
          h="250px" 
          objectFit="cover" 
        />
        <Badge 
          position="absolute" 
          top={2} 
          right={2} 
          bg={deepBlack} 
          color={beigeWhite} 
          px={3}
        >
          New
        </Badge>
      </Box>

      <VStack p={4} align="flex-start" spacing={1}>
        <Text fontWeight="bold" fontSize="lg" color={deepBlack} textTransform="uppercase">
          {product.name}
        </Text>
        <Text color="gray.500" fontWeight="600">
          KSH {product.price.toLocaleString()}
        </Text>
        <Button 
          w="full" 
          mt={3}
          bg={deepBlack} 
          color={beigeWhite} 
          borderRadius="none" // Sharp edges for a more professional sports look
          _hover={{ bg: "gray.700" }}
        >
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
}

export default ProductCard;