import ApplyNowSection from "../components/ApplyNowSection";
import PricingSection from "../components/PricingSection";
import InfoSection from "../components/InfoSection";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div className="">
        <div className="rounded-t-3xl overflow-hidden mb-10">
          <ApplyNowSection />
        </div>
        <div className="rounded-b-3xl overflow-hidden mb-10">
          <InfoSection />
        </div>
        <div className="rounded-b-3xl overflow-hidden mb-10">
          <AboutUs />
        </div>
        <div className="rounded-b-3xl overflow-hidden mb-10">
          <PricingSection />
        </div>
        <div
          className="rounded-tl-3xl rounded-br-3xl overflow-hidden"
          data-scroll-section
        >
          <div data-scroll data-scroll-speed="1">
          </div>
        </div>
    </div>
  );
};

export default Home;
