import htmlIcon from '../icons/language-html5.svg';
import cssIcon from '../icons/language-css3.svg';
import jsIcon from '../icons/language-javascript.svg';
import jestIcon from '../icons/jest.svg';
import npmIcon from '../icons/npm.svg';
import sassIcon from '../icons/sass.svg';
import reactIcon from '../icons/react.svg';
import webpackIcon from '../icons/webpack.svg';
import gitIcon from '../icons/git.svg';
import laptopIcon from '../icons/laptop-svgrepo-com.svg';
import tailwindIcon from '../icons/tailwind-css-svgrepo-com.svg';
import tsIcon from '../icons/language-typescript.svg';
import viteIcon from '../icons/vite.svg';
import uniqid from 'uniqid';

export default function About() {
  const skills = [
    { index: '1', name: 'HTML', iconURL: htmlIcon },
    { index: '2', name: 'CSS', iconURL: cssIcon },
    { index: '3', name: 'JAVASCRIPT', iconURL: jsIcon },
    { index: '3', name: 'TYPESCRIPT', iconURL: tsIcon },
    { index: '4', name: 'REACT', iconURL: reactIcon },
    { index: '5', name: 'SASS', iconURL: sassIcon },
    { index: '6', name: 'TAILWIND', iconURL: tailwindIcon },
    { index: '7', name: 'GIT', iconURL: gitIcon },
    { index: '8', name: 'NPM', iconURL: npmIcon },
    { index: '9', name: 'WEBPACK', iconURL: webpackIcon },
    { index: '10', name: 'VITE', iconURL: viteIcon },
    { index: '11', name: 'JEST', iconURL: jestIcon },
  ];

  return(
    <section 
      className="about relative z-0 flex flex-col md:flex-row-reverse" 
      id="about">
        {/* Laptop graphic */}
        <img 
          className="w-1/2 self-end mx-6 mt-16 max-w-sm md:self-start md:mt-0"
          src={laptopIcon} 
          alt="image of a laptop" />

        {/* Description about me */}
        <section className="flex flex-col md:self-center mb-8" aria-label="about me">
          <h1 className="headerText">About Me</h1>

          <p className="text">
            I'm an Electrical Engineer with a passsion for all things programming related.
            I'm especially interested in Web Development and Machine Learning.
          </p>

          <p className="textRight">
            I always strive to create something unique that stands out and makes
            an impact.
          </p>

          <p className="text">
            I'm constantly looking to stay up to date with the popular 
            technologies, utilizing the latest frameworks and employing the best
            practices in web development. I also use my free time to learn new
            skills.
          </p>
        </section>

        {/* List of skills */}
        <section 
          aria-label="list of skills"
          className="absolute w-full overflow-hidden flex justify-between md:max-w-sm md:mx-6 md:my-16">
            <div 
              className="mx-10 my-2 w-full max-h-96 gap-4 md:gap-0 flex flex-row justify-around content-around flex-wrap flex-1">
                {skills.map((skill) => {
                  return (
                    <img 
                      key={uniqid()} 
                      id={skill.index}
                      src={skill.iconURL} 
                      alt={skill.name} 
                      className="skillIcon"
                      draggable='false'/>
                  )
                })}
            </div>
        </section>
    </section>
  )
};