import { motion } from 'framer-motion';
import img from '../../../assets/02.png'
import { Button, TextField } from '@mui/material';

const Hero = () => {
  
  return (
    <main className='relative py-2 px-6 lg:px-20 text-center overflow-hidden'>
     <div className="absolute bottom-0 left-0 w-full h-[190px] bg-slate-800"></div>
      <div className="relativez-50 container mx-auto flex flex-col items-center">
        <div className='absolute py-115 bg-gradient-to-bl from-purple-300 via-indigo-200 to-pink-200 w-[85%] -z-5 h-32'></div>
        {/* Headline text */}
        <motion.div
          className=''
          initial={{ opacity:0, y: 20 }}
          animate={{ opacity:1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-5xl mt-16 font-semibold text-gray-900 leading-tight'>
          Enhance Productivity with <br/>
            <motion.span className='text-qubiqblue' whileHover={{scale: 1.1}}>AI-Driven </motion.span>
            Insights for Smarter Workflows
          </h1>

          <p className='mt-7 text-lg text-gray-700 max-w-3xl mx-auto'>
            Boost efficiency, enhance code quality, and collaborate seamlessly with
            <strong> QUBIQ</strong> – the next-gen AI-driven project management solution.
          </p>

          <p className='mt-20 mb-3 text-md text-gray-600 max-w-md mx-auto'>
            Join the waitlist to get notified on launch and get an exclusive experience
          </p>

        <div className='col-auto flex justify-center gap-1'>
        <TextField 
            id="outlined-basic" 
            variant="outlined" 
            placeholder='Enter your email'
            className='w-80'
            sx={{
              "& .MuiOutlinedInput-root": { 
                borderRadius: "6px", 
              },
              "& .MuiInputBase-input": { 
                fontSize: 14, 
                height: 17, 
                padding: 1.5,
                marginLeft: 1,
              } 
            }}
          />

          <Button
            variant='contained'
            sx={{
              background: 'oklch(60.12% 0.1 292.39)',
              borderRadius: "6px",
              height: '40px',
              margin: '1px',
              fontSize: 12,
              transition: '0.3s',
              "&:hover": {
                background: 'oklch(70% 0.12 292.39)',
                transform: 'scale(1.05)',
              },
            }}
          >
            Join the waitlist
          </Button>
        </div>
                 
        </motion.div>

        {/* Hero image */}
        <motion.div
          className='mt-12 w-full max-w-5xl relative'
          initial={{opacity: 0, scale: 0.95 }}
          animate={{opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          
          <div className="relative w-full p-2 rounded-2xl shadow-2xl">
          <div className="absolute rounded-2xl inset-0 border-spacing-1.5 blur-md border-1 border-indigo-500"></div>
            <img src={img} alt="Dashboard Preveiew" className='w-full rounded-2xl'/>
          </div>
          
        </motion.div>
      </div>

    </main>
  )
}

export default Hero
