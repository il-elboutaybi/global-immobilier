import NavBar from "../../navigation/NavBar";
import HeroSection from "../../hero/HeroSection";
import Features from "../../features/Features";
import Cards from "../../cards/Cards";
import CallToAction from "../../call_to_action/CallToAction";
import Review from "../../review/Review";
import Footer from "../../footer/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
      <Cards />
      <CallToAction />
      <Review />
      <Footer />
    </>
  )
}

export default HomePage;
