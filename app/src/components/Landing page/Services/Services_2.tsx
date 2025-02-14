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
        className="py-15 flex flex-col-reverse lg:flex-row w-full items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
    >
        <div className="lg:w-3/5 relative flex justify-center items-center mt-10">
            <div className="relative flex flex-col lg:w-2/3">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-indigo-100 to-pink-100 rounded-full w-full h-[470px] mt-1 ml-20 blur-2xl"></div>
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
            className="lg:w-2/3 py-20 pl-27 pr-25 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
        >
            <h3 className="text-5xl leading-tight font-medium max-w-2xl ml-15">
                Revolutionize development within teams
            </h3>
            <p className="py-6 font-extralight max-w-5xl leading-7 ml-15.5">
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
              marginLeft: 7.6,
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
