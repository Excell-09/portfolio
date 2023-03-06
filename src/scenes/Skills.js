import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id='skills' className='text-center h-screen flex justify-center items-center flex-col'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}>
        <p className='text-pink-500 font-semibold'>My | Skill | Set</p>
        <h3 className='text-4xl font-Roboto font-bold mt-2 mb-12'>Skills And Experience</h3>
      </motion.div>
      <div className='flex justify-center'>
        <motion.div
          className='grid grid-cols-3 xs:grid-cols-4 gap-7'
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}>
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
            <AiFillHtml5 className='text-[4rem] xs:text-[6rem] animate-bounce delay-150' />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
            <FaCss3 className='text-[4rem] xs:text-[6rem] animate-bounce' />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
            <SiTailwindcss className='text-[4rem] xs:text-[6rem] animate-bounce' />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
            <SiJavascript className='text-[4rem] xs:text-[6rem] animate-bounce' />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
            <FaReact className='text-[4rem] xs:text-[6rem] animate-bounce' />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
            <FaNodeJs className='text-[4rem] xs:text-[6rem] animate-bounce ' />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
            <SiMongodb className='text-[4rem] xs:text-[6rem] animate-bounce' />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
            <SiExpress className='text-[4rem] xs:text-[6rem] animate-bounce' />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
            <SiTypescript className='text-[4rem] xs:text-[6rem] xs:col-span-4 mx-auto animate-bounce' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
