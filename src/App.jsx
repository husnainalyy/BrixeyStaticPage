import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Carousal from './Components/Carousal'
import CompanyDescription from './Components/CompanyDescription'
import ProjectNumber from './Components/ProjectNumber'
import FeaturedProjects from './Components/FeaturedProjects'
import Reviews from './Components/Reviews'
import Team from './Components/Team'
import Purchase from './Components/Purchase'
import Clients from './Components/Clients'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Carousal/>
    <CompanyDescription/>
    <ProjectNumber />
    <FeaturedProjects />
    <Reviews />
    <Team/>
    <Purchase />
    <Clients/>
    <Footer/>
    </>
  )
}

export default App
