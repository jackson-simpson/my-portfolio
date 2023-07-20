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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </p>
          <a
            href="https://github.com/jackson-simpson/aura-pets"
            className="project-link"
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </p>
          <a
            href="https://github.com/jackson-simpson/media-tracker"
            className="project-link"
          >
            Link to Github
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
