import socialMediaClone from '../images/social-media-clone.png';
import battleShipGame from '../images/battleship-game.png';
import taggingGame from '../images/tagging-game.png';
import onlineShop from '../images/online-shop.png';
import memoryCardGame from '../images/memory-card-game.png';
import cvGenerator from '../images/cv-generator.png';
import toDoList from '../images/todo-list.png';

export default function Projects() {
  
  return(
    <section aria-label="projects" id='projects'>
      <h1 className="headerText">Projects</h1>
      
      <div 
        className="flex flex-col md:flex-row md:justify-center md:flex-wrap gap-20 items-center">

        <section className="project" aria-label="social media clone">
          <img 
            src={socialMediaClone}
            alt="preview photo of the project"
            className="projectPhoto" />

          <div className="projectInfo">
            <h2 className="projectTitle">
              Social Media Clone
            </h2>

            <div className="infoWrapper">
              <div>
                <p className='projectText'>
                  An imitation of a social media platform. 
                  Built as a web app, works both on desktop and mobile. </p>
                <p className='projectText'>
                  You can create an account, start chats with registered 
                  users and send them texts and photos, make text or photo 
                  posts which everyone can see, and also check your profile 
                  to see what you have posted.</p>
              </div>

              <div className="toolsUsed">
                <p>Built using HTML, CSS, React, React-Router and Firebase.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              className="button"
              href='https://social-media-clone-a65ab.web.app/'
              target='_blank'
              rel='noreferrer'>Live</a>
            <a 
              className="button"
              href='https://github.com/Duesenberg/social-media-clone'
              target='_blank'
              rel='noreferrer'>Github</a>
          </div>
        </section>

        <section className="project" aria-label="battleship game">
          <img 
            src={battleShipGame}
            alt="preview photo of the project"
            className="projectPhoto" />

          <div className="projectInfo">
            <h2 className="projectTitle">
              Battleship Game
            </h2>

            <div className="infoWrapper">
              <div>
                <p className='projectText'>
                  My own version of the Battleship board game. Play against 
                  a computer on a 10x10 board, each player with five different 
                  ships on their board. </p>
                <p className='projectText'>
                  Took the time to create the graphic assets as well for this project.
                  The application is mobile responsive. The computer has
                  ten different ship layouts. It chooses a random square when 
                  attacking, which I'm planning to change.</p>
              </div>

              <div className="toolsUsed">
                <p>Built using HTML, CSS, Javascript, Jest.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              className="button"
              href='https://duesenberg.github.io/battleship-game/'
              target='_blank'
              rel='noreferrer'>Live</a>
            <a 
              className="button"
              href='https://github.com/Duesenberg/battleship-game'
              target='_blank'
              rel='noreferrer'>Github</a>
          </div>
        </section>

        <section className="project" aria-label="photo tagging game">
          <img 
            src={taggingGame}
            alt="preview photo of the project"
            className="projectPhoto" />

          <div className="projectInfo">
            <h2 className="projectTitle">
              Photo Tagging Game
            </h2>

            <div className="infoWrapper">
              <div>
                <p className='projectText'>
                  A browser game where you need to find five different characters
                  on the photo, similar to the popular "Where's Waldo" game.
                  At the end, you can submit the time it took you to find all
                  the characters and it will show on the leaderboard. </p>
                <p className='projectText'>
                  Because of the large size of the photo, I thought the application 
                  wouldn't really work for mobile so I didn't make it mobile responsive.</p>
              </div>

              <div className="toolsUsed">
                <p>Built using HTML, CSS, React, Firebase.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              className="button"
              href='https://photo-tagging-app-b3302.web.app/'
              target='_blank'
              rel='noreferrer'>Live</a>
            <a 
              className="button"
              href='https://github.com/Duesenberg/photo-tagging-app'
              target='_blank'
              rel='noreferrer'>Github</a>
          </div>
        </section>

        <section className="project" aria-label="online shop mock-up">
          <img 
            src={onlineShop}
            alt="preview photo of the project"
            className="projectPhoto" />

          <div className="projectInfo">
            <h2 className="projectTitle">
              Online Shop Mock-up
            </h2>

            <div className="infoWrapper">
              <div>
                <p className='projectText'>
                  A mock-up website for an online store. It consists
                  of four sections: a home, about us, store page and a shopping
                  cart page to which you can add or remove items from. The total
                  price of all items is calculated in the checkout section of
                  the cart page. </p>
                <p className='projectText'>
                  Responsive for multiple screen sizes
                  including mobile devices. Used Material UI library for
                  several components in this project.</p>
              </div>

              <div className="toolsUsed">
                <p>Built using HTML, CSS, React, Jest.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              className="button"
              href='https://duesenberg.github.io/shopping-cart/'
              target='_blank'
              rel='noreferrer'>Live</a>
            <a 
              className="button"
              href='https://github.com/Duesenberg/shopping-cart'
              target='_blank'
              rel='noreferrer'>Github</a>
          </div>
        </section>

        <section className="project" aria-label="memory card game">
          <img 
            src={memoryCardGame}
            alt="preview photo of the project"
            className="projectPhoto" />

          <div className="projectInfo">
            <h2 className="projectTitle">
              Memory Card Game
            </h2>

            <div className="infoWrapper">
              <div>
                <p className='projectText'>
                  A game where the goal is to click on each card once. After
                  each click, the cards are shuffled. If you click on the same
                  card twice, the game is over. There are three difficulties,
                  where you need to memorize larger numbers as the difficulty
                  increases. </p>
                <p className='projectText'>
                  I've used the Material UI library for all the components in this
                  project. The application is desktop, tablet and mobile responsive.</p>
              </div>

              <div className="toolsUsed">
                <p>Built using HTML, CSS, React.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              className="button"
              href='https://duesenberg.github.io/memory-card-game/'
              target='_blank'
              rel='noreferrer'>Live</a>
            <a 
              className="button"
              href='https://github.com/Duesenberg/memory-card-game'
              target='_blank'
              rel='noreferrer'>Github</a>
          </div>
        </section>

        <section className="project" aria-label="cv application generator">
          <img 
            src={cvGenerator}
            alt="preview photo of the project"
            className="projectPhoto" />

          <div className="projectInfo">
            <h2 className="projectTitle">
              CV Application Generator
            </h2>

            <div className="infoWrapper">
              <div>
                <p className='projectText'>
                  An application for generating resumes. Allows the user to enter
                  their personal information, education, work experience, skills
                  and projects they have worked on. </p>
                <p className='projectText'>
                  Any created applications can be saved to the browser's local 
                  storage and loaded after the page reloads. 
                  The application can be printed as a PDF document.</p>
              </div>

              <div className="toolsUsed">
                <p>Built using HTML, CSS, React.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              className="button"
              href='https://duesenberg.github.io/cv-application/'
              target='_blank'
              rel='noreferrer'>Live</a>
            <a 
              className="button"
              href='https://github.com/Duesenberg/cv-application'
              target='_blank'
              rel='noreferrer'>Github</a>
          </div>
        </section>
        
        <section className="project" aria-label="to-do list generator">
          <img 
            src={toDoList}
            alt="preview photo of the project"
            className="projectPhoto" />

          <div className="projectInfo">
            <h2 className="projectTitle">
              To-Do List Generator
            </h2>

            <div className="infoWrapper">
              <div>
                <p className='projectText'>
                  An application in which you can create your own To-Do lists.
                  You can add or remove tasks, mark them as completed, add a 
                  description for your project, change the project priority and 
                  due date.</p>
                <p className='projectText'>
                  All of your projects can be saved and loaded from your 
                  browser's local storage.</p>
              </div>

              <div className="toolsUsed">
                <p>Built using HTML, CSS, Javascript.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              className="button"
              href='https://duesenberg.github.io/todo-list/'
              target='_blank'
              rel='noreferrer'>Live</a>
            <a 
              className="button"
              href='https://github.com/Duesenberg/todo-list'
              target='_blank'
              rel='noreferrer'>Github</a>
          </div>
        </section>
      </div>
    </section>
  )
};