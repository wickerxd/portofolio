import { MotionConfig } from 'motion/react'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import IntroOverlay from './components/IntroOverlay'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <IntroOverlay />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </MotionConfig>
  )
}

export default App
