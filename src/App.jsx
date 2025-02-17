import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Emp from "./Emp";
import Home from "./pages/Home";
import Mad from "./pages/services/mobileDevelopment/MobileAndroidDevelopment.jsx";
import WebDevelopment from "./pages/services/webDevelopment/WebDevelopment.jsx";
import Btbs from "./pages/services/Btb/Btbs.jsx";
import Rs from "./pages/services/Recruitment/Rs.jsx";
import React from "./pages/services/mobileDevelopment/React.jsx";
import Flutter from "./pages/services/mobileDevelopment/Flutter.jsx";
import Native from "./pages/services/mobileDevelopment/Native.jsx";
import Ios from "./pages/services/mobileDevelopment/Ios.jsx";
import FAQPage from "./pages/FAQ/Faq.jsx";
import ReactJS from "./pages/services/webDevelopment/React.jsx";
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
import Career from "./pages/Career.jsx";
import AboutUs from "./pages/about/AboutUs.jsx";
import Hiring from "./pages/HiringForm";
import HiringTable from "./pages/HiringTable";
import Admin from "./Admin/Admin.jsx";

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

          <Route
            path="/web-development"
            element={<WebDevelopment />}
          />
          <Route path="/web-development/react" element={<ReactJS />} />
          <Route path="/web-development/node" element={<Node />} />
          <Route path="/web-development/aiml" element={<Aiml />} />
          <Route path="/web-development/python" element={<Python />} />
          <Route path="/web-development/angular" element={<Angular />} />
          <Route path="/web-development/php" element={<Php />} />

          <Route path="/cms" element={<Cms />} />
          <Route path="/cms/shopify" element={<Shopify />} />
          <Route path="/cms/wordpress" element={<Wordpress />} />

          <Route path="/btbs" element={<Btbs />} />
          <Route path="/recruitment" element={<Rs />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/education" element={<Education />} />
          <Route path="/digitalmarketing" element={<Digitalmarketing />} />

          <Route path="/hiring/apply" element={<Hiring />} />
          <Route path="/hiring" element={<HiringTable />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;