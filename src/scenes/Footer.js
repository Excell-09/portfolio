import React from 'react';
import SosialMediaIcon from '../components/SosialMediaIcon';

const Footer = () => {
  const date = new Date(Date.now()).getFullYear();
  return (
    <div className='bg-pink-500 px-5 py-5 flex flex-col justify-center items-center text-center space-y-3 z-50'>
      <div>
        <SosialMediaIcon />
      </div>
      <div>
        <h6 className='text-xl font-bold'>Jun CHoi</h6>
        <p className='text-md font-semibold'>{date}</p>
      </div>
    </div>
  );
};

export default Footer;
