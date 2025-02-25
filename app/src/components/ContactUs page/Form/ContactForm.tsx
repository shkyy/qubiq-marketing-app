import { motion } from 'framer-motion';
import { Box, Button, Grid2, InputAdornment, TextField, Typography, Snackbar, Alert } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import img from '../../../assets/03.svg';
import { useState, useRef, FormEvent } from 'react';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    fetch("https://script.google.com/macros/s/AKfycbzujjKo8azlAZWYhJecRg-wGKTyXl0Vq55AfUlMf6T6VoQaeavVXAdmi3_om5QZP-Ln/exec", {
      method: 'POST',
      body: new FormData(formRef.current),
    }).then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      setSnackbarMessage("Message sent successfully!");
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setFormData({ name: '', email: '', message: '' });
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='flex items-center justify-center px-6 w-full'
    >
      <Box className='bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl' boxShadow={5}>
        <Grid2 container spacing={4} alignItems='center'>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <motion.img
              src={img}
              alt='Contact Us'
              className='w-full h-auto rounded-2xl'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography
              variant='h4'
              component='h4'
              className='text-slate-700 font-semibold text-center mb-10'
            >
              Contact Form
            </Typography>
            <form className='space-y-5' onSubmit={handleSubmit} ref={formRef}>
              <motion.div whileHover={{ scale: 1.025 }}>
                <TextField
                  fullWidth
                  variant='outlined'
                  label='Name'
                  placeholder='Enter your name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PersonRoundedIcon fontSize='small' />
                      </InputAdornment>
                    ),
                  }}
                  className='text-slate-800'
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.025 }}>
                <TextField
                  fullWidth
                  variant='outlined'
                  label='Email'
                  placeholder='Enter your email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <AlternateEmailRoundedIcon fontSize='small'/>
                      </InputAdornment>
                    ),
                  }}
                  className='text-slate-800'
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.025 }}>
                <TextField
                  fullWidth
                  label='Message'
                  multiline
                  rows={4}
                  placeholder='Enter your Message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='text-slate-800'
                />
              </motion.div>

              <Button
                variant='contained'
                type='submit'
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
                Submit
              </Button>
            </form>
          </Grid2>
        </Grid2>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </motion.div>
  );
};

export default ContactForm;
