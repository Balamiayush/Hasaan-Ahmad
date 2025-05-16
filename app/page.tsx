
"use client";
import Lenis from 'lenis'
import Loading from "./components/Loading";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import AISection from "./components/AISection";
import KanbanBoard from "./components/KanbanBoard";
import CommunicationPlatform from "./components/CommunicationPlatform";
import PricingSection from "./components/PricingSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  // console.log(e);
});
  })
  return (
    <div className="w-full bg-gradient-to-br from-white via-gray-50  ">
      <Loading/>
      <Hero/>
      <FeaturesSection/>
      <AISection/>
      <KanbanBoard/>
      <CommunicationPlatform/>
      <PricingSection/> 
       <CallToAction/>
      <Footer/>
    </div>
  );
}
