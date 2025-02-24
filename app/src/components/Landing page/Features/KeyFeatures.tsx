import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: SmartToyOutlinedIcon,
    title: "AI-Powered Task Management",
    description:
      "Leverage AI to automate task prioritization and streamline workflows, boosting team efficiency.",
  },
  {
    icon: CodeOutlinedIcon,
    title: "Real-Time Code Insights",
    description:
      "AI-driven analysis provides instant feedback and optimization suggestions to improve code quality.",
  },
  {
    icon: GroupsOutlinedIcon,
    title: "Seamless Collaboration Hub",
    description:
      "A centralized workspace with real-time communication and project tracking for cohesive teamwork.",
  },
  {
    icon: BarChartOutlinedIcon,
    title: "Data-Driven Performance Metrics",
    description:
      "Advanced analytics offer deep insights into productivity, efficiency, and workflow bottlenecks.",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" }}
}

const KeyFeatures = () => {

  const [expandIndex, setExpandIndex] = useState<number | null>(null);

  return (
    <motion.section 
      className='flex flex-col lg:flex-row w-full py-8 items-center justify-between'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariants}
    >
      <div className='lg:w-2/3 relative flex flex-col items-center justify-start self-start'>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-indigo-100 to-pink-100 rounded-full w-4/5 h-135 -z-5 mt-10 ml-20 blur-2xl"></div>
        <div className="flex flex-col w-2/3 py-30 space-y-6">
       {features.map(({title, icon: Icon, description}, index) => (
          <motion.div 
            key={index} 
            className="relative flex flex-row item-start w-full p-5 rounded-lg shadow-md max-w-3xl cursor-pointer transition-all duration-300 ease-in-out"
            initial={{ borderRadius: "10px", scale: 1 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
            viewport={{ once: true }}
            whileHover={{ borderRadius: "16px", scale: 1.03, boxShadow: "0px 5px 15px rgba(150, 100, 180, 0.3)" }}
            style={{ minHeight: "80px"}}
            onMouseEnter={() => setExpandIndex(index)}
            onMouseLeave={() => setExpandIndex(null)}
          >

          <div className="pr-4 text-purple-400 text-lg">
              <Icon />
          </div>
          <div>
            <div className='flex-1'>

            <h4 className="text-gray-700 text-lg font-semibold ">{title}</h4>
            <AnimatePresence>
              {expandIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1, transition: {duration: 0.5, ease: [0.25, 1, 0.5, 1]} }}
                  exit={{ height: 0, opacity: 0, transition: {duration: 0.4, ease: "easeInOut"} }}
                  className="overflow-hidden"
                >
                  <p className='text-gray-500 text-sm'>{description} <OpenInNewOutlinedIcon sx={{ fontSize: 14, marginLeft: 0.5 }}></OpenInNewOutlinedIcon></p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          </div>
          </motion.div>
        ))}
        </div>
      </div>
      

      <motion.div 
        className="lg:w-3/5 flex flex-col gap-1 justify-end py-30"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        viewport={{ once: true, amount: 0.2 }}
      >
      <h3 className="text-5xl leading-tight px-15 font-medium max-w-2xl">
          Know More About <br/>Our Key Features
      </h3>
       <p className="px-15 py-6 font-extralight max-w-5xl leading-7 mr-14">
       Empower your remote software team with AI-driven task management, real-time code insights, 
       and data-backed productivity tracking—streamlining workflows, enhancing code quality, and driving seamless collaboration.
       </p>
       <Button
            variant='outlined'
            sx={{
              borderColor: 'oklch(65.9% 0.15 292.39)',
              color: 'oklch(65.9% 0.15 292.39)',
              border: 2,
              borderRadius: "6px",
              height: '42px',
              margin: '1px',
              marginRight: 63.2,
              marginLeft: 7.7,
              fontSize: 13,
              transition: 'all 0.3s ease-in-out',
              "&:hover": {
                background: 'linear-gradient(90deg, oklch(65.9% 0.15 292.39) 20%, oklch(70% 0.12 278.39) 90%)',
                color: 'white',
                boxShadow: '0px 4px 12px rgba(150, 100, 180, 0.4)',
                transform: 'scale(1.07)',
              },
            }}
          >
            <Link to='/features'>Learn More {" "} <OpenInNewOutlinedIcon sx={{ fontSize: 16, marginLeft: 1 }} /></Link>
          </Button>
      </motion.div>
    </motion.section>
  )
}

export default KeyFeatures
