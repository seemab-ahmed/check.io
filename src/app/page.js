import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Functions from "./components/Functions";
import OurPrices from "./components/OurPrices";
import QuickActionSteps from "./components/QuickActionSteps";
import GetStarted from "./components/GetStarted";
import BrandsLight from "./components/BrandsLights";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import ContactUs from "./components/ContactUs";
import AppDownload from "./components/AppDownload";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brands />
      <Functions />
      <OurPrices />
      <QuickActionSteps />
      <GetStarted />
      <Testimonials />
      <BrandsLight />
      <AppDownload />
      <Stats />
      <ContactUs />
    </div>
  );
}
