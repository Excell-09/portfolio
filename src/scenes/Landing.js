import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ReactTypingEffect from 'react-typing-effect';
import SosialMediaIcon from '../components/SosialMediaIcon';
import { motion } from 'framer-motion';

const Landing = ({ setSelectedPage }) => {
  return (
    <section id='home' className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        <ReactTypingEffect
          className='text-5xl xs:text-7xl font-bold'
          eraseSpeed={100}
          typingDelay={300}
          eraseDelay={3000}
          speed={200}
          text={'Jun Choi'}
        />
        <motion.p
          className='mt-5'
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eligendi!
        </motion.p>

        <motion.div
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <AnchorLink
            href='#contact'
            className='bg-gradient-rainblue px-2 py-3 mt-5 font-semibold rounded-md text-deep-blue hover:bg-blue hover:text-white transition duration-150 cursor-pointer inline-block'
            onClick={() => setSelectedPage('contact')}>
            Contact Me
          </AnchorLink>
        </motion.div>
        <div className=' mt-5 flex justify-center items-center'>
          <SosialMediaIcon />
        </div>
      </div>
    </section>
  );
};

export default Landing;
