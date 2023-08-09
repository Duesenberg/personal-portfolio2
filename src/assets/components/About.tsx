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
    <section className="about" id="about">
      <div className="about-wrapper">

        <section className="top">
          <h1 className="about-title">About Me</h1>

          <p className="text">
            I'm an Electrical Engineer and working as a Teaching Assistant in 
            the field. One of my hobbies I am really passionate about is coding,
            including Web Development and Machine Learning.
          </p>

          <p className="text">
            I have a broad understanding of HTML, CSS, Javascript and more. I enjoy
            working on personal projects, finding some coding buddies to work on a 
            project together, and contributing to open-source projects.
          </p>

          <p className="text">
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

        <section className="bottom" aria-label="list of skills">
          <div className="skills-carousel">
            <div 
              className="container" 
              onMouseDown={handleMouseDown} 
              onMouseMove={handleMouseMove}>
                {skills.map((skill) => {
                  return (
                    <button className="skill" key={uniqid()} id={skill.index}>
                      <img 
                        src={skill.iconURL} 
                          alt={skill.name} 
                          className="icon"
                          draggable='false'/>
                      <p className="text">{skill.index}. {skill.name}</p>
                    </button>
                  )
                })}
            </div>
          </div>
          <div className="shadow-overlay-left" />
          <div className="shadow-overlay-right" />
        </section>
      </div>
    </section>
  )
};