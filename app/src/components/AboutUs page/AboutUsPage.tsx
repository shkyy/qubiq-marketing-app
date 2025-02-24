import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from './Card/TeamMemberCard';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiSpringboot, SiExpress, SiMongodb } from 'react-icons/si';

const AboutUsPage = () => {
  return (
    <main className='relative flex flex-col py-40 text-center overflow-hidden'>
      <div className='absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-bl from-purple-300 via-indigo-200 to-pink-200 w-[85%] -z-5 h-[400px] rounded-sm'></div>

      <section className='relative px-6 lg:px-20  z-10 max-w-2xl mx-auto'>
        <motion.h1
          className='text-7xl font-bold text-slate-800'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          About Us
        </motion.h1>
        <motion.p 
          className='mt-6 max-w-xl text-slate-700 text-md'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.3 }}
        >
          We're a passionate team of student developers creating innovative software solutions as part of our university capstone project.
        </motion.p>
      </section>
      
      <section className='relative px-6 lg:px-20 z-10 max-w-5xl mt-40 mx-auto'>
        <motion.p className='text-[#4bbc43] text-xs tracking-widest'>OUR STORY</motion.p>
        <motion.h1 className='text-4xl font-semibold text-slate-700 tracking-tighter mt-3'>How we started</motion.h1>
        <p className='mt-5 text-slate-500 text-md leading-7.5'>
        As a group of five Software Engineering students from the University of Westminster (IIT), 
            we came together in 2024 to work on our software development group project module, SE-58, which we named QUBIQ. With a 
            shared drive to solve complex problems through technology, we combined our unique skills and 
            knowledge to create a platform that addresses the challenges of modern teamwork and productivity. <br/><br/>
            What started as a university project has grown into a passionate collaboration, and QUBIQ 
            stands as a testament to our dedication to building practical software solutions that make 
            a real difference in today’s world. 
        </p>
      </section>
      
      <section className='relative z-10 px-6 mb-10 lg:px-20 max-w-5xl mt-20 mx-auto'>
        <motion.p className='text-[#4bbc43] text-xs tracking-widest'>OUR MISSION</motion.p>
        <motion.h1 className='text-4xl font-semibold text-slate-700 tracking-tighter mt-3'>What Drives Us</motion.h1>
        <p className='mt-5 text-slate-500 text-md leading-7.5'>
        Our motivation is fueled by a passion for creating technology that makes a meaningful impact, 
            combined with the guidance and support we've received from our lecturers. QUBIQ was born from 
            our desire to tackle the challenges of modern work environments, particularly around team 
            collaboration and productivity. <br/><br/> After identifying gaps in existing tools, we came together 
            to design a platform that could improve efficiency and communication in remote and hybrid 
            settings. Throughout the development of this project, our lecturers’ expertise and mentorship 
            have been invaluable, encouraging us to push boundaries and refine our solutions. Their 
            guidance has been instrumental in helping us transform an idea into a real-world application 
            that we are truly proud of. 
        </p>
      </section>
      
      <section className="py-15 bg-gray-50">
        <motion.p className='text-[#4bbc43] text-xs tracking-widest'>OUR MEMBERS</motion.p>
        <motion.h1 className='text-4xl font-semibold text-slate-700 tracking-tighter mt-3 mb-5'>Meet Our TEAM</motion.h1>
          <TeamMemberCard />
      </section>

      <section className='w-full py-16 mt-1 relative bg-slate-800'>
        <div className='max-w-6xl mx-auto'>
          <motion.p className='text-[#4bbc43] text-xs tracking-widest text-center'>OUR EXPERTISE</motion.p>
          <motion.h2 className='text-4xl font-semibold text-white tracking-tighter mt-3 text-center mb-16'>Technologies We Use</motion.h2>

          <div className='flex flex-wrap justify-center gap-12'>
            {[
              { icon: <FaReact size={40} className='text-blue-400' />, name: "React.js" },
              { icon: <SiTypescript size={40} className='text-blue-500' />, name: "TypeScript" },
              { icon: <SiSpringboot size={40} className='text-green-500' />, name: "Spring Boot" },
              { icon: <SiExpress size={40} className='text-gray-400' />, name: "Express.js" },
              { icon: <SiMongodb size={40} className='text-green-400' />, name: "MongoDB" },
            ].map((tech, index) => (
              <div 
                key={index} 
                className='flex flex-col items-center text-white transition-transform duration-300 hover:scale-110 hover:text-[#aa81bc]'
              >
                {tech.icon}
                <p className='mt-2 text-sm'>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

    </main>
  );
};

export default AboutUsPage;
