/** @format */

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCards from './components/ServiceShort';
import AboutUs from './components/AboutUs';
import ServicesSection from './components/ServicesMain';
import TeamSection from './components/Team';
import ProjectsSection from './components/Projects';
import TestimonialsSection from './components/Testimonials';
import Footer from './components/Footer';
import FooterBootom from './components/FooterBootom';
import ScrollToTopButton from './components/GoToTop';

function App() {
  return (
    <div className="w-full">
      <section className="sticky top-0 z-50">
        <Header />
      </section>
      <section id="home" className="hero-section section-hero">
        <Hero />
      </section>
      <section className="relative container m-auto ">
        <ServiceCards />
      </section>
      <section id="about" className="relative section-about section-space">
        <AboutUs />
      </section>
      <section
        id="services"
        className="relative section-service m-auto section-space"
      >
        <ServicesSection />
      </section>
      <section
        id="team"
        className="relative  m-auto section-space section-team"
      >
        <TeamSection />
      </section>
      <section id="projects" className="relative  m-auto  section-pojects">
        <div className="inner-bg w-full h-full section-space">
          <ProjectsSection />
        </div>
      </section>
      <section
        id="testimonials"
        className="relative  m-auto  section-testimonials section-space"
      >
        <TestimonialsSection />
      </section>
      <section
        id="footer"
        className="relative  m-auto  section-footer pt-10 pb-10"
      >
        <Footer />
      </section>
      <section id="footer-bottom" className="relative  m-auto">
        <FooterBootom />
      </section>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
