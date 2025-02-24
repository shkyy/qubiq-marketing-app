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
    icon: <LinkedInIcon fontSize='large' sx={{color: '#ffffff'}}/>,
    link: 'https://www.linkedin.com/company/qubiq-official/',
  },
  {
    id: 2,
    title: 'Email',
    description: 'qubiq.contact@gmail.com',
    icon: <MailOutlineIcon fontSize='large' sx={{color: '#ffffff'}}/>,
  },
  {
    id: 3,
    title: 'Instagram',
    description: 'Follow us',
    icon: <InstagramIcon fontSize='large' sx={{color: '#ffffff'}} />,
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
        marginTop: '50px',
      }}
    >
      {cards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Card
            sx={{
              height: 180,
              width: 350,
              transition: '0.3s',
              bgcolor: '#2F3A4A', 
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              boxShadow: 6,
              justifyContent: 'center',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 10,
                backgroundColor: '#3a4a5f',
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
                },
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
                  paddingBottom: '8px',
                }}
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  {card.icon}
                </motion.div>
                <Typography
                  variant='h5'
                  component='div'
                  sx={{
                    marginTop: 3,
                    fontSize: '24px',
                    fontFamily: 'Poppins, sans-serif',
                    color: '#ffffff', // White text for readability
                    fontWeight: 600,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    color: '#ffffff', // White color for description text
                    fontSize: '14px',
                  }}
                >
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
