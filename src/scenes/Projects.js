import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, link }) => {
  const projectTitle = title.toLowerCase();

  return (
    <motion.div variants={projectVariant} className='relative'>
      <div
        className={`absolute h-full w-full opacity-80 lg:opacity-0 lg:hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-5 lg:p-8 text-deep-blue`}>
        <p className='text-2xl font-playfair'>{title}</p>
        <p className='mt-3'>{subtitle}</p>
        <a
          className='mt-3 underline text-pink-600 italic hover:opacity-80 active:opacity-90 cursor-pointer'
          target={'_blank'}
          rel='noreferrer'
          href={link}>
          See More
        </a>
      </div>
      <img
        src={`../assets/${projectTitle}.png`}
        className='aspect-square object-cover object-top'
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id='projects' className='py-10'>
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
          className='grid grid-cols-1 sm:grid-cols-3 gap-1'
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={container}>
          <Project
            title={'Findjob'}
            subtitle={'project ini adalah Web yang digunakan untuk mencari lowongan kerja'}
            link='https://smiling-gabardine-foal.cyclic.app'
          />
          <Project
            title={'Amazon'}
            subtitle={'project ini adalah web Clone'}
            link='http://amazon-clone-excell-09.vercel.app'
          />
          <Project
            title={'Twitter'}
            subtitle={'project ini adalah web Clone'}
            link='https://twitter-clone-pink-ten.vercel.app'
          />
          <Project
            title={'Shopping'}
            subtitle={'project ini adalah web untuk membeli barang'}
            link='https://shopping-three-xi.vercel.app'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
