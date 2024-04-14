import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <HeroSection />
        <Feature />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
