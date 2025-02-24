import React from 'react';
import { motion } from 'framer-motion';
import { Box, Button, Grid2, InputAdornment, TextField, Typography } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import img from '../../../assets/03.svg';

const ContactForm = () => {
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
            <form className='space-y-5'>
              <motion.div whileHover={{ scale: 1.025 }}>
                <TextField
                  fullWidth
                  variant='outlined'
                  label='Name'
                  placeholder='Enter your name'
                  name='name'
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='start'>
                          <PersonRoundedIcon />
                        </InputAdornment>
                      ),
                    },
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
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='start'>
                          <AlternateEmailRoundedIcon />
                        </InputAdornment>
                      ),
                    },
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
                  className='text-slate-800'
                />
              </motion.div>

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
            Submit
          </Button>
            </form>
          </Grid2>
        </Grid2>
      </Box>
    </motion.div>
  );
};

export default ContactForm;
