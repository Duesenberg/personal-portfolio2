import React from 'react';
import openMenu from "../icons/menu-svgrepo-com.svg";
import closeMenu from "../icons/close-svgrepo-com.svg";
import moonIcon from '../icons/moon-svgrepo-com.svg';
import sunIcon from '../icons/sun-svgrepo-com.svg';

interface Props {
  menuVisible: boolean;
  scrolledDown: boolean;
  toggleMobileMenu: () => void;
  handleClick: (params: React.MouseEvent<HTMLElement>) => void;
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkMode: () => void;
  darkMode: boolean;
}

export default function MobileMenu (props: Props) {
  const menuRef = React.useRef() as React.RefObject<HTMLDivElement>;

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
          className={"button-close w-10 h-auto transition-all duration-1000 ease-in-out " + (props.scrolledDown ? "invert" : "")} />  : 
        <img 
          src={ openMenu } alt="" aria-hidden
          className={"button-close w-10 h-auto transition-all duration-1000 ease-in-out " + (props.scrolledDown ? "invert" : "")} /> }
      </button>

      <nav 
        className={"mobile-menu absolute top-28 bottom-0 right-0 h-[calc(100vh-112px)] transition-all duration-1000 ease-in-out overflow-hidden flex flex-col justify-start " + (props.menuVisible ? "w-1/2" : "w-0")}>
        <h1
          className={'text-2xl font-bold text-textContrastLight text-end m-4 transition-all duration-1000 ' + (props.menuVisible ? "" : "opacity-0")}
          >Menu</h1>

        <ul className={"flex flex-col items-end py-4 transition-all duration-1000 " + (props.menuVisible ? "" : "opacity-0")}>
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
        <button 
          className="absolute top-4 left-4 cursor-pointer" 
          aria-label='toggle page theme'
          onClick={props.toggleDarkMode}>
            {props.darkMode ?
              <img src={sunIcon} alt="" aria-hidden
              className={'w-10 h-10 transition-all duration-1000 ' + (props.menuVisible ? "opacity-90 invert" : "opacity-0" )} /> :
              <img src={moonIcon} alt="" aria-hidden
                className={'w-10 h-10 transition-all duration-1000 ' + (props.menuVisible ? "opacity-90 invert" : "opacity-0" )} />}
        </button>
        <span className='absolute -z-10 w-full h-full bg-backgroundContrastLight opacity-90' />
      </nav>
    </div>
  )
}