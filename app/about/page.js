"use client";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/components/utilities/styles/GlobalStyles";

const Page = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4" style={{ scrollbarWidth: "none" }}>
      {/* First Animated Box */}
      <motion.div
        initial={{ width: 500, height: 100, opacity: 0 }}
        animate={{ width: 900, height: 200, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0 }}
        className="rounded-lg shadow-lg border-2 border-purple-500 flex items-center justify-center px-4"
      >
        <div
          className="max-h-full overflow-auto"
          style={styles.aboutPAgeCard}
        >
          My name is Hamza, and I am a passionate frontend developer focused on creating user-friendly and visually appealing web experiences.
          With a strong command of modern web technologies.
          My goal is to deliver polished, accessible, and responsive solutions tailored to user needs.
        </div>
      </motion.div>

      {/* Second Animated Box */}
      <motion.div
        initial={{ width: 500, height: 100, opacity: 0 }}
        animate={{ width: 900, height: 200, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
        className="rounded-lg shadow-lg border-2 border-purple-500 flex items-center justify-center px-4"
      >
        <div
          className="max-h-full overflow-auto"
          style={styles.aboutPAgeCard}>
          I specialize in creating responsive websites using HTML, CSS, and JavaScript.
          My expertise includes integrating APIs to deliver
          dynamic content and creating interactive features that enhance user engagement,
          blending creativity with technical precision for seamless results.
        </div>
      </motion.div>

      {/* Third Animated Box */}
      <motion.div
        initial={{ width: 500, height: 100, opacity: 0 }}
        animate={{ width: 900, height: 200, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 4 }}
        className="rounded-lg shadow-lg border-2 border-purple-500 flex items-center justify-center p-2"
      >
        <div
          className="max-h-full overflow-auto"
          style={styles.aboutPAgeCard}>
          Over the course of my journey as a frontend developer,
          I have worked on projects ranging from small business websites to dynamic web applications.
          Recent work includes the <a className="text-red-700 underline" href="https://ai.myagentx.com/"
            target="_blank"
            rel="noopener noreferrer">My AgentX</a> website with real-time API integration and<a className="text-red-700 pe-2 ps-2 underline"
              href="https://app.mycreatorx.com/tate.ai"
              target="_blank"
              rel="noopener noreferrer">Voice AI</a> website with interactive animations,
          reflecting my focus on quality and innovation.


        </div>
      </motion.div>
    </div>
  );
};

export default Page;
