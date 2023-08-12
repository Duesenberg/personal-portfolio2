import logoIcon from '../icons/mariposa-logo.svg';
import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import DesktopNav from './DesktopNav';

interface HeaderProps {
  handleClick: (params: React.MouseEvent<HTMLElement>) => void;
  toggleDarkMode: () => void;
  darkMode: boolean;
}

export default function Header(props: HeaderProps) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  // For toggling mobile menu when clicking on menu button
  const toggleMobileMenu = () => setMenuVisible(!menuVisible); 

  // Check if user has scrolled down & change state if so
  window.onscroll = () => {
    // Refs
    const pageBody = document.querySelector('body') as HTMLBodyElement;

    // Check if user scrolled down past 50px
    if (pageBody?.getBoundingClientRect().top < -50) setScrolledDown(true);
    else setScrolledDown(false);
  }

  return(
    <header className="bg-transparent sticky top-0 left-0 h-24 flex justify-between items-center p-4">
      <img 
        src={logoIcon}
        className="w-14 h-auto cursor-pointer" 
        aria-label="scroll to top"
        data-id="header"
        onClick={props.handleClick} />

      <h1 
        className={"header-text font-primary text-2xl font-bold transition-all duration-1000 ease-in-out " + (scrolledDown ? "text-textPrimaryDark" : "text-textPrimaryLight")}
        >Pande Popovski</h1>

      <DesktopNav
        handleClick={props.handleClick}
        toggleDarkMode={props.toggleDarkMode}
        darkMode={props.darkMode}
        scrolledDown={scrolledDown} />

      <MobileMenu
        menuVisible={menuVisible}
        scrolledDown={scrolledDown}
        handleClick={props.handleClick}
        setMenuVisible={setMenuVisible}
        toggleMobileMenu={toggleMobileMenu}
        toggleDarkMode={props.toggleDarkMode}
        darkMode={props.darkMode} />
      
    <span className={'header-background absolute -z-10 top-0 left-0 w-full h-0 bg-backgroundContrastLight opacity-90 transition-all duration-1000 ease-in-out ' +(scrolledDown ? "h-24" : "h-0")} />
    </header>
  )
};
