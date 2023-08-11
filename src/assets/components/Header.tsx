import logoIcon from '../icons/mariposa-logo.svg';
import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  handleClick: (params: React.MouseEvent<HTMLElement>) => void;
}

export default function Header(props: HeaderProps) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  // For toggling mobile menu when clicking on menu button
  const toggleMobileMenu = () => setMenuVisible(!menuVisible); 

  // Show menu when menuVisible is true
  React.useEffect(() => {
    const mobileMenu = document.querySelector('.mobile-menu') as HTMLDivElement;
    if (menuVisible) {
      mobileMenu.classList.add('w-1/2');
      mobileMenu.classList.remove('w-0');
    } else {
      mobileMenu.classList.remove('w-1/2');
      mobileMenu.classList.add('w-0');
    }
  }, [menuVisible]);

  // Logic for handling header appearance when scrolling down
  React.useEffect(() => {
    // Refs
    const headerBg = document.querySelector('.header-background') as HTMLDivElement;
    const headerText = document.querySelector('.header-text') as HTMLHeadingElement;


    if (scrolledDown) {
      // Change header background
      headerBg.classList.remove('h-0');
      headerBg.classList.add('h-28');
      // Turn header text white
      headerText.classList.remove('text-textPrimaryLight');
      headerText.classList.add('text-textPrimaryDark');
    } else {
      // Change header background
      headerBg.classList.add('h-0');
      headerBg.classList.remove('h-28');
      // Turn header text black
      headerText.classList.add('text-textPrimaryLight');
      headerText.classList.remove('text-textPrimaryDark');
    }
  }, [scrolledDown]);

  // Check if user has scrolled down
  window.onscroll = () => {
    // Refs
    const pageBody = document.querySelector('body') as HTMLBodyElement;

    // Check if user scrolled down past 50px
    if (pageBody?.getBoundingClientRect().top < -50) setScrolledDown(true);
    else setScrolledDown(false);
  }

  return(
    <header className="bg-transparent sticky top-0 left-0 h-28 flex justify-between items-center p-4">
      <img 
        src={logoIcon}
        className="w-14 h-auto" 
        aria-label="scroll to top"
        data-id="header"
        onClick={props.handleClick} />

      <h1 
        className="header-text font-primary text-2xl font-bold text-textPrimaryLight transition-all duration-1000 ease-in-out"
        >Pande Popovski</h1>

      <div className="hidden">
        <button 
          className="about" 
          data-id="about"
          onClick={props.handleClick}>about</button>
        <button 
          className="projects" 
          data-id="projects"
          onClick={props.handleClick}>projects</button>
        <button 
          className="contact" 
          data-id="contact"
          onClick={props.handleClick}>contact</button>
      </div>

      <MobileMenu
        menuVisible={menuVisible}
        scrolledDown={scrolledDown}
        handleClick={props.handleClick}
        setMenuVisible={setMenuVisible}
        toggleMobileMenu={toggleMobileMenu} />
      
    <span className='header-background absolute -z-10 top-0 left-0 w-full h-0 bg-backgroundContrastLight opacity-90 transition-all duration-1000 ease-in-out' />
    </header>
  )
};
