import React, { useState } from 'react';
import Header from './assets/components/Header';
import About from './assets/components/About';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  React.useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode])
  
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    switch (e.currentTarget.dataset.id) {
      case 'about':
        const aboutRef = document.getElementById('about');
        aboutRef?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        const projectsRef = document.getElementById('projects');
        projectsRef?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        const contactRef = document.getElementById('contact');
        contactRef?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'header':
        const headerRef = document.getElementById('root');
        headerRef?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }

  window.addEventListener('scroll', () => {
    // Get section refs
    const aboutRef = document.getElementById('about');
    const projectsRef = document.getElementById('projects');
    const contactRef = document.getElementById('contact');

    // Get header buttons refs
    const aboutButton = document.querySelector('button.about');
    const projectsButton = document.querySelector('button.projects');
    const contactButton = document.querySelector('button.contact');
    
    if(aboutRef !== null && (aboutRef.getBoundingClientRect().top < window.innerHeight)) {
      aboutButton?.classList.add('in-view');
      projectsButton?.classList.remove('in-view');
      contactButton?.classList.remove('in-view');
    }
    if(projectsRef !== null && (projectsRef.getBoundingClientRect().top +300 < window.innerHeight)) {
      aboutButton?.classList.remove('in-view');
      projectsButton?.classList.add('in-view');
      contactButton?.classList.remove('in-view');
    }
    if(contactRef !== null && (contactRef.getBoundingClientRect().top < window.innerHeight)) {
      aboutButton?.classList.remove('in-view');
      projectsButton?.classList.remove('in-view');
      contactButton?.classList.add('in-view');
    }
  })

  return (
    <div className="App bg-backgroundPrimaryLight dark:bg-backgroundPrimaryDark transition-colors duration-1000 ease-in-out">
      <Header 
        handleClick={ handleClick } 
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode} />

      <div className='main'>
        <About />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;