import React, { useEffect, useState } from "react";
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import { motion } from "framer-motion";


const Features = () => {

  const changingWords = [
    "Efficiency",
    "Productivity",
    "Performance"
  ];
  
  const [currentWordId, setCurrentWordId] = useState(0);
  const letterDuration = 0.03;
  const letterStagger = letterDuration * 1.5;
  const wordVariants = {
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        staggerChildren: letterStagger,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: letterStagger,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        staggerChildren: letterStagger,
        duration: 0.6,
        ease: 'easeIn',
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      x: 10,
      transition: {
        duration: letterDuration
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: letterDuration
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordId((prev) => (prev + 1) % changingWords.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-800 flex flex-col lg:flex-row h-auto w-full py-14 items-center justify-between gap-x-10">
      <div className="lg:w-full">
      <h3 className="text-white text-5xl leading-tight px-10 ml-15 font-medium max-w-3xl">
          Boost Your <br/>Team’s {" "}
       <span className="inline-block relative">
          <motion.span
            key={currentWordId}
            className="inline-flex overflow-hidden text-qupiqpurple"
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {changingWords[currentWordId].split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={letterVariants}
              > 
                {letter}
              </motion.span>
            ))}
          </motion.span>
       </span>
       </h3>
       <p className="text-gray-300 px-10 ml-15 py-6 font-extralight max-w-5xl leading-7">
       QUBIQ revolutionizes remote collaboration, automating tasks, optimizing code quality, 
       and providing real-time performance insights—all in one seamless platform.
       </p>
      </div>
       
       
       <div className="lg:w-full flex flex-col gap-4 justify-end px-28">
       <div className="flex flex-row gap-7 items-center p-6 rounded-lg shadow-md max-w-3xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <div className="bg-purple-400 p-4 rounded-full text-white">
            <SmartToyOutlinedIcon fontSize="large"/>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold">AI Powered</h4>
          <p className="text-gray-300 text-sm">
          Enhances software development with intelligent task management, real-time code suggestions, and automated productivity tracking.
          </p>
        </div>
       </div>

       <div className="flex flex-row gap-7 items-center p-6 rounded-lg shadow-md max-w-3xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <div className="bg-purple-400 p-4 rounded-full text-white">
            <InsightsOutlinedIcon fontSize="large"/>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold">Analytics</h4>
          <p className="text-gray-300 text-sm">
          Deep insights with advanced analytics, helping teams optimize performance, track progress, and maintain high code quality.
          </p>
        </div>
       </div>

       <div className="flex flex-row gap-7 items-center p-6 rounded-lg shadow-md max-w-3xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <div className="bg-purple-400 p-4 rounded-full text-white">
            <HandshakeOutlinedIcon fontSize="large"/>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold">Collaborative</h4>
          <p className="text-gray-300 text-sm">
          Designed for seamless teamwork, integrating task management, code reviews, and real-time feedback in one unified platform.
          </p>
        </div>
       </div>
       
       </div>
    </section>

  );
};

export default Features;
