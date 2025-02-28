import { useEffect, useState } from "react";
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
    <section className="bg-slate-800 flex flex-col lg:flex-row h-auto w-full py-14 items-center justify-between gap-x-10 px-6 sm:px-10 md:px-28 lg:px-28">
      <div className="lg:w-full text-center lg:text-left">
        <h3 className="text-white text-3xl md:text-5xl leading-tight font-medium max-w-3xl">
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
        <p className="text-gray-300 py-6 font-extralight max-w-5xl leading-7 text-sm sm:text-base">
          QUBIQ revolutionizes remote collaboration, automating tasks, optimizing code quality, 
          and providing real-time performance insights—all in one seamless platform.
        </p>
      </div>
      
      <div className="lg:w-full flex flex-col gap-4 justify-end px-4 sm:px-10 md:px-16 lg:px-28 w-full max-w-3xl">
        {[{
          icon: <SmartToyOutlinedIcon fontSize="large" />, 
          title: "AI Powered", 
          description: "Enhances software development with intelligent task management, real-time code suggestions, and automated productivity tracking."
        }, {
          icon: <InsightsOutlinedIcon fontSize="large" />, 
          title: "Analytics", 
          description: "Deep insights with advanced analytics, helping teams optimize performance, track progress, and maintain high code quality."
        }, {
          icon: <HandshakeOutlinedIcon fontSize="large" />, 
          title: "Collaborative", 
          description: "Designed for seamless teamwork, integrating task management, code reviews, and real-time feedback in one unified platform."
        }].map((feature, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-7 items-center p-6 rounded-lg shadow-md w-full transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="bg-purple-400 p-4 rounded-full text-white">
              {feature.icon}
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-white text-lg font-semibold">{feature.title}</h4>
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
