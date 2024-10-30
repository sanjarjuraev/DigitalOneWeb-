/** @format */

import { useState } from 'react';
import { ReactComponent as Logo } from '/src/assets/d1-extended.svg'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeIcon, setActiveIcon] = useState(null);
  const handleClick = (menu) => {
    if (menu === 'Blog') {
      navigate(`/blog`);
    }
    setActiveMenu(menu);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleIconClick = (icon) => {
    setActiveIcon(icon); // Set the active icon when clicked
  };

  const smoothScroll = (e, target) => {
    e.preventDefault();
    let menuItem =
      target?.substring(1)?.charAt(0)?.toUpperCase() + target?.substring(2);
    setActiveMenu(menuItem);
    console.log(menuItem, 'menuitem');

    if (menuItem === 'Blog') {
      console.log('here,...');

      navigate('/blog');
    } else {
      navigate('/', { state: { scrollToSection: target } });
    }
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="relative w-full ">
      {/* Top Header */}
      <div className="bg-red-900 text-white text-sm py-3 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <span>
              <i className="fa fa-envelope"></i> info@example.com
            </span>
            <span>
              <a href="tel:+998940250121" className="text-white">
                <i className="fa fa-phone"></i> +998 94 025 01 21
              </a>
            </span>
          </div>
          <div className="flex space-x-4">
            <span className="hidden md:inline">Follow Us:</span>

            {/* Facebook */}
            <a
              href="#"
              className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-300 ${
                activeIcon === 'facebook'
                  ? 'bg-white text-red-500'
                  : 'bg-gradient-to-r from-red-500 to-red-900 text-white'
              } hover:bg-white hover:text-red-500`}
              onClick={() => handleIconClick('facebook')}
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-300 ${
                activeIcon === 'instagram'
                  ? 'bg-white text-red-500'
                  : 'bg-gradient-to-r from-red-500 to-red-900 text-white'
              } hover:bg-white hover:text-red-500`}
              onClick={() => handleIconClick('instagram')}
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-300 ${
                activeIcon === 'linkedin'
                  ? 'bg-white text-red-500'
                  : 'bg-gradient-to-r from-red-500 to-red-900 text-white'
              } hover:bg-white hover:text-red-500`}
              onClick={() => handleIconClick('linkedin')}
            >
              <i className="fab fa-linkedin"></i>
            </a>

            {/* Telegram */}
            <a
              href="#"
              className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-300 ${
                activeIcon === 'telegram'
                  ? 'bg-white text-red-500'
                  : 'bg-gradient-to-r from-red-500 to-red-900 text-white'
              } hover:bg-white hover:text-red-500`}
              onClick={() => handleIconClick('telegram')}
            >
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="absolute desctop-nav right-0 left-0  shadow-md z-30">
        <div className="container mx-auto flex justify-between items-center lg:px-0 bg-white">
          {/* Logo */}
          <div className="relative h-full flex items-center">
            <div
              className="relative  h-full p-4 px-8 flex items-center"
              style={{
                background: '#FF3E2A',
                clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)', // Creates a slanted shape
              }}
            >
              <Logo className="h-12 w-auto" />
            </div>
            <div
              className="absolute top-0 -right-10 h-full w-12 bg-red"
              style={{
                clipPath: 'polygon(0 0, 35% 0, 78% 100%, 43% 100%)',
                backgroundColor: '#ff4500',
              }}
            ></div>
          </div>

          {/* Menu */}
          <div className="hidden lg:flex space-x-6">
            <a
              href="#home"
              className="text-black hover:text-red-600"
              onClick={(e) => smoothScroll(e, '#home')}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-black hover:text-red-600"
              onClick={(e) => smoothScroll(e, '#about')}
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-black hover:text-red-600"
              onClick={(e) => smoothScroll(e, '#services')}
            >
              Services
            </a>

            <a
              href="#team"
              className="text-black hover:text-red-600"
              onClick={(e) => smoothScroll(e, '#team')}
            >
              Our Team
            </a>
            <a
              href="#projects"
              className="text-black hover:text-red-600"
              onClick={(e) => smoothScroll(e, '#projects')}
            >
              Pojects
            </a>
            <a
              href="#"
              className="text-black hover:text-red-600"
              onClick={(e) => smoothScroll(e, '#blog')}
            >
              Blog
            </a>
            <a
              href="#footer"
              className="text-black hover:text-red-600"
              onClick={(e) => smoothScroll(e, '#footer')}
            >
              Contact Us
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            {/* <button className='hidden md:flex border border-red-500 text-red-500 rounded-full p-2'>
              <i className='fa fa-search'></i>
            </button> */}

            {/* Call to Action */}
            {/* <button className="btn-cubic hidden md:flex bg-gradient-to-r from-red-500 to-red-900 text-white px-6 py-2 rounded-lg hover:rounded-lg">
              Get in Touch
            </button> */}

            {/* Hamburger Menu for Mobile */}
            {/* <button
              className='lg:hidden border border-red-500 text-red-500 rounded-full p-2 ml-1'
              style={{ marginRight: '5px' }}
              onClick={toggleMenu}
            >
              <i className='fa fa-bars'></i>
            </button> */}
            <div>
              <nav className="relative mobile-nav flex items-center justify-between px-4 py-2 lg:hidden">
                {/* Hamburger Button */}
                <button
                  className="lg:hidden border border-red-500 text-red-500 rounded-full p-2 ml-1"
                  style={{ marginRight: '5px' }}
                  onClick={toggleMenu}
                >
                  <i className="fa fa-bars"></i>
                </button>

                {/* Full screen menu for mobile */}
                <div
                  className={`${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                  } lg:hidden fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out`}
                >
                  <div className="flex justify-between p-4 bg-red-600">
                    <Logo className="h-12 w-auto" />
                    {/* Close Button */}
                    <button
                      onClick={toggleMenu}
                      className="border border-white text-white rounded-full p-2"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                  <ul className="flex flex-col space-y-4 p-4">
                    {[
                      'Home',
                      'About Us',
                      'Services',
                      'Our Team',
                      'Projects',
                      'Blogs',
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className={`relative inline-block text-xl overflow-hidden transition-colors duration-500 ease-in-out
              ${activeMenu === item ? 'text-red-500' : 'text-gray-500'}`}
                          onClick={() => handleClick(item)}
                        >
                          {/* Animated underline effect */}
                          <span
                            className="relative z-10"
                            style={{
                              position: 'relative',
                              display: 'inline-block',
                              padding: '0 0.2rem',
                              transition: 'color 0.5s',
                            }}
                          >
                            {item}
                          </span>
                          {/* Left-to-right red underline fill */}
                          <span
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transition-transform duration-500 ease-in-out"
                            style={{
                              transform:
                                activeMenu === item ? 'scaleX(1)' : 'scaleX(0)',
                              transformOrigin: 'left',
                            }}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile view "Get In Touch" section */}
                  <div className="bg-white p-4 mt-4 border-t text-gray-500 text-sm">
                    <div>
                      <h3 className="text-lg font-semibold text-red-500">
                        Get In Touch
                      </h3>
                      <ul className="mt-2">
                        <li className="flex items-center space-x-2">
                          <i className="fa fa-map-marker-alt text-red-500"></i>
                          <span className="text-sm">
                            Chust 10A, Mirzo Ulugbek, Tashkent, Uzbekistan
                          </span>
                        </li>
                        <li className="flex items-center space-x-2 mt-2">
                          <i className="fa fa-phone text-red-500"></i>
                          <span>+01 234 567 890</span>
                        </li>
                        <li className="flex items-center space-x-2 mt-2">
                          <i className="fa fa-envelope text-red-500"></i>
                          <span>mailinfo00@digitalone.com</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-red-500">
                        Subscribe Now
                      </h3>
                      <div className="flex mt-2">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="border p-2 rounded-l-lg w-full"
                        />
                        <button className="bg-gradient-to-r from-red-500 to-red-900 text-white px-4 rounded-r-lg">
                          <i className="fa fa-paper-plane"></i>
                        </button>
                      </div>

                      <div className="flex space-x-4 mt-4">
                        {/* Facebook */}
                        <a
                          href="#"
                          className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-300 ${
                            activeIcon === 'facebook'
                              ? 'bg-white text-red-500'
                              : 'bg-gradient-to-r from-red-500 to-red-900 text-white'
                          } hover:bg-white hover:text-red-500`}
                          onClick={() => handleIconClick('facebook')}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>

                        {/* Instagram */}
                        <a
                          href="#"
                          className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-300 ${
                            activeIcon === 'instagram'
                              ? 'bg-white text-red-500'
                              : 'bg-gradient-to-r from-red-500 to-red-900 text-white'
                          } hover:bg-white hover:text-red-500`}
                          onClick={() => handleIconClick('instagram')}
                        >
                          <i className="fab fa-instagram"></i>
                        </a>

                        {/* LinkedIn */}
                        <a
                          href="#"
                          className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-300 ${
                            activeIcon === 'linkedin'
                              ? 'bg-white text-red-500'
                              : 'bg-gradient-to-r from-red-500 to-red-900 text-white'
                          } hover:bg-white hover:text-red-500`}
                          onClick={() => handleIconClick('linkedin')}
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>

                        {/* Telegram */}
                        <a
                          href="#"
                          className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-300 ${
                            activeIcon === 'telegram'
                              ? 'bg-white text-red-500'
                              : 'bg-gradient-to-r from-red-500 to-red-900 text-white'
                          } hover:bg-white hover:text-red-500`}
                          onClick={() => handleIconClick('telegram')}
                        >
                          <i className="fab fa-telegram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
