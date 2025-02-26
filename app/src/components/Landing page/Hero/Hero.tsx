import { motion } from 'framer-motion';
import img from '../../../assets/02.png'
import { Alert, Button, Snackbar, TextField, useMediaQuery, useTheme } from '@mui/material';
import { FormEvent, useRef, useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>("success");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    fetch("https://script.google.com/macros/s/AKfycbz9xNeYF2O24XSRhINBZwwQM6xtmgGn6oRUB1Q29sOdtdgCHBHySkKuMhUOXvCXqjtw/exec", {
      method: 'POST',
      body: new FormData(formRef.current),
    }).then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      setSnackbarMessage("Added to the waiting list");
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setEmail("")
      console.log(data);
    })
    .catch(err => {
      console.error('There was a problem with the fetch operation:', err);
      setSnackbarMessage('Submission failed. Please try again.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    });
  };

  return (
    <main className='relative py-2 px-6 lg:px-20 text-center overflow-hidden'>
     <div className="absolute bottom-0 left-0 w-full h-[190px] bg-slate-800"></div>
      <div className="relativez-50 container mx-auto flex flex-col items-center">
        <div className='absolute py-115 bg-gradient-to-bl from-purple-300 via-indigo-200 to-pink-200 w-[85%] -z-5 h-32 '></div>
        <motion.div
          className=''
          initial={{ opacity:0, y: 20 }}
          animate={{ opacity:1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-lg md:text-5xl max-w-xs md:max-w-5xl mt-8 md:mt-16 ml-1 md:ml-0 font-semibold text-gray-900 leading-normal md:leading-tight'>
          Enhance Productivity with<br/>
            <motion.span className='text-qubiqblue' whileHover={{scale: 1.1}}>AI-Driven </motion.span>
            Insights for Smarter Workflows
          </h1>

          <p className='mt-2 md:mt-7 text-xs md:text-lg text-gray-700 max-w-2xs md:max-w-3xl mx-auto leading-normal'>
            Boost efficiency, enhance code quality, and collaborate seamlessly with
            <strong> QUBIQ</strong> – the next-gen AI-driven project management solution.
          </p>

        <form ref={formRef} className={`${isMobile ? 'flex flex-col items-center' : 'col-auto flex justify-center gap-1'} mt-5 md:mt-10`}  onSubmit={handleSubmit}>
          <TextField 
            id="outlined-basic" 
            variant="outlined" 
            placeholder='Enter your email'
            className={`${isMobile ? 'w-full max-w-3xs' : 'w-80'}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="Email"
            sx={{
              "& .MuiOutlinedInput-root": { 
                borderRadius: "6px", 
              },
              "& .MuiInputBase-input": { 
                fontSize: isMobile ? 11.5 : 14, 
                height: isMobile ? 8 : 17,  
                padding: 1.5,
                marginLeft: 1,
              } ,
              marginBottom: isMobile ? 0.9 : 0
            }}
          />

          <Button
            variant='contained'
            type='submit'
            sx={{
              background: 'oklch(60.12% 0.1 292.39)',
              borderRadius: "6px",
              height: isMobile ? '32px' : '40px',
              width: isMobile ? '79%' : 'auto',
              maxWidth: isMobile ? '280px' : 'none',
              fontSize: isMobile? 11 : 12,
              transition: '0.3s',
              "&:hover": {
                background: 'oklch(70% 0.12 292.39)',
                transform: 'scale(1.05)',
              },
            }}
          >
            Join the waitlist
          </Button>
        </form>
                  
        </motion.div>

        {/* Hero image */}
        <motion.div
          className='mt-8 md:mt-12 w-full max-w-5xl relative'
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

      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
          <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: '100%'}} variant='filled'>
            {snackbarMessage}
          </Alert>
      </Snackbar>
    </main>
  )
}

export default Hero;
