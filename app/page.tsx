"use client";
import Lenis from 'lenis'
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import AISection from "./components/AISection";
import KanbanBoard from "./components/KanbanBoard";
import CommunicationPlatform from "./components/CommunicationPlatform";
import PricingSection from "./components/PricingSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/footer/Footer1";
import { useEffect } from "react";
import Card from './components/Card';
import Loadinggg from './components/Loadinggg';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    lenis.on('scroll', (e) => {
      // console.log(e);
    });
    
    // Clean up function
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className=" w-full relative ">

      
      {/* Page Content */}
        {/* <Loadinggg /> */}
        <Hero />
        <FeaturesSection />
        <Card />
        <AISection />
        <KanbanBoard />
        <CommunicationPlatform />
        <PricingSection />
        <CallToAction />
        <Footer />
    </div>
  );
}