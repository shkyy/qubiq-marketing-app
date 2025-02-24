import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { motion } from 'framer-motion';

interface Card {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  link?: string;
}

const cardColor = '#2C2F33';
const hoverColor = '#23272A';

const cards: Card[] = [
  {
    id: 1,
    title: 'LinkedIn',
    description: 'Connect with us',
    icon: <LinkedInIcon fontSize='large' sx={{ color: '#ffffff' }} />,
    link: 'https://www.linkedin.com/company/qubiq-official/',
  },
  {
    id: 2,
    title: 'Email',
    description: 'qubiq.contact@gmail.com',
    icon: <MailOutlineIcon fontSize='large' sx={{ color: '#ffffff' }} />,
  },
  {
    id: 3,
    title: 'Instagram',
    description: 'Follow us',
    icon: <InstagramIcon fontSize='large' sx={{ color: '#ffffff' }} />,
    link: 'https://www.instagram.com/qubiq.co/',
  },
];

const SocialMediaCard: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardLink = (link?: string) => {
    if (!link) return;
    window.open(link, '_blank');
  };

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: card.id * 0.2,
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
          whileHover={{ y: -10 }}
          onHoverStart={() => setHoveredCard(card.id)}
          onHoverEnd={() => setHoveredCard(null)}
        >
          <Card
            sx={{
              height: { xs: 160, md: 180 },
              width: 280,
              transition: 'all 0.4s ease',
              backgroundColor: cardColor,
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              boxShadow:
                hoveredCard === card.id
                  ? `0 8px 20px rgba(0,0,0,0.2)`
                  : `0 4px 10px rgba(0,0,0,0.15)`,
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
              '&:hover': {
                backgroundColor: hoverColor,
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
                  backgroundColor: 'transparent',
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
                  paddingBottom: '8px !important',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    padding: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {card.icon}
                </motion.div>
                <Typography
                  variant='h5'
                  component='div'
                  sx={{
                    marginTop: 2,
                    fontSize: { xs: '18px', md: '22px' },
                    fontFamily: '"Poppins", sans-serif',
                    color: '#ffffff',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: { xs: '12px', md: '14px' },
                    fontWeight: 400,
                    marginTop: 0.5,
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
  );
};

export default SocialMediaCard;
