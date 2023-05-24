import ApplyNowSection from "../components/ApplyNowSection";
import PricingSection from "../components/PricingSection";
import InfoSection from "../components/InfoSection";
import AboutUs from "./AboutUs";
import ServicePage from "./Services";

const Home = () => {
  return (
    <div className="container mx-auto">
      <ApplyNowSection />
      <InfoSection />
      <AboutUs />
      <ServicePage />
      <div className="mb-10"></div> {/* Add spacing at the bottom */}
      <div
        className="rounded-tl-3xl rounded-br-3xl overflow-hidden"
        data-scroll-section
      >
        <div data-scroll data-scroll-speed="1"></div>
      </div>
    </div>
  );
};

export default Home;
