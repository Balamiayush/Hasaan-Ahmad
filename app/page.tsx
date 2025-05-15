
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import AISection from "./components/AISection";
import KanbanBoard from "./components/KanbanBoard";
import CommunicationPlatform from "./components/CommunicationPlatform";
import PricingSection from "./components/PricingSection";
// import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-br from-white via-gray-50  ">
      <Hero/>
      <Navbar/>
      <FeaturesSection/>
      <AISection/>
      <KanbanBoard/>
      <CommunicationPlatform/>
      <PricingSection/>
      {/* <CallToAction/> */}
      <Footer/>
    </div>
  );
}
