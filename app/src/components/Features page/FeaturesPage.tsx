import React from 'react'
import { motion } from 'framer-motion'
import img from '../../assets/04.svg'
import img2 from '../../assets/05.svg'
import img3 from '../../assets/06.svg'
import frame_1 from '../../../src/assets/Frame 1000004308.svg'
import frame_2 from '../../../src/assets/Frame 1000004309.svg'
import frame_3 from '../../../src/assets/Frame 1000004310.svg'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import BugReportIcon from '@mui/icons-material/BugReport';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import { Box, Grid2, Paper } from '@mui/material'

const FeaturesPage = () => {

  const featureCategories = [
    {
      title: "AI-Powered Development Hub",
      features: [
        {
          icon: <CodeRoundedIcon className="text-indigo-500" fontSize='large' />,
          title: "Intelligent Code Assistant",
          description: "Real-time coding suggestions that adapt to your team's style and standards, reducing development time."
        },
        {
          icon: <BugReportIcon className="text-purple-500" fontSize='large' />,
          title: "Proactive Debugging",
          description: "AI-powered tools that detect potential issues before they become problems, with automated solutions for common bugs."
        },
        {
          icon: <AssignmentTurnedInIcon className="text-blue-500" fontSize='large' />,
          title: "Continuous Quality Checks",
          description: "Automated code reviews ensure best practices are followed, maintaining consistent quality across all projects."
        }
      ]
    },
    {
      title: "Smart Project Management",
      features: [
        {
          icon: <EqualizerIcon className="text-pink-500" fontSize='large' />,
          title: "Custom AI Dashboards",
          description: "Personalized insights for each team member, with real-time productivity metrics and actionable recommendations."
        },
        {
          icon: <AnalyticsOutlinedIcon className="text-indigo-500" fontSize='large' />,
          title: "Intelligent Workload Balancing",
          description: "AI analyzes team capacity and automatically suggests task redistribution to prevent burnout and bottlenecks."
        },
        {
          icon: <Groups3OutlinedIcon className="text-purple-500" fontSize='large' />,
          title: "One-Click Reporting",
          description: "Generate comprehensive project reports instantly, with AI-powered insights and optimization recommendations."
        }
      ]
    }
  ];

  const gradientStyles = [
    "bg-gradient-to-br from-white to-purple-200",
    "bg-gradient-to-r from-white to-purple-200",
    "bg-gradient-to-bl from-white to-purple-200",
  ];

  return (
    <section className='py-15 overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col md:flex-row items-center justify-between text-center md:text-left px-6 md:px-28"
      >
        {/* Left Side - Text */}
        <div className="flex flex-col items-center md:items-start space-y-6 md:max-w-xl mt-12">
          <motion.h1
            className="text-3xl md:text-6xl font-medium text-slate-800"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            Streamlined Task & Project Management
          </motion.h1>
          <motion.p
            className="text-lg text-slate-700 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.3 }}
          >
            Create, track, and manage tasks effortlessly—stay on top of to-dos, pending work, and completed projects with real-time updates.
          </motion.p>
        </div>

        {/* Right Side - Image */}
        <motion.img
          src={img3}
          alt="bg-img"
          className="w-[70%] md:w-[55%] max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        />

        {/* Background Gradient Effect */}
        <div className="absolute top-30 left-1/2 transform -translate-x-10 bg-gradient-to-bl from-purple-300 via-indigo-200 to-pink-200 w-[80%] h-[800px] -z-10 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div className='mt-16 -mb-18 items-center justify-center w-full flex'>
        <Grid2 container spacing={2} alignItems='center' justifyContent='center' className='max-w-5xl'>
          {[
            { src: frame_1, alt: "frame1", animation: { x: -50, opacity: 0 } },
            { src: frame_2, alt: "frame2", animation: { y: 50, opacity: 0 } },
            { src: frame_3, alt: "frame3", animation: { x: 50, opacity: 0 } },
          ].map((item, index) => (
            <Grid2 key={index} size={{ xs: 8, sm: 6, md: 4 }}>
              <motion.div
                className='p-2'
                initial={item.animation}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <img src={item.src} alt={item.alt} className='w-full transition-all duration-300 hover:scale-102 z-10 hover:shadow-xl rounded-lg' />
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
        <div className="absolute top-250 right-1/2 transform -translate-x-20 bg-gradient-to-bl from-purple-300 via-indigo-200 to-pink-200 w-[60%] h-[900px] -z-10 rounded-full blur-3xl"></div>
      </motion.div>



      <div className='bg-slate-800 lg:flex-row w-full py-10 items-center justify-center'>
        <div className='mt-35 max-x-7xl mx-auto px-19 md:px-28 mb-24'>
          {featureCategories.map((category, Cindex) => (
            <Box key={Cindex} className='mb-24'>
              <motion.div
                className='text-center mb-15'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className='text-3xl md:text-4xl font-medium text-white mb-4'>{category.title}</h2>
              </motion.div>
              <Grid2 container spacing={4} justifyContent='center'>
                {category.features.map((feature, Findex) => (
                  <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={Findex}>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={`p-6 text-center rounded-xl shadow-2xl ${gradientStyles[Findex % gradientStyles.length]} hover:shadow-qupiqpurple transition-all duration-300`}>
                        <div className="mb-6">{feature.icon}</div>
                        <h3 className="text-xl font-medium text-slate-800 mb-4">{feature.title}</h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          ))}
        </div>
      </div>
      <div className='px-28 flex flex-col lg:flex-row w-full py-20'>
        <motion.div
          className='lg:w-2/3 py-25'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h3 className="text-5xl leading-tight font-medium max-w-2xl">
            Unified Messaging for Seamless Collaboration      </h3>
          <p className="py-6 font-extralight leading-7 max-w-xl">
            Stay connected with your team using Qubiq’s built-in messaging
            inbox—real-time chat, code discussions, and project updates,
            all in one place.
          </p>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='lg:w-3/5 relative flex flex-col'>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 rounded-full w-[80%] h-100 -z-5 -ml-10 blur-2xl"></div>
          <img src={img2} alt="Feature Illustration" className='w-full' />
          {/* <a href="https://storyset.com/business">Business illustrations by Storyset</a> */}
        </motion.div>
      </div>

      <div className='px-28 flex flex-col lg:flex-row w-full -mt-11'>
        <motion.div
          className='lg:w-3/5 relative flex flex-col'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img src={img} alt="Feature Illustration" className='w-full' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='lg:w-2/3 py-25 pl-28'>
           
          <h3 className="text-5xl leading-tight font-medium max-w-2xl">
          Smart Calendar for Efficient Planning     
          </h3>
          <p className="py-6 font-extralight leading-7 max-w-xl">
          Keep track of deadlines, meetings, and project milestones with Qubiq’s AI-powered calendar—stay organized and never miss a beat!
          </p>
          {/* <a href="https://storyset.com/business">Business illustrations by Storyset</a> */}
        </motion.div>
      </div>

    </section>
  )
}

export default FeaturesPage
