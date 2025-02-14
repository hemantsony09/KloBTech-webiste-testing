import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./Navigation";
// import Hero from "./Hero";
// import Circle from "./Circle";
// import CircleMotion from "./CircleMotion";
// import RevolvingCircle from "./RevolvingCircle";
// import MainCircle from "./Orbit";
// import Information from "./Information";
// import Services from "./Services";
// import ServicesTest from "./ServicesTest";
// import BlurBox from "./BlurBox";
// import CursorFollower from "./CursorFollower";
// import Testimonials from "./Testimonials";
// import AnimatedNavbar from "./AnimatedNavbar";
import Emp from "./Emp";
import Home from "./pages/Home";
import Mad from "./pages/services/mobileDevelopment/MobileAndroidDevelopment.jsx";
import Fsd from "./pages/services/webDevelopment/FullStackDevelopment.jsx";
import Btbs from "./pages/services/Btb/Btbs.jsx";
import Rs from "./pages/services/Recruitment/Rs.jsx";
import React from "./pages/services/mobileDevelopment/React.jsx";
import Flutter from "./pages/services/mobileDevelopment/Flutter.jsx";
import Native from "./pages/services/mobileDevelopment/Native.jsx";
import Ios from "./pages/services/mobileDevelopment/Ios.jsx";
import FAQPage from "./pages/FAQ/Faq.jsx";
// import ScrollToTop from "./Components/ScrollToTop";
import Reactjs from "./pages/services/webDevelopment/React.jsx";
import Python from "./pages/services/webDevelopment/Python.jsx";
import Angular from "./pages/services/webDevelopment/Angular.jsx";
import Node from "./pages/services/webDevelopment/Node.jsx";
import Php from "./pages/services/webDevelopment/Php.jsx";
import Aiml from "./pages/services/webDevelopment/Aiml.jsx";
import Cms from "./pages/services/CMS/CMS.jsx";
import Shopify from "./pages/services/CMS/Shopify.jsx";
import Wordpress from "./pages/services/CMS/Wordpress.jsx";
import Ecommerce from "./pages/services/ecommerce/Ecommerce.jsx";
import Education from "./pages/services/education/Education.jsx";
import Digitalmarketing from "./pages/services/digitalMarketing/Digitalmarketing.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Tac from "./tac";
import Career from "./Career/Career";
import AboutUs from "./pages/about/AboutUs.jsx";
import Hiring from "./Hiring/Hiring";

function App() {
  return (
    <>
      <Router>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/tac" element={<Tac />} />
          <Route path="/career" element={<Career />} />

          <Route path="/emp" element={<Emp />} />
          <Route path="/mobile-development" element={<Mad />} />
          <Route path="/mobile-development/react" element={<React />} />
          <Route path="/mobile-development/flutter" element={<Flutter />} />
          <Route path="/mobile-development/android" element={<Native />} />
          <Route path="/mobile-development/ios" element={<Ios />} />

          <Route path="/fullStackDevelopment" element={<Fsd />} />
          <Route path="/fullStackDevelopment/react" element={<Reactjs />} />
          <Route path="/fullStackDevelopment/node" element={<Node />} />
          <Route path="/fullStackDevelopment/aiml" element={<Aiml />} />
          <Route path="/fullStackDevelopment/python" element={<Python />} />
          <Route path="/fullStackDevelopment/angular" element={<Angular />} />
          <Route path="/fullStackDevelopment/php" element={<Php />} />

          <Route path="/cms" element={<Cms />} />
          <Route path="/cms/shopify" element={<Shopify />} />
          <Route path="/cms/wordpress" element={<Wordpress />} />

          <Route path="/btbs" element={<Btbs />} />
          <Route path="/recruitment" element={<Rs />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/education" element={<Education />} />
          <Route path="/digitalmarketing" element={<Digitalmarketing />} />

          <Route path="/hiring" element={<Hiring />} />
        </Routes>
      </Router>
    </>
  );
}
// function App() {
//   return (
//     <Router>
//       <Layout />
//       <Routes>
//         <Route path="/emp" element={<Emp />} />
//         {/* Add other routes if needed */}
//       </Routes>
//     </Router>
//   );
// }

export default App;
