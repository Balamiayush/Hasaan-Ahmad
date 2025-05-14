
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import AISection from "./components/AISection";
import KanbanBoard from "./components/KanbanBoard";
import CommunicationPlatform from "./components/CommunicationPlatform";
import PricingSection from "./components/PricingSection";
export default function Home() {
  return (
    <div className="w-full  ">
      <Hero/>
      <FeaturesSection/>
      {/* <AISection/>
      <KanbanBoard/>
      <CommunicationPlatform/>
      <PricingSection/> */}
    </div>
  );
}
