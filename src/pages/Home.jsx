import React from "react";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Functions from "../components/Functions";
import OurPrices from "../components/OurPrices";
import QuickActionSteps from "../components/QuickActionSteps";
import GetStarted from "../components/GetStarted";
import BrandsLight from "../components/BrandsLights";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Brands />
      <Functions />
      <OurPrices />
      <QuickActionSteps />
      <GetStarted />
      <Testimonials />
      <BrandsLight />
      <Stats />
      <ContactUs />
    </main>
  );
};

export default Home;
