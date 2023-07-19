import '../public/styles/index.scss'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <body>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </body>
  )
}

export default App
