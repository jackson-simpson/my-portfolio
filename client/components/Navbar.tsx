import '../public/styles/index.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <section className="nav-bar">
      <Link className="logo" to="/">
        <h1>Jackson Simpson</h1>
      </Link>
      <nav></nav>
    </section>
  )
}

export default Navbar
