import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
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
import PrivacyPolicy from './components/Policy';
import ServiceVertical from '/src/assets/bg-images/service-vertical.png';
import TeamDetailed from './components/Team/TeamDetailed';
import BlogPage from './components/Blog';
import Blog1 from './components/Blog/BlogTMS';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      setTimeout(() => {
        const sectionElement = document.querySelector(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Add a small delay to make sure DOM is fully rendered
    }
  }, [location]);

  return (
    <div className="w-full">
      <section className="sticky top-0 z-50">
        <Header />
      </section>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home" className="hero-section section-hero ">
                <Hero />
              </section>
              <section className="relative container m-auto ">
                <ServiceCards />
              </section>
              <section
                id="about"
                className="relative section-about section-space"
              >
                <AboutUs />
              </section>
              <section
                id="services"
                className="relative section-service m-auto section-space"
              >
                <ServicesSection />
                <div className="absolute right-0 top-0 hidden md:block">
                  <img src={ServiceVertical} />
                </div>
              </section>
              <section
                id="team"
                className="relative m-auto section-space section-team"
              >
                <TeamSection />
              </section>
              <section
                id="projects"
                className="relative m-auto section-pojects"
              >
                <div className="inner-bg w-full h-full section-space">
                  <ProjectsSection />
                </div>
              </section>
              <section
                id="testimonials"
                className="relative m-auto section-testimonials section-space"
              >
                <TestimonialsSection />
              </section>
              <section
                id="footer"
                className="relative m-auto section-footer pt-10 pb-10"
              >
                <Footer />
              </section>
              <section id="footer-bottom" className="relative m-auto">
                <FooterBootom />
              </section>
              <ScrollToTopButton />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/team/:name" element={<TeamDetailed />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<Blog1 />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
