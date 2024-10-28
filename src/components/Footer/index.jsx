import { ReactComponent as Logo } from '../../assets/d1-extended.svg'; // Adjust the path as needed
import Blog1 from '/src/assets/bg-images/e-commerce.png';
import Blog2 from '/src/assets/bg-images/erp-solutions.png';
import './Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
  const cardVariants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'eseaIn',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <footer className="text-white ">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10 footer-bg"
      >
        {/* Logo and Description */}
        <motion.div variants={cardVariants}>
          <div className="mb-4">
            <Logo className="h-12 w-auto" />
          </div>
          <p className="mb-4">
            Digital One is a dynamic and innovative technology company dedicated
            to solutions.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f text-xl hover:text-red-400"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter text-xl hover:text-red-400"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-xl hover:text-red-400"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube text-xl hover:text-red-400"></i>
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={cardVariants}>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-red-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-red-400">
                Our Services
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-red-400">
                Our Team
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-red-400">
                Our Recent Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">
                FAQ&#39;S
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Recent Posts */}
        <motion.div variants={cardVariants}>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <img
                src={Blog2}
                alt="Post Image"
                className="w-12 h-12 rounded-md mr-4"
              />
              <div>
                <span className="text-xs text-gray-400">
                  21st October, 2024
                </span>
                <h4 className="text-xs hover:text-red-400 hover:cursor-pointer">
                  We have recently started working on an ERP project for
                  GlassPro
                </h4>
              </div>
            </li>
            <li className="flex items-center">
              <img
                src={Blog1}
                alt="Post Image"
                className="w-12 h-12 rounded-md mr-4"
              />
              <div>
                <span className="text-xs text-gray-400">
                  23rd October, 2024
                </span>
                <h4 className="text-xs hover:text-red-400  hover:cursor-pointer">
                  We have started developing e-commerce and WMS for Urgench
                  Pharmacy.
                </h4>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={cardVariants}>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:info@example.com" className="hover:text-red-400">
                info@example.com
              </a>
            </li>
            <li>
              <a href="tel:+998940250121" className="hover:text-red-400">
                +998 94 025 01 21
              </a>
            </li>
          </ul>
          {/* Newsletter Subscription */}
          <form className="mt-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded-l-md bg-gray-800 text-white outline-none"
              />
              <button
                type="submit"
                className="bg-red-600 p-2 rounded-r-md hover:bg-red-700 transition duration-300"
              >
                →
              </button>
            </div>
            <div className="mt-2">
              <input type="checkbox" id="agree" className="mr-2" />
              <label htmlFor="agree" className="text-sm text-gray-400">
                I agree to the{' '}
                <a
                  href="/privacy-policy"
                  className="text-red-500 hover:underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
          </form>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
    </footer>
  );
};

export default Footer;
