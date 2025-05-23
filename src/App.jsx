import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const app = () => {
  return (
    <div className="baseContainer">
      <Header />
      <Nav />
      <About />
      <Portfolio />
      {/* <Experience /> */}
      {/* <Services/> */}
      {/* <Testimonials/> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default app;
