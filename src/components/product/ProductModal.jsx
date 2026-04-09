// src/components/product/ProductModal.jsx
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Image,
  Text,
  Heading,
  Button,
  HStack,
  VStack,
  Badge,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState } from "react";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const ProductModal = ({ product, isOpen, onClose }) => {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const ink    = "#0D0D0D";
  const cream  = "#F5F0E8";
  const sand   = "#E8E0D0";
  const accent = "#C8A86B";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "full", md: "5xl" }}
      isCentered
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(8px)" />
      <ModalContent
        bg={cream}
        borderRadius={{ base: "2xl 2xl 0 0", md: "2xl" }}
        overflow="hidden"
        mx={{ base: 0, md: 4 }}
        mb={{ base: 0, md: "auto" }}
        mt={{ base: "auto", md: "auto" }}
        boxShadow="0 40px 100px rgba(0,0,0,0.4)"
        maxH={{ base: "92vh", md: "88vh" }}
        fontFamily="'Georgia', serif"
      >
        {/* Close button */}
        <ModalCloseButton
          zIndex={10}
          top={4}
          right={4}
          bg={ink}
          color="white"
          borderRadius="full"
          boxSize={8}
          fontSize="xs"
          _hover={{ bg: accent, color: ink }}
          transition="all 0.2s"
        />

        <ModalBody p={0} overflowY="auto">
          <Flex
            direction={{ base: "column", md: "row" }}
            minH={{ base: "auto", md: "500px" }}
          >
            {/* ── Left: Image Panel ─────────────────────────── */}
            <Box
              w={{ base: "100%", md: "52%" }}
              h={{ base: "260px", sm: "320px", md: "auto" }}
              minH={{ md: "500px" }}
              overflow="hidden"
              flexShrink={0}
              position="relative"
              bg={ink}
            >
              <Image
                src={product.image}
                alt={product.name}
                w="100%"
                h="100%"
                objectFit="cover"
                opacity={0.92}
                transition="transform 0.6s ease, opacity 0.3s"
                _hover={{ transform: "scale(1.05)", opacity: 1 }}
              />

              {/* Dark gradient overlay at bottom of image */}
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                h={{ base: "80px", md: "120px" }}
                bgGradient="linear(to-t, blackAlpha.700, transparent)"
              />

              {/* Category tag on image */}
              {product.category && (
                <Box
                  position="absolute"
                  bottom={4}
                  left={4}
                >
                  <Text
                    fontSize="10px"
                    fontWeight="700"
                    color="whiteAlpha.700"
                    letterSpacing="widest"
                    textTransform="uppercase"
                    fontFamily="'Arial', sans-serif"
                  >
                    {product.category}
                  </Text>
                </Box>
              )}

              {/* Gradient fade for mobile transition */}
              <Box
                display={{ base: "block", md: "none" }}
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                h="40px"
                bgGradient={`linear(to-t, ${cream}, transparent)`}
              />
            </Box>

            {/* ── Right: Details Panel ──────────────────────── */}
            <VStack
              align="flex-start"
              spacing={{ base: 4, md: 5 }}
              p={{ base: 6, sm: 7, md: 10 }}
              flex={1}
              justify="center"
              animation={`${fadeUp} 0.5s ease both`}
            >
              {/* Gold accent line */}
              <Box w="36px" h="3px" bg={accent} />

              {/* Stock badge */}
              <Badge
                bg={ink}
                color="white"
                fontSize="9px"
                px={3}
                py={1}
                borderRadius="sm"
                letterSpacing="widest"
                textTransform="uppercase"
                fontFamily="'Arial', sans-serif"
              >
                In Stock
              </Badge>

              {/* Name */}
              <Heading
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                fontWeight="900"
                color={ink}
                lineHeight={0.95}
                textTransform="uppercase"
                letterSpacing="-1px"
              >
                {product.name}
              </Heading>

              {/* Price */}
              <HStack spacing={3} align="baseline">
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="900"
                  color={ink}
                  letterSpacing="-0.5px"
                >
                  KES {product.price.toLocaleString()}
                </Text>
                <Text fontSize="xs" color="gray.400" fontFamily="'Arial', sans-serif">
                  incl. VAT
                </Text>
              </HStack>

              {/* Description */}
              <Text
                color="gray.500"
                fontSize={{ base: "xs", md: "sm" }}
                lineHeight={1.9}
                fontFamily="'Arial', sans-serif"
                borderLeft={`3px solid ${sand}`}
                pl={3}
              >
                Premium sports gear engineered for peak performance.
                Designed for athletes who demand the best from their
                equipment every single session.
              </Text>

              {/* Divider */}
              <Box w="full" h="1px" bg={sand} />

              {/* Quantity row */}
              <Flex w="full" align="center" justify="space-between">
                <Text
                  fontWeight="700"
                  fontSize="xs"
                  color={ink}
                  textTransform="uppercase"
                  letterSpacing="widest"
                  fontFamily="'Arial', sans-serif"
                >
                  Quantity
                </Text>
                <NumberInput
                  min={1}
                  max={99}
                  value={qty}
                  onChange={(_, val) => setQty(val)}
                  size="sm"
                  w="110px"
                >
                  <NumberInputField
                    bg="white"
                    border="1px solid"
                    borderColor={sand}
                    borderRadius="md"
                    fontWeight="700"
                    color={ink}
                    fontFamily="'Arial', sans-serif"
                    _focus={{ borderColor: ink, boxShadow: "none" }}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper borderColor={sand} color={ink} />
                    <NumberDecrementStepper borderColor={sand} color={ink} />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>

              {/* CTAs */}
              <VStack spacing={3} w="full" pt={1}>
                <Button
                  w="full"
                  bg={accent}
                  color={ink}
                  size={{ base: "md", md: "lg" }}
                  borderRadius="sm"
                  fontWeight="800"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  fontSize="xs"
                  fontFamily="'Arial', sans-serif"
                  _hover={{ opacity: 0.88, transform: "translateY(-2px)", boxShadow: "lg" }}
                  transition="all 0.2s"
                >
                  Add to Cart
                </Button>
                <Button
                  w="full"
                  bg={ink}
                  color="white"
                  size={{ base: "md", md: "lg" }}
                  borderRadius="sm"
                  fontWeight="700"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  fontSize="xs"
                  fontFamily="'Arial', sans-serif"
                  _hover={{ bg: "#222", transform: "translateY(-2px)", boxShadow: "lg" }}
                  transition="all 0.2s"
                >
                  Buy Now
                </Button>
              </VStack>

              {/* Perks */}
              <Flex
                w="full"
                gap={4}
                wrap="wrap"
                pt={1}
                pb={{ base: 2, md: 0 }}
              >
                {["Free delivery over KES 5,000", "30-day returns", "Authentic gear"].map((perk) => (
                  <HStack key={perk} spacing={1.5}>
                    <Box w="4px" h="4px" borderRadius="full" bg={accent} flexShrink={0} />
                    <Text
                      fontSize="10px"
                      color="gray.400"
                      letterSpacing="wide"
                      fontFamily="'Arial', sans-serif"
                    >
                      {perk}
                    </Text>
                  </HStack>
                ))}
              </Flex>
            </VStack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;