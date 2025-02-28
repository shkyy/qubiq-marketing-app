import { Button, useMediaQuery, useTheme } from '@mui/material';
import svg from '../../../assets/01.svg';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" }}
}

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <motion.section 
      className='px-6 md:px-13 py-2 flex flex-col-reverse md:flex-col lg:flex-row w-full items-center'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariants}
    >
      <motion.div 
        className='lg:w-2/3 py-10 md:py-25 text-center lg:text-left'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        viewport={{ once: true, amount: 0.3 }}
      >
      <h3 className="text-3xl md:text-5xl leading-tight px-2 md:px-15 font-medium max-w-2xl mx-auto lg:mx-0">
        Strategic Management Meets <br/>Technical Excellence
      </h3>
       <p className="py-6 font-extralight px-1 md:pr-30 leading-7 mx-auto lg:ml-15 max-w-xl lg:max-w-none">
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
              marginLeft: isMobile ? 0 : 8,
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
      className={`lg:w-3/5 relative flex ${isMobile ? 'flex-col-reverse' : 'flex-col'} items-center`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-indigo-200 to-pink-200 rounded-full w-5/6 h-96 md:h-120 -z-5 mt-10 md:mt-25 ml-0 md:ml-10 blur-xl"></div>
      <img src={svg} alt="Feature Illustration" className='w-4/5 md:w-[80%] mx-auto md:ml-22'/>
      </motion.div>
    </motion.section>
  );
};

export default Services;
