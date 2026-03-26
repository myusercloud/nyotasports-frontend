import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Hero from "../components/home/hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default Home;