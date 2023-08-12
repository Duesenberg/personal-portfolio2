import moonIcon from '../icons/moon-svgrepo-com.svg';
import sunIcon from '../icons/sun-svgrepo-com.svg';

interface Props {
  handleClick: (params: React.MouseEvent<HTMLElement>) => void;
  toggleDarkMode: () => void;
  darkMode: boolean;
  scrolledDown: boolean;
}

export default function desktopNav (props: Props) {
  return (
    <nav className="hidden md:block mr-20">
      <ul className="flex items-center">
        <li>
          <a 
            className={"about navLinkDesktop " + 
            (props.scrolledDown ? "text-textContrastLight after:bg-accentSecondaryDark" : "text-textPrimaryLight after:bg-accentSecondaryLight")} 
            data-id="about"
            aria-label='go to about'
            onClick={props.handleClick}>About</a>
        </li>
        <li>
          <a 
            className={"projects navLinkDesktop " + 
            (props.scrolledDown ? "text-textContrastLight after:bg-accentSecondaryDark" : "text-textPrimaryLight after:bg-accentSecondaryLight")} 
            data-id="projects"
            aria-label='go to projects'
            onClick={props.handleClick}>Projects</a>
        </li>
        <li>
          <a 
            className={"contact navLinkDesktop " + 
            (props.scrolledDown ? "text-textContrastLight after:bg-accentSecondaryDark" : "text-textPrimaryLight after:bg-accentSecondaryLight")}
            data-id="contact"
            aria-label='go to contact'
            onClick={props.handleClick}>Contact</a>
        </li>
      </ul>
      <button 
          className="absolute top-7 right-9 cursor-pointer" 
          aria-label='toggle page theme'
          onClick={props.toggleDarkMode}>
            {props.darkMode ?
              <img src={sunIcon} alt="switch to light theme" aria-hidden
              className={'w-9 h-9 transition-all duration-1000 ' + (props.scrolledDown ? " invert" : "" )} /> :
              <img src={moonIcon} alt="switch to dark theme" aria-hidden
                className={'w-9 h-9 transition-all duration-1000 ' + (props.scrolledDown ? " invert" : "" )} />}
        </button>
    </nav>
  )
}