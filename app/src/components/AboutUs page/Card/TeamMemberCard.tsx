import React from "react";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import manula from "../../../assets/Manula.jpg";
import ashini from "../../../assets/Ashini.jpeg";
import navindu from "../../../assets/Navindu.jpeg";
import jaith from '../../../assets/jaith.jpeg'

interface SocialLinks {
  github: string;
  linkedin: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  socials: SocialLinks;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Navindu Fernando",
    role: "Team Lead & Full Stack Developer",
    description: "Leads the team while contributing to both frontend and backend development, integrating machine learning features.",
    image: navindu,
    socials: {
      github: "https://github.com/navindufernando",
      linkedin: "https://www.linkedin.com/in/navindu-fernando-323688293/",
    },
  },
  {
    id: 2,
    name: "Inuthi Shakya",
    role: "Full Stack Developer & Technical guide",
    description: "Guides the technical direction and contributes to both frontend and backend development, focusing on system design.",
    image: "/api/placeholder/300/300",
    socials: {
      github: "https://github.com/shkyy",
      linkedin: "https://www.linkedin.com/in/inuthi-shakya/",
    },
  },
  {
    id: 3,
    name: "Jaith Rajapaksha",
    role: "Social Media Handling & Developer",
    description: "Handles marketing and social media while actively developing frontend and backend components.",
    image: jaith,
    socials: {
      github: "https://github.com/JaithRajapaksha",
      linkedin: "https://www.linkedin.com/in/jaith-rajapaksha-91aa77294/",
    },
  },
  {
    id: 4,
    name: "Ashini Hewagamage",
    role: "Full stack Developer",
    description: "Focuses on frontend development and assists with backend tasks to ensure smooth integration.",
    image: ashini,
    socials: {
      github: "https://github.com/aShini5049",
      linkedin: "https://www.linkedin.com/in/ashini-hewagamage-532798293/",
    },
  },
  {
    id: 5,
    name: "Manula Jayabodhi",
    role: "ML & Full Stack Developer",
    description: "Develops machine learning models and contributes to frontend and backend implementation, integrating AI features.",
    image: manula,
    socials: {
      github: "https://github.com/Manula-J",
      linkedin: "https://www.linkedin.com/in/manula-jayabodhi-0447a5256/",
    },
  }   
];

const TeamMemberCard: React.FC = () => {
  return (
    <Box 
      sx={{ 
        width: '100%',
        overflowX: 'auto',
        py: 2,
        px: 2,
        '&::-webkit-scrollbar': {
          display: 'none'
        },
      }}
    >
      <Box 
        sx={{ 
          display: 'flex',
          minWidth: 'max-content',
          gap: 2,
          justifyContent: 'center'
        }}
      >
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            sx={{
              width: 250,
              height: 396,
              display: 'flex',
              boxShadow: 8,
              flexDirection: 'column',
              borderRadius: 2,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: (theme) => `0 8px 24px ${theme.palette.primary.light}40`
              }
            }}
          >
            <CardMedia
              component="img"
              sx={{ 
                height: 200,
                objectFit: 'cover'
              }}
              image={member.image}
              alt={member.name}
            />
            <CardContent sx={{ flexGrow: 1, textAlign: 'center', py: 1, px: 1.5 }}>
              <Typography variant="h6" component="h3" sx={{ fontSize: '0.95rem', fontWeight: 600, mb: 0.5, fontFamily: 'Poppins, sans-serif', }}>
                {member.name}
              </Typography>
              <Typography 
                variant="subtitle2" 
                color="primary" 
                sx={{ fontSize: '0.8rem', mb: 0.5, fontFamily: 'Poppins, sans-serif', }}
              >
                {member.role}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  overflow: 'hidden',
                  fontSize: '0.75rem',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {member.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', p: 0.5 }}>
              <IconButton 
                href={member.socials.github}
                target="_blank"
                size="small"
                color="inherit"
                sx={{ '&:hover': { color: '#2DBA4E' } }}
              >
                <GitHub fontSize='small' />
              </IconButton>
              <IconButton 
                href={member.socials.linkedin}
                target="_blank"
                size="small"
                color="inherit"
                sx={{ '&:hover': { color: '#0077B5' } }}
              >
                <LinkedIn fontSize='small' />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TeamMemberCard;
