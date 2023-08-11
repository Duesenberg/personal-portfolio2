import React from 'react';
import openMenu from "../icons/menu-svgrepo-com.svg";
import closeMenu from "../icons/close-svgrepo-com.svg";
import moonIcon from '../icons/moon-svgrepo-com.svg';

interface Props {
  menuVisible: boolean;
  scrolledDown: boolean;
  toggleMobileMenu: () => void;
  handleClick: (params: React.MouseEvent<HTMLElement>) => void;
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu (props: Props) {
  const menuRef = React.useRef() as React.RefObject<HTMLDivElement>;

  // Invert button color when user scrolls down
  React.useEffect(() => {
    // Refs
    const openButton = document.querySelector('.button-open');
    const closeButton = document.querySelector('.button-close');

    if (props.scrolledDown) {
      // Invert button color
      openButton?.classList.add('invert');
      closeButton?.classList.add('invert');
    } else {
      // Remove invert from button color
      openButton?.classList.remove('invert');
      closeButton?.classList.remove('invert');
    }
  }, [props.scrolledDown]);

  // This is written to prevent the buttons from changing back after
  // showing/hiding menu when scrolled down (because it re-renders them)
  React.useEffect(() => {
    // Refs
    const openButton = document.querySelector('.button-open');
    const closeButton = document.querySelector('.button-close');
    if (props.scrolledDown) {
      openButton?.classList.add('invert');
      closeButton?.classList.add('invert');
    }
  }, [props.menuVisible]);

  // For hiding menu when user clicks anywhere outside menu
  React.useEffect(() => {
    const handler = (e: any) => {
      if(!menuRef.current?.contains(e.target)) {
        props.setMenuVisible(false);
      } 
    }

    document.addEventListener('mousedown', handler);

    return(() => {
      document.removeEventListener('mousedown', handler);
    })
  });

  return(
    <div ref={menuRef}>
      <button onMouseDown={props.toggleMobileMenu} aria-label='menu button'>
        { props.menuVisible ? 
        <img 
          src={ closeMenu } alt="" aria-hidden
          className="button-close w-10 h-auto transition-all duration-1000 ease-in-out" />  : 
        <img 
          src={ openMenu } alt="" aria-hidden
          className="button-open w-10 h-auto transition-all duration-1000 ease-in-out" /> }
      </button>

      <nav 
        className="mobile-menu absolute top-28 bottom-0 right-0 w-0 h-[calc(100vh-112px)] transition-all duration-1000 ease-in-out overflow-hidden flex flex-col justify-start">
        <h1
          className='text-2xl font-bold text-textContrastLight text-end m-4'
          >Menu</h1>

        <ul className="flex flex-col items-end py-4">
          <a 
            className="navlink" 
            data-id="about"
            onClick={ props.handleClick }>About</a>
          <a 
            className="navlink"
            data-id="projects" 
            onClick={ props.handleClick }>Projects</a>
          <a 
            className="navlink"
            data-id="contact"
            onClick={ props.handleClick }>Contact</a>
        </ul>
        <button className="absolute top-4 left-4 cursor-pointer" aria-label='toggle page theme'>
            <img src={moonIcon} alt="" aria-hidden
              className='w-10 h-10 invert' />
        </button>
        <span className='absolute -z-10 w-full h-full bg-backgroundContrastLight opacity-90' />
      </nav>
    </div>
  )
}