import Activity from './components/Activity'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import TechMarquee from './components/TechMarquee'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-[#0c0c14]">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Education />
        <Activity />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
