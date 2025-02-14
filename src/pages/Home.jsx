import Hero from "../Components/Hero/Hero";
import Circle from "../Components/Orbit/Circle";
// import CircleMotion from "./CircleMotion";
// import RevolvingCircle from "./RevolvingCircle";
import MainCircle from "../Components/Orbit/Orbit";
import Information from "../Components/Common/Information";
import Services from "../Services";
import Testimonials from "../Components/Testimonials/Testimonials";
// import Navbar from "./StaffingSolutions";
import Faq from "./FAQ/Faq";
import Footer from "../Components/Footer/Footer";
import FAQPage from "./FAQ/Faq";
import BackToTopButton from "../Components/MotionEffects/BackToTopButton";
import { useMediaQuery } from "react-responsive";
import Navbar from "../Components/Navbar/Navbar";
import Logo from "../Components/Common/logo";
import Mobilefooter from "../Components/Footer/Mobilefooter";
import MobServices from "../Components/Mobile/MobServices";

function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {!isMobile && <Logo></Logo>}

      {!isMobile && (
        <Circle top={"15rem"} left={"-10rem"} color={"#333"} scale={1} />
      )}

      {!isMobile && (
        <Circle
          top={"30rem"}
          left={"3rem"}
          color={"var(--accent-color)"}
          scale={0.3}
        />
      )}

      {!isMobile && (
        <Circle top={"80rem"} left={"20rem"} color={"#333"} scale={1} />
      )}

      {isMobile && (
        <Circle top={"52rem"} left={"20rem"} color={"#333"} scale={0.6} />
      )}

      {/* <BlurBox></BlurBox> */}
      <Navbar></Navbar>
      {/* <Navvv></Navvv> */}
      {/* <Navigation /> */}
      <Hero />
      {isMobile && (
        <MainCircle
          mainRadius={160}
          childRadius1={20}
          childRadius2={40}
          distance1={240}
          distance2={205}
          speed1={9}
          speed2={10}
          top={"10rem"}
          left={"-15rem"}
          color1={"#333"}
          color2={"var(--accent-color)"}
        />
      )}
      {!isMobile && (
        <MainCircle
          mainRadius={500}
          childRadius1={20}
          childRadius2={80}
          distance1={650}
          distance2={550}
          speed1={9}
          speed2={10}
          top={"20rem"}
          left={"140rem"}
          color1={"#333"}
          color2={"var(--accent-color)"}
        />
      )}
      {/* <MainCircle
        mainRadius={500}
        childRadius1={20}
        childRadius2={80}
        distance1={650}
        distance2={550}
        speed1={9} // Speed of the first circle (faster)
        speed2={5} // Speed of the second circle (slower)
      /> */}
      <Information></Information>

      {!isMobile && <Services></Services>}
      {isMobile && <MobServices></MobServices>}

      {/* <AnimatedNavbar></AnimatedNavbar> */}
      {/* <Review></Review> */}
      {/* <ReviewCarousel></ReviewCarousel> */}
      { <Testimonials></Testimonials>}

      {/* <CardGrid></CardGrid> */}
      {/* <FAQPage></FAQPage> */}
      {!isMobile && <Footer></Footer>}
      <BackToTopButton></BackToTopButton>

      {isMobile && <Mobilefooter></Mobilefooter>}
      {/* <ServicesShowcase></ServicesShowcase> */}
    </>
  );
}

export default Home;
