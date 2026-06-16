import Hero from '../components/Hero.jsx'
import Process from '../components/Process.jsx'
import Services from '../components/Services.jsx'
import Showcase from '../components/Showcase.jsx'
import About from '../components/About.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Quote from '../components/Quote.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <Showcase />
      <Services />
      <About />
      <CtaBand />
      <Quote />
    </main>
  )
}
