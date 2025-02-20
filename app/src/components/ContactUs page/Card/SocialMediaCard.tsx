import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import React from 'react'
import { motion } from 'framer-motion';

interface Card {
  id: number,
  title: string,
  description: string,
  icon: JSX.Element,
  link?: string,
}

const cards: Card[] = [
  {
    id: 1,
    title: 'LinkedIn',
    description: 'Connect with us',
    icon: <LinkedInIcon fontSize='large' sx={{color: '#0A66C2'}}/>,
    link: 'https://www.linkedin.com/company/qubiq-official/',
  },
  {
    id: 2,
    title: 'Email',
    description: 'qubiq.contact@gmail.com',
    icon: <MailOutlineIcon fontSize='large' sx={{color: '#d44638'}}/>,
  },
  {
    id: 3,
    title: 'Instagram',
    description: 'Follow us',
    icon: <InstagramIcon fontSize='large' sx={{color: '#c13584'}} />,
    link: 'https://www.instagram.com/qubiq.co/',
  },
]

const SocialMediaCard: React.FC = () => {

  const handleCardLink = (link?: string) => {
    if (!link) return;
    window.open(link, '_blank');    
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: 4,
        padding: 3,
        flexWrap: 'nowrap',
        overflowX: 'auto',
        margin: 'auto',
        maxWidth: '100%',
      }}
    >
      {cards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 1}}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
        <Card
          
          sx={{
            height: 160,
            width: 330,
            transition: '0.3s',
            bgcolor: "#fff",
            borderRadius: 3,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            boxShadow: 4,
            justifyContent: 'center',
            background: 'linear-gradient(to top left, #fff, oklch(0.827 0.119 306.383))',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 8,
              background: 'linear-gradient(to bottom right, #fff, oklch(0.827 0.119 306.383))'
            },
          }}
        >
          <CardActionArea
            onClick={() => handleCardLink(card.link)}
            disabled={!card.link}
            sx={{
              textAlign: 'center',
              width: '100%',
              height: '100%',
              padding: 2,
              cursor: card.link ? 'pointer' : 'default',
              '&:hover': {
                backgroundColor: card.link ? 'action.hover' : 'inherit',
              }
            }}
          >
            <CardContent
              sx={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: '8px'
              }}
            >
              {card.icon}
              <Typography 
                variant='h5' 
                component='div' 
                sx={{ 
                  marginTop: 3,
                  fontSize: '29px',
                  fontFamily: 'Poppins, sans-serif',
                }}>
                {card.title}
              </Typography>
              <Typography variant='body2' color='text.secondary' sx={{ fontFamily: 'Poppins, sans-serif' }}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </motion.div>
        
      ))}
    </Box>
  )
}

export default SocialMediaCard
