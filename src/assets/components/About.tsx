import { useState } from "react"
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
import uniqid from 'uniqid';

export default function About() {
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [initialMousePos, setInitialMousePos] = useState(0);
  const [currentMousePos, setCurrentMousePos] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const skills = [
    {
      index: '1',
      name: 'HTML',
      iconURL: htmlIcon
    },
    {
      index: '2',
      name: 'CSS',
      iconURL: cssIcon
    },
    {
      index: '3',
      name: 'JAVASCRIPT',
      iconURL: jsIcon
    },
    {
      index: '4',
      name: 'REACT',
      iconURL: reactIcon
    },
    {
      index: '5',
      name: 'SASS',
      iconURL: sassIcon
    },
    {
      index: '6',
      name: 'GIT',
      iconURL: gitIcon
    },
    {
      index: '7',
      name: 'NPM',
      iconURL: npmIcon
    },
    {
      index: '8',
      name: 'WEBPACK',
      iconURL: webpackIcon
    },
    {
      index: '9',
      name: 'JEST',
      iconURL: jestIcon
    },
  ];

  //When mouse is clicked down on the carousel
  const handleMouseDown = (e: any) => {
    const carouselParentRef = document.querySelector('.skills-carousel') as HTMLElement;
    setMouseIsDown(true);
    setInitialMousePos(e.clientX);
    setCurrentMousePos(e.clientX);
    setScrollLeft(carouselParentRef.scrollLeft);
  }

  const handleMouseMove = (e: any) => {
    if (mouseIsDown) {
      setCurrentMousePos(e.clientX);
      const carouselParentRef = document.querySelector('.skills-carousel') as HTMLElement;
      carouselParentRef.scrollLeft = scrollLeft - (currentMousePos - initialMousePos);
    }
  }
  
  window.addEventListener('mouseup', () => {
    setMouseIsDown(false);
    setInitialMousePos(0);
    setCurrentMousePos(0);
  });

  return(
    <section 
      className="about relative z-0 flex flex-col" 
      id="about">
        {/* Laptop graphic */}
        <img 
          className="w-1/2 self-end mx-6 mt-16 max-w-sm"
          src={laptopIcon} 
          alt="image of a laptop" />

        {/* Description about me */}
        <section className="flex flex-col" aria-label="about me">
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
          className="absolute w-full overflow-hidden flex justify-between">
            <div 
              className="mx-10 my-2 w-full max-h-96 gap-6 flex flex-row justify-between content-around flex-wrap flex-1">
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