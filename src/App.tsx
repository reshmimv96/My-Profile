
import About from './about/About'
import './App.css'
import Contact from './contact/Contact'
import Education from './education/Education'
import Experience from './experience/Experience'
import Navbar from './navbar/Navbar'
import Project from './projects/Project'
import Skills from './skills/Skills'

function App() {

  return (
    <>
     <Navbar />
     <About />
     <Skills />
     <Experience />
     <Project />
     <Education />
     <Contact />
    </>
  )
}

export default App
