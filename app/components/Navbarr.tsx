"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const Navbarr = () => {
  const tabs = ["Features", "User Roles", "Domains", "Pricing"];

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ul className="flex justify-center gap-6   relative  items-center  bg-blue-500 ">
        {tabs.map((tab) => (
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            
            key={tab} className="text-xl font-semibold  ">
            <Link
              href={`/${tab.toLowerCase().replace(" ", "-")}`}
            >
              <motion.span
               className="span1 relative" whileHover={{
               top
                background: "green"
               }}>
                {tab}
              </motion.span> <br />
              <span className="span2 transform -translate-y-[-1vw]" >
                {tab}
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>

    </div>
  )
}

export default Navbarr

