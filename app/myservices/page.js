"use client";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4" style={{ scrollbarWidth: "none" }}>
      <motion.div
        initial={{ width: 100, height: 300, opacity: 0 }}
        animate={{ width: 700, height: 400, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0 }}
        className="rounded-lg shadow-lg border-2 border-purple-500 flex items-center justify-center p-4"
      >
        <div
        className="h-full overflow-auto"
          style={{
            fontSize: 22, fontWeight: "500",
            scrollbarWidth: "none"
          }}>
          As a skilled frontend developer,
          I offer a range of services to create modern, responsive, and dynamic web applications.
          With expertise in HTML, CSS, JavaScript, and TailwindCSS, I craft visually appealing and user-friendly interfaces.
          I specialize in building robust frontend solutions using frameworks like Next.js and React Native, ensuring seamless performance across devices.
          Additionally, I excel in API integration, enabling dynamic content and interactive features for a richer user experience.
          My focus is on delivering polished, efficient, and accessible solutions tailored to meet your unique needs.
        </div>
      </motion.div>
    </div>
  )
}

export default Page
