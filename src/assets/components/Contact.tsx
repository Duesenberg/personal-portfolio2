import githubIcon from '../icons/github.svg';
import linkediIcon from '../icons/linkedin.svg';
import InputForm from './InputForm';

export default function Contact() {
  return(
    <section className="contactSection" aria-label="contact" id='contact'>
      <div className="flex flex-col items-center mb-8 p-4">
        <h1 className="headerText">Social</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          <a 
            className="socialLink" 
            href='https://github.com/Duesenberg' 
            target="_blank"
            rel="noreferrer">
              <img className="socialIcon" src={githubIcon} alt="github" />
              <p className="socialLinkText">Github</p>
          </a>

          <a 
            className="socialLink" 
            href='https://www.linkedin.com/in/pande-popovski-96b526230/' 
            target="_blank"
            rel="noreferrer">
              <img className="socialIcon" src={linkediIcon} alt="linked in" />
              <p className="socialLinkText">LinkedIn</p>
          </a>
        </div>
      </div>

      <div className="contactMe">
        <InputForm />
      </div>
    </section>
  )
};