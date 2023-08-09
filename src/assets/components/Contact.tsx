import githubIcon from '../icons/github.svg';
import linkediIcon from '../icons/linkedin.svg';

export default function Contact() {
  return(
    <section className="contact" aria-label="contact" id='contact'>
      <div className="contact-wrapper">
        <h1 className="contact-title">Contact</h1>

        <a 
          className="button" 
          href='https://github.com/Duesenberg' 
          target="_blank"
          rel="noreferrer">
            <img className="icon" src={githubIcon} alt="github" />
            <p className="text">Github</p>
        </a>

        <a 
          className="button" 
          href='https://www.linkedin.com/in/pande-popovski-96b526230/' 
          target="_blank"
          rel="noreferrer">
            <img className="icon" src={linkediIcon} alt="linked in" />
            <p className="text">LinkedIn</p>
        </a>
      </div>
    </section>
  )
};