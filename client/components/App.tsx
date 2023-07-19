import '../public/styles/index.scss'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <body>
      <section className="page">
        <Navbar />
        <Outlet />
        <Footer />
      </section>
    </body>
  )
}

export default App
