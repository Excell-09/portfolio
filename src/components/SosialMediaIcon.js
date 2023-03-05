import React from 'react'
import { AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineGithub } from 'react-icons/ai';

const SosialMediaIcon = () => {
  return (
    <div className='flex justify-center md:justify-start space-x-5'>
      <a className='hover:opacity-50 transition duration-500' href='https://github.com/Excell-09' target={'_blank'} rel='noreferrer'>
            <AiOutlineGithub
              size={'2.5rem'}
              
            />
          </a>
          <a className='hover:opacity-50 transition duration-500' href='https://www.linkedin.com/in/jun-choi-46047123b/' target={'_blank'} rel='noreferrer'>
            <AiOutlineLinkedin
              size={'2.5rem'}
             
            />
          </a>
          <a className='hover:opacity-50 transition duration-500' href='https://api.whatsapp.com/send?phone=6289602391929' target={'_blank'} rel='noreferrer'>
            <AiOutlineWhatsApp
              size={'2.5rem'}
              
            />
          </a>
      
    </div>
  )
}

export default SosialMediaIcon