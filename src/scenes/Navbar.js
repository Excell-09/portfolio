import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage && 'text-yellow'
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}>
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreen = useMediaQuery('(min-width:768px)');

  return (
    <nav className={`${isTopOfPage && 'sticky bg-deep-blue'} top-0 z-40 w-full py-4`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <h6 className=' font-roboto text-3xl font-bold'>PR</h6>
        {isAboveMediumScreen ? (
          <div className='flex justify-between space-x-14 font-roboto text-sm font-semibold'>
            <Link page={'Home'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page={'Skills'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page={'Projects'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page={'Contact'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        ) : (
          <button
            className='rounded-full bg-red p-2'
            onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <img src='../assets/menu-icon.svg' alt='menu' />
          </button>
        )}
        {!isAboveMediumScreen && isMenuToggled && (
          <div className='fixed z-40 right-0 bottom-0 h-full bg-blue w-[250px] '>
            <div className='flex justify-end p-8'>
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src='../assets/close-icon.svg' alt='close' />
              </button>
            </div>
            <div className='flex flex-col space-y-8 ml-[33%] text-2xl text-deep-blue'>
              <Link page={'Home'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page={'Skills'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link
                page={'Projects'}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={'Contact'}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
