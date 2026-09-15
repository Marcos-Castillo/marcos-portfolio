import About from './components/About.jsx'
import AnimatedBackground from './components/AnimatedBackground.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import './index.css'

function App() {
  return (
    <>
      <AnimatedBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App