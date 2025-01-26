"use client";
import React from 'react';
import { motion } from "framer-motion";
import { styles } from "@/components/utilities/styles/GlobalStyles";
import Link from 'next/link';

const Page = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0 }}
        className="flex items-center justify-center"
      >
        <Link
          href="https://mail.google.com/mail/?view=cm&to=hamzadeveloper1410@gmail.com"
          target="_blank" rel="noopener noreferrer"
          className="max-h-full border border-[#ffffff80] rounded-lg p-3 w-[400px] outline-none text-start"
          style={{ ...styles.aboutPAgeCard, textDecoration: "none" }}
        >
          hamzadeveloper1410@gmail.com
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1.1 }}
        className="flex items-center justify-center mt-4"
      >
        <a
          href="tel:+923140711696"
          className="max-h-full border border-[#ffffff80] rounded-lg p-3 w-[400px] outline-none text-start"
          style={{ ...styles.aboutPAgeCard, textDecoration: "none" }}
        >
          +92 314 0711696
        </a>
      </motion.div>
    </div>
  )
}

export default Page;

//Email
