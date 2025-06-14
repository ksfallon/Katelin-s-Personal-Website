import { useState } from 'react'
import './App.css'
import "./index.css"
import { LoadingScreen } from './components/LoadingScreen'
import { NavBar } from './components/NavBar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { Experience } from './components/sections/Experience'
import { Education } from './components/sections/Education'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { BottomNavBar } from './components/sections/BottomNavBar'

function App() {
const [isLoaded, setIsLoaded] = useState(false) 
const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
        <div className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
        >
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home/>
          <Experience/>
          <Skills/>
          <Education/>
          <Projects/>
          <Contact/>
          <BottomNavBar/>
        </div>
    </>
  )
}

export default App
