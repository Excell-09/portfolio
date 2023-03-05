import React from 'react';
import { motion } from 'framer-motion';

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} className='relative'>
      <div className={overlayStyles}>
        <p className='text-2xl font-playfair'>{title}</p>
        <p className='mt-7'>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt.</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id='projects'>
      <motion.div
        className='md:w-2/4 mx-auto text-center'
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}>
        <div className='mb-5'>
          <h2 className='text-3xl font-bold'>
            My <span>Projects</span>
          </h2>
        </div>
      </motion.div>
      <div className='flex justify-center'>
        <motion.div
          className='sm:grid sm:grid-cols-3 gap-1'
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}>
          <Project title={'Project 1'} />
          <Project title={'Project 2'} />
          <Project title={'Project 3'} />
          <Project title={'Project 4'} />
          <Project title={'Project 5'} />
          <Project title={'Project 6'} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
