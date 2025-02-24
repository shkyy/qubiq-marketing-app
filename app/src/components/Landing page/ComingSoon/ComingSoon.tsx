import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  const circles = Array(3).fill(null);
  
  return (
    <div className="relative flex flex-col items-center justify-center min-h-100 bg-slate-800 overflow-hidden">
      {circles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-purple-300/30 via-indigo-200/30 to-pink-200/30"
          style={{
            width: `${(index + 1) * 100}px`, 
            height: `${(index + 1) * 100}px`, 
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative px-4">

          <motion.h1
            className="overflow-y-visible text-3xl md:text-5xl pb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-pink-200 text-center mb-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Coming soon...
          </motion.h1>

          <motion.p
            className="text-base text-indigo-200/80 text-center mb-6" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            We're crafting something amazing for you. Stay tuned!
          </motion.p>

      </div>
    </div>
  );
};

export default ComingSoon;
