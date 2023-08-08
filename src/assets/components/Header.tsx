interface HeaderProps {
  handleClick: (params: any) => void;
}

export default function Header(props: HeaderProps) {
  return(
    <header className="container">
      <div className="left-side">
        <button 
          className="logo-icon" 
          aria-label="scroll to top"
          data-id="header"
          onClick={ props.handleClick } />

        <h1 className="header">Mariposa</h1>
      </div>

      <div className="buttons">
        <button 
          className="about" 
          data-id="about"
          onClick={ props.handleClick }>about</button>
        <button 
          className="projects" 
          data-id="projects"
          onClick={ props.handleClick }>projects</button>
        <button 
          className="contact" 
          data-id="contact"
          onClick={ props.handleClick }>contact</button>
      </div>
    </header>
  )
};