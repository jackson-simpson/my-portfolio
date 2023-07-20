import bookIcon from '../public/images/icons8-book-80.png'
import auraPets from '../public/images/aura-pets.png'

function Projects() {
  return (
    <section className="container projects-page">
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-container project-card">
          <img
            src={auraPets}
            alt="expense-tracker"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Aura Pets</h3>
          <p className="project-details">
            The final project I participated in during my time at Dev Academy.
            We were given a week to create an app, and we used react.js, redux,
            sass, and Auth0 as its main technologies. It is currently not
            deployed but all project targets were met, with numerous stretch
            goals to be looked at in the future.
          </p>
          <a
            href="https://github.com/jackson-simpson/aura-pets"
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            Link to GitHub
          </a>
        </div>
        <div className="project-container project-card">
          <img
            src={bookIcon}
            alt="netflic-clone"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Library App</h3>
          <h4 className="project-title">In Progress</h4>
          <p className="project-details">
            A personal project for listing all my books. The idea is to
            eventually have the ability to add reviews, and have a list of
            priority. I also want to add things other than books, such as movies
            or games, essentially to track my hobbies! For technologies, I want
            to use this project to experiment to CSS frameworks.
          </p>
          <a
            href="https://github.com/jackson-simpson/media-tracker"
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            Link to Github
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
