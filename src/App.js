import React, { useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import Skills from './scenes/Skills';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import { motion } from 'framer-motion';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');

  return (
    <div className='app bg-deep-blue'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      {isAboveMediumScreen && (
        <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      )}
      <main className='w-5/6 mx-auto'>
        <motion.div className='mb-24' onViewportEnter={() => setSelectedPage('home')}>
          <Landing />
        </motion.div>
        <motion.div className='mb-24' onViewportEnter={() => setSelectedPage('skills')}>
          <Skills />
        </motion.div>
        <motion.div className='mb-24' onViewportEnter={() => setSelectedPage('projects')}>
          <Projects />
        </motion.div>
        <motion.div className='mb-24' onViewportEnter={() => setSelectedPage('contact')}>
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
