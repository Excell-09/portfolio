import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ReactTypingEffect from 'react-typing-effect';
import SosialMediaIcon from '../components/SosialMediaIcon';

const Landing = ({ setSelectedPage }) => {
  return (
    <section id='home' className='flex justify-center items-center min-h-screen'>
      <div className='text-center'>
        <ReactTypingEffect
          className='text-5xl xs:text-7xl font-bold'
          eraseSpeed={100}
          typingDelay={300}
          eraseDelay={3000}
          speed={200}
          text={'Jun Choi'}
        />
        <p className='mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eligendi!
        </p>

        <AnchorLink
          href='#contact'
          className='bg-gradient-rainblue px-2 py-3 mt-5 font-semibold rounded-md text-deep-blue hover:bg-blue hover:text-white transition duration-150 cursor-pointer inline-block'
          onClick={() => setSelectedPage('contact')}>
          Contact Me
        </AnchorLink>
        <div className=' mt-5 flex justify-center items-center'>
          <SosialMediaIcon />
        </div>
      </div>
    </section>
  );
};

export default Landing;
