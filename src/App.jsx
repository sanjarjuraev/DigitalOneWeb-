/** @format */

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ServiceCards from './components/ServiceShort'
import AboutUs from './components/AboutUs'
import ServicesSection from './components/ServicesMain'
import TeamSection from './components/Team'

function App() {
  return (
    <div className='w-full'>
      <section className='sticky top-0 z-50'>
        <Header />
      </section>
      <section id='home'>
        <Hero />
      </section>
      <section className='relative container m-auto '>
        <ServiceCards />
      </section>
      <section id='about' className='relative section-about section-space'>
        <AboutUs />
      </section>
      <section
        id='services'
        className='relative section-service m-auto section-space'
      >
        <ServicesSection />
      </section>
      <section
        id='services'
        className='relative  m-auto section-space section-team'
      >
        <TeamSection />
      </section>
    </div>
  )
}

export default App
