
"use client";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import AISection from "./components/AISection";
import KanbanBoard from "./components/KanbanBoard";
import CommunicationPlatform from "./components/CommunicationPlatform";
import PricingSection from "./components/PricingSection";
// import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className="w-full bg-gradient-to-br from-white via-gray-50  ">
      <Hero/>
      <Navbar/>
      <FeaturesSection/>
      <AISection/>
      <KanbanBoard/>
      <CommunicationPlatform/>
      {/* <PricingSection/> */}
      {/* <CallToAction/> */}
      <Footer/>
    </div>
  );
}
