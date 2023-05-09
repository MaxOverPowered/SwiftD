import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ApplyNowSection from "../components/ApplyNowSection";
import PricingSection from "../components/PricingSection";
import Logbook from "../components/Logbook";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-green-500 via-green-800 to-green-500">
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05, multiplier: 1.2 }}
        watch={[]}
      >
        <div className="rounded-t-3xl overflow-hidden mb-10">
          <ApplyNowSection />
        </div>
        <div className="rounded-b-3xl overflow-hidden mb-10">
          <PricingSection />
        </div>
        <div
          className="rounded-tl-3xl rounded-br-3xl overflow-hidden"
          data-scroll-section
        >
          <div data-scroll data-scroll-speed="1">
            {/*<Logbook />*/}
          </div>
        </div>
      </LocomotiveScrollProvider>
    </div>
  );
};

export default Home;
