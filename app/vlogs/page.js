"use client"
import React from 'react';
import { motion } from "framer-motion";
import { styles } from "@/components/utilities/styles/GlobalStyles";
import Image from 'next/image';

const Page = () => {

  const VlogersList = [
    {
      id: 1,
      name: "Talha Reviews",
      description: "Talha Reviews is about E-Commerce",
      delay: 0,
      thumb: "/assets/TalhaReviews.webp"
    },
    {
      id: 2,
      name: "Adeel Chaudary",
      description: "Adeel Chaudary is about tasty foods",
      delay: 2,
      thumb: "/assets/AddelChaudary.jpg"
    },
    {
      id: 3,
      name: "Irfan Junejo",
      description: "Irfan Junejo is about exploring different beautiful cities of Pakistan.",
      delay: 4,
      thumb: "/assets/IrfanJunejo.png"
    },
    {
      id: 4,
      name: "Marques Brownlee",
      description: "Marques Brownlee is about exploring things related to Tec.",
      delay: 6,
      thumb: "/assets/MarquesBrownlee.jpg"
    },
  ];

  return (
    <div className='h-full'>
      <div style={{ fontWeight: "600", fontSize: 22 }}>
        Some of the most famous Vlogers
      </div>
      <div className='flex flex-row justify-center mt-4 w-full h-full'>
        <div className='flex flex-wrap w-full max-h-full overflow-auto pb-32' style={{ scrollbarWidth: "none" }}>
          {
            VlogersList.map((item, index) => {
              return (
                <div key={item.id} className='w-3/12 pe-4'>
                  <motion.div
                    initial={{ width: "50%", height: 100, opacity: 0 }}
                    animate={{ width: "100%", height: 200, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: index === 0 ? 0 : index + 1 }}
                    className="rounded-lg shadow-lg border-2 border-purple-500 flex items-center justify-center px-4 mt-6"
                    style={{
                      backgroundImage: `url(${item.thumb})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="max-h-full overflow-hidden"
                      style={{
                        ...styles.aboutPAgeCard, scrollbarWidth: "none",
                      }}
                    >
                      {item.name}
                    </div>
                  </motion.div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Page
