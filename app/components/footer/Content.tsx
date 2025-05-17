"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Content() {
     gsap.registerPlugin(ScrollTrigger);
  const [selectedTab, setSelectedTab] = useState("Features");
  const tabs = ["Features", "User Roles", "Domains", "Pricing"];
  useGSAP(() => {
      gsap.to(".footerHeading",{
        y: 100,
          scrollTrigger: {
              trigger: ".footerrrr",
              start: "top top",
              end: "bottom top",
              scrub: 1,
          }
      })
      gsap.to(".navlist",{
       
      })

  })
  return (
    <div className='bg-[#4E4E5A]  footerrrr  py-8 px-12 h-full w-full flex flex-col justify-between'>
      <Section2 />
      <Nav tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
}

const Section2 = () => {
  return (
    <div className='flex justify-center footerHeading items-center h-[50vh] mb-[20vh] lg:mt-10 w-full lg:h-screen'>
      <h1 className='text-[14vw]  leading-[0.8]  text-white font-bold'>Nexus Core</h1>
      <p className='bg-black text-white p-2 rounded-sm'>©copyright</p>
    </div>
  );
};

const Nav = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <div className='flex shrink-0 gap-20 -py-5 '>
      <div className='flex lg:flex-col  navlist'>
        {tabs.map((tab) => (
          <Link
            href={`#${tab.toLowerCase().replace(" ", "-")}`}
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className="relative px-3 py-2 rounded-md text-sm font-medium"
          >
            <motion.div
              whileHover="hover"
              className="relative overflow-hidden h-5 w-fit group"
            >
              <motion.span
                variants={{ hover: { y: -20 } }}
                initial={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className={`block ${selectedTab === tab ? 'text-black' : 'text-black'}`}
              >
                {tab}
              </motion.span>
              <motion.span
                variants={{ hover: { y: -20 } }}
                initial={{ y: 10 }}
                transition={{ duration: 0.3 }}
                className={`absolute left-0 inline-block ${selectedTab === tab ? 'text-[#ffffff]' : 'text-white'}`}
              >
                {tab}
              </motion.span>
              <span className={`absolute left-0 bottom-0 h-[2px] w-full ${selectedTab === tab ? 'bg-[#f1f1f1]' : 'bg-gray-300'} transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100`}></span>
            </motion.div>
          </Link>
        ))}
        <Link
          href="/login"
          onClick={() => setSelectedTab("Login")}
          className="relative px-3 py-2 rounded-md text-sm font-medium"
        >
          <motion.div
            whileHover="hover"
            className="relative overflow-hidden h-5 w-fit group"
          >
            <motion.span
              variants={{ hover: { y: -20 } }}
              initial={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className={`block ${selectedTab === 'Login' ? 'text-black' : 'text-black'}`}
            >
              Login
            </motion.span>
            <motion.span
              variants={{ hover: { y: -20 } }}
              initial={{ y: 10 }}
              transition={{ duration: 0.3 }}
              className={`absolute left-0 inline-block ${selectedTab === 'Login' ? 'text-[#ffffff]' : 'text-white'}`}
            >
              Login
            </motion.span>
            <span className={`absolute left-0 bottom-0 h-[2px] w-full ${selectedTab === 'Login' ? 'bg-[#f1f1f1]' : 'bg-gray-300'} transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100`}></span>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};
