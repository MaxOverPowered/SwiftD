import ApplyNowSection from "../components/ApplyNowSection";
import PricingSection from "../components/PricingSection";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-green-500 via-green-800 to-green-500">
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
          </div>
        </div>
    </div>
  );
};

export default Home;
