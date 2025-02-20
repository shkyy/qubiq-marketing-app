import React from 'react'
import { motion } from 'framer-motion'
import { Box, Grid2, InputAdornment, TextField, Typography } from '@mui/material'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import img from '../../../assets/03.svg';

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='flex items-center justify-center px-6 w-full bg-slate-800'
    >
      <Box className='bg-purple-200 shadow-2xl rounded-2xl p-8 w-full max-w-4xl'>
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
              component='h2'
              className='text-gray-800 font-semibold text-center mb-6'>
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
                      )
                    }
                  }} />

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
                      )
                    }
                  }} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.025 }}>
                <TextField
                  fullWidth
                  label='Message'
                  multiline
                  rows={4}
                  placeholder='Enter your Message'
                  name='message'
                />
              </motion.div>
            </form>
          </Grid2>
        </Grid2>

      </Box>
    </motion.div>
  )
}

export default ContactForm
