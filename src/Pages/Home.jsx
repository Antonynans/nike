import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
import About_us from "../Components/About_us";
import Offer from "../Components/Offer";
import Testimonials from "../Components/Testimonials";
import Contact_us from "../Components/Contact_us";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About_us />
      <Offer />
      <Testimonials />
      <Contact_us />
      <Footer />
    </>
  );
}
