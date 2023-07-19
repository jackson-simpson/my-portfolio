import '../public/styles/index.scss'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  return (
    <body>
      <section className="page">
        <Navbar />
        <Outlet />
      </section>
    </body>
  )
}

export default App
