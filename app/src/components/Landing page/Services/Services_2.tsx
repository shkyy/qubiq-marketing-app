import { Button } from "@mui/material"
import svg from '../../../assets/02.svg'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { motion } from "framer-motion";

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" }}
}

const Services_2 = () => {
  return (
    <motion.section 
        className="py-10 flex flex-col-reverse lg:flex-row w-full items-center px-6 md:px-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
    >
        <div className="lg:w-3/5 relative flex justify-center items-center mt-10">
            <div className="relative flex flex-col w-full lg:w-2/3">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-indigo-100 to-pink-100 rounded-full w-full h-[300px] sm:h-[400px] lg:h-[470px] mt-1 ml-5 sm:ml-10 lg:ml-20 blur-2xl"></div>
            <motion.img 
                src={svg} 
                alt="Feature Illustration" 
                className="w-full z-10"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            </div>
        </div>

        <motion.div 
            className="w-full lg:w-2/3 py-10 sm:py-16 lg:py-20 text-center lg:text-left px-4 sm:px-10 lg:px-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
        >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-medium max-w-2xl mx-auto lg:mx-0">
                Revolutionize development within teams
            </h3>
            <p className="py-4 sm:py-6 font-extralight max-w-5xl leading-7 mx-auto lg:mx-0">
                Empowers developers with AI-driven insights, real-time feedback, and seamless collaboration, 
                helping coding more efficient and deliver high-quality software faster.
            </p>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
            <Button
            variant='outlined'
            sx={{
              borderColor: 'oklch(65.9% 0.15 292.39)',
              color: 'oklch(65.9% 0.15 292.39)',
              border: 2,
              borderRadius: "6px",
              height: '42px',
              margin: '1px',
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
        </motion.div>
    </motion.section>
  )
}

export default Services_2