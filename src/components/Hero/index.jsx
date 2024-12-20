import webDev from '/src/assets/bg-images/web-dev1.png';
import cRm from '/src/assets/bg-images/web-crm.png';
import tMs from '/src/assets/bg-images/web-tms.png';
import eRp from '/src/assets/bg-images/web-erp.png';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section className="relative text-gray-800 pt-28 sm:pt-20 xs:pt-40 md:pt-20 lg:pt-40  lg:pb-40 sm:pb-20">
      <div className="container mx-auto px-6   flex flex-col md:flex-row items-center  gap-6">
        {/* Left Side: Text and Call to Action */}
        <div className="w-full md:w-1/2 opacity-100 hero-text-wrapper">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5lx xl:text-6xl font-bold leading-tight mb-4 text-black"
          >
            Empowering Businesses with Innovative Tech Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-4 md:mb-6"
          >
            Specializing in Web Development, CRM, TMS, ERP, WMS, and E-commerce
            Solutions
          </motion.p>
          <motion.a
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all"
            href="#footer"
          >
            Get in touch
          </motion.a>
        </div>

        {/* Right Side: Service Icons or Animation */}
        <div className="grid  gap-4  sm:grid-cols-1 mx-auto">
          {/* First and Second Columns */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1 items-end">
            <motion.div
              initial={
                isMobile
                  ? {
                      opacity: 0,
                      // Slide from right if index is odd, else from left
                      x: 50,
                    }
                  : {
                      rotate: -90,
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }
              }
              whileInView={
                isMobile
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 1 },
                    }
                  : {
                      rotate: 0,
                      y: 0,
                      x: 0,
                      opacity: 1,
                      transition: { duration: 1 },
                    }
              }
              viewport={{ once: true }}
              className="relative flex items-center justify-center  bg-gray-100 md:w-[200px] md:h-[175px] w-[300px] h-[300px] overflow-hidden rounded-lg shadow-md mx-auto border-double border-4 border-red-600"
            >
              <img
                src={webDev}
                alt="Web Development"
                className="bg-cover bg-center w-full"
              />
              <span className="absolute bottom-4 text-center bg-red-700 py-1 px-2 rounded text-white">
                <p>Web Development</p>
              </span>
            </motion.div>
            <motion.div
              initial={
                isMobile
                  ? {
                      opacity: 0,
                      // Slide from right if index is odd, else from left
                      x: -50,
                    }
                  : {
                      rotate: 90,
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }
              }
              whileInView={
                isMobile
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 1 },
                    }
                  : {
                      rotate: 0,
                      y: 0,
                      x: 0,
                      opacity: 1,
                      transition: { duration: 1, delay: 0.8 },
                    }
              }
              viewport={{ once: true }}
              className="relative flex items-center justify-center  bg-gray-100 md:w-[200px] md:h-[200px] w-[300px] h-[300px]  rounded-lg shadow-md mx-auto overflow-hidden border-double border-4 border-red-600"
            >
              <img src={cRm} alt="CRM" className="bg-cover bg-center w-full" />
              <span className="absolute bottom-4 text-center bg-red-700 py-1 px-2 rounded text-white">
                <p>CRM</p>
              </span>
            </motion.div>
          </div>

          {/* Third and Fourth Columns */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1 items-start justify-center">
            <motion.div
              initial={{
                rotate: 90,
                x: 0,
                y: 0,
                opacity: 0,
              }}
              whileInView={{
                rotate: 0,
                y: 0,
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1.5 },
              }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center overflow-hidden  bg-gray-100 md:w-[200px] md:h-[200px] w-[300px] h-[300px]  rounded-lg shadow-md mx-auto border-double border-4 border-red-600"
            >
              <img src={tMs} alt="TMS" className="bg-cover bg-center w-full" />
              <span className="absolute bottom-4 text-center bg-red-700 py-1 px-2 rounded text-white">
                <p>TMS</p>
              </span>
            </motion.div>
            <motion.div
              initial={{
                rotate: -90,
                x: 0,
                y: 0,
                opacity: 0,
              }}
              whileInView={{
                rotate: 0,
                y: 0,
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center overflow-hidden  bg-gray-100 md:w-[200px] md:h-[175px] w-[300px] h-[300px]  rounded-lg shadow-md mx-auto border-double border-4 border-red-600"
            >
              <img src={eRp} alt="ERP" className="bg-cover bg-center w-full" />
              <span className="absolute bottom-4 text-center bg-red-700 py-1 px-2 rounded text-white">
                <p>ERP</p>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
