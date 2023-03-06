import React from 'react';
import { AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

const SosialMediaIcon = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      className='flex justify-center md:justify-start space-x-5'>
      <motion.a
        variants={{
          hidden: { opacity: 0, y: 50, scale: 0 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        className='hover:opacity-50 transition duration-500'
        href='https://github.com/Excell-09'
        target={'_blank'}
        rel='noreferrer'>
        <AiOutlineGithub size={'2.5rem'} />
      </motion.a>
      <motion.a
        variants={{
          hidden: { opacity: 0, y: 50, scale: 0 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/jun-choi-46047123b/'
        target={'_blank'}
        rel='noreferrer'>
        <AiOutlineLinkedin size={'2.5rem'} />
      </motion.a>
      <motion.a
        variants={{
          hidden: { opacity: 0, y: 50, scale: 0 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        className='hover:opacity-50 transition duration-500'
        href='https://api.whatsapp.com/send?phone=6289602391929'
        target={'_blank'}
        rel='noreferrer'>
        <AiOutlineWhatsApp size={'2.5rem'} />
      </motion.a>
    </motion.div>
  );
};

export default SosialMediaIcon;
