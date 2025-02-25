import { motion } from 'framer-motion';
import SocialMediaCard from './Card/SocialMediaCard';
import ContactForm from './Form/ContactForm';

const ContactUsPage = () => {
  return (
    <main className='relative flex flex-col py-30 px-6 lg:px-20 text-center overflow-hidden'>
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-bl from-purple-300 via-indigo-200 to-pink-200 w-[85%] -z-5 h-[460px] rounded-sm'></div>

        <section className='relative z-10 max-w-2xl mx-auto'>
            <motion.h1 
                className='text-7xl font-bold text-slate-800'
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 5, x: 0 }}
                transition={{ duration: 1.2 }}
            >
                Contact Us
            </motion.h1>
            <motion.p 
                className='mt-6 max-w-xl text-slate-700 text-md'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 5, y: 0 }}
                transition={{ delay: 0.2, duration: 1.3 }}
            >
                We'd love to hear from you! Whether you have questions, feedback, or collaboration inquiries, let us know.
            </motion.p>
        </section>
        <SocialMediaCard/>

        <section className='relative z-10 max-w-xl mt-10 py-15 mx-auto'>
            <motion.p 
                className='text-[#4bbc43] text-xs tracking-widest'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 5, y: 0 }}
                transition={{ delay: 0.1, duration: 1.2 }}
            >
                CONTACT
            </motion.p>
            <motion.h1 
                className='text-4xl font-semibold text-slate-700 tracking-tighter mt-3'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 5, y: 0 }}
                transition={{ delay: 0.2, duration: 1.2 }}
            >
                Get in Touch With Us
            </motion.h1>
            <p className='mt-5 text-slate-500 text-md'>
                Have a question or need assistance? Our team is here to provide the support and information you need.
            </p>
          
      
        </section>

        <section className='w-full relatives'>
        <ContactForm/>

        </section>


    </main>
  )
}

export default ContactUsPage
