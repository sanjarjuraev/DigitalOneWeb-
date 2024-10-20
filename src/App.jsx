/** @format */

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ServiceCards from './components/ServiceShort'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <div className='bg-slate-600 w-full'>
      <Header />
      <Hero />
      <div className='relative container m-auto'>
        <ServiceCards />
      </div>
      <div className='relative section-about'>
        <AboutUs />
      </div>
    </div>
  )
}

export default App
