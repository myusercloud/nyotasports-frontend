import { Box } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar2";
import Footer from "../components/layout/Footer2";
import Hero from "../components/home/Hero2";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";

function Home() {
  // Global Theme Colors for consistency
  const beigeWhite = "#FAF9F6";

  return (
    <Box bg={beigeWhite} minH="100vh">
      {/* Navigation - Sticky at the top */}
      <Navbar />

      <Box as="main">
        {/* Impactful Entry */}
        <Hero />

        {/* Navigation by Intent */}
        <Categories />

        {/* Curated Selection */}
        <FeaturedProducts />
      </Box>

      {/* Deep Black finish at the bottom */}
      <Footer />
    </Box>
  );
}

export default Home;