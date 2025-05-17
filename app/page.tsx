
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
    
    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      // console.log(e);
    });
  })
  return (
 <div className="relative main h-full w-full bg-slate-950 overflow-x-hidden">
    <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
    <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
    
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

{/* <Loadinggg/>
<Hero/>
<FeaturesSection/>
<Card/>
<AISection/>
<KanbanBoard/>
<CommunicationPlatform/>
<PricingSection/> 
 <CallToAction/>
<Footer/> */}