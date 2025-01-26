"use client"
import React from 'react';
import { motion } from "framer-motion";
import { styles } from "@/components/utilities/styles/GlobalStyles";

const Page = () => {

  const VlogersList = [
    {
      id: 1,
      name: "Talha Reviews",
      description: "Hey this is Talha Reviews..",
      delay: 0
    },
    {
      id: 2,
      name: "Talha Reviews2",
      description: "Hey this is Talha Reviews2..",
      delay: 2
    },
    {
      id: 3,
      name: "Talha Reviews3",
      description: "Hey this is Talha Reviews3..",
      delay: 4
    },
    {
      id: 4,
      name: "Talha Reviews4",
      description: "Hey this is Talha Reviews4..",
      delay: 6
    },
    {
      id: 5,
      name: "Talha Reviews5",
      description: "Hey this is Talha Reviews5..",
      delay: 8
    },
    {
      id: 5,
      name: "Talha Reviews5",
      description: "Hey this is Talha Reviews5..",
      delay: 8
    },
    {
      id: 5,
      name: "Talha Reviews5",
      description: "Hey this is Talha Reviews5..",
      delay: 8
    },
    {
      id: 5,
      name: "Talha Reviews5",
      description: "Hey this is Talha Reviews5..",
      delay: 8
    },
    {
      id: 5,
      name: "Talha Reviews5",
      description: "Hey this is Talha Reviews5..",
      delay: 8
    },
    {
      id: 5,
      name: "Talha Reviews5",
      description: "Hey this is Talha Reviews5..",
      delay: 8
    },
  ];

  return (
    <div className='h-full'>
      <div style={{ fontWeight: "600", fontSize: 22 }}>
        Some of the most famous Vlogers
      </div>
      <div className='flex flex-row justify-center mt-4 w-full h-full'>
        <div className='flex flex-wrap w-11/12 max-h-full overflow-auto pb-32' style={{ scrollbarWidth: "none" }}>
          {
            VlogersList.map((item, index) => {
              return (
                <div key={index} className='w-3/12 ps-6'>
                  <motion.div
                    initial={{ width: "50%", height: 100, opacity: 0 }}
                    animate={{ width: "100%", height: 200, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: index === 0 ? 0 : index + 1 }}
                    className="rounded-lg shadow-lg border-2 border-purple-500 flex items-center justify-center px-4 mt-6"
                  >
                    <div
                      className="max-h-full overflow-hidden"
                      style={{ ...styles.aboutPAgeCard, scrollbarWidth: "none" }}
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
