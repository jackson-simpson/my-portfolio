import '../public/styles/index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faLaptopCode,
  faFile,
} from '@fortawesome/free-solid-svg-icons'
import logo from '../public/images/logo_orange-removebg-preview.png'
import cv from '../public/Dev-CV-D-J-Simpson.pdf'

function Navbar() {
  return (
    <nav>
      <Link className="logo" to="/">
        <img src={logo} alt="david jackson simpson logo" />
      </Link>

      <section className="nav-selections">
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about-me"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <a
          className="cv-link"
          target="_blank"
          rel="noreferrer"
          href={cv}
          download
        >
          <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
        </a>
      </section>
    </nav>
  )
}

export default Navbar
