import { Button } from '@mui/material';
import svg from '../../../assets/01.svg';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" }}
}

const Services = () => {
  return (
    <motion.section 
      className='px-13 flex flex-col lg:flex-row w-full'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariants}
    >
      <motion.div 
        className='lg:w-2/3 py-25'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        viewport={{ once: true, amount: 0.3 }}
      >
      <h3 className="text-5xl leading-tight px-15 font-medium max-w-2xl">
        Strategic Management Meets <br/>Technical Excellence
      </h3>
       <p className="py-6 font-extralight pr-30 leading-7 ml-15">
        Data-driven decision-making with real-time development insights, 
        helping project managers optimize resources, enhance productivity, 
        and drive business success through smarter software management.
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
              marginLeft: 7.5,
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
            Learn More {" "} <OpenInNewOutlinedIcon sx={{ fontSize: 16, marginLeft: 1 }} />
          </Button>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      viewport={{ once: true, amount: 0.3 }}
      className='lg:w-3/5 relative flex flex-col'>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-indigo-200 to-pink-200 rounded-full w-5/6 h-120 -z-5 mt-25 ml-10 blur-xl"></div>
      <img src={svg} alt="Feature Illustration" className='w-[80%] ml-22'/>
      {/* <a href="https://storyset.com/business">Business illustrations by Storyset</a> */}
      </motion.div>
    </motion.section>
  );
};

export default Services;


