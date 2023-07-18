import '../public/styles/index.scss'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  return (
    <body>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </body>
  )
}

export default App
