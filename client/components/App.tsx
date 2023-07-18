import '../public/styles/index.scss'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </>
  )
}

export default App
