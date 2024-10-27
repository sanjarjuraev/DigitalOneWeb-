
import webDev from '/src/assets/bg-images/web-dev1.png';
import cRm from '/src/assets/bg-images/web-crm.png';
import tMs from '/src/assets/bg-images/web-tms.png';
import eRp from '/src/assets/bg-images/web-erp.png';

const Hero = () => {
  return (
    <section className="relative text-gray-800 pt-28 sm:pt-20 xs:pt-40 md:pt-20 lg:pt-40  lg:pb-40 sm:pb-20">
      <div className="container mx-auto px-6   flex flex-col md:flex-row items-center  gap-6">
        {/* Left Side: Text and Call to Action */}
        <div className="w-full md:w-1/2 opacity-100 hero-text-wrapper">
          <h1 className="text-2xl md:text-4xl lg:text-5lx xl:text-7lx font-bold leading-tight mb-4 text-black">
            Empowering Businesses with Innovative Tech Solutions
          </h1>
          <p className="text-xl mb-4 md:mb-6">
            Specializing in Web Development, CRM, TMS, ERP, WMS, and E-commerce
            Solutions
          </p>
          <a
            href="#contact"
            className="inline-block bg-red-600 text-white px-2 py-1 md:px-6 md:py-3 text-lg rounded-md hover:bg-red-700 transition"
          >
            Get in touch
          </a>
        </div>

        {/* Right Side: Service Icons or Animation */}
        <div className="grid  gap-4  sm:grid-cols-1 mx-auto">
          {/* First and Second Columns */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1 items-end">
            <div className="relative flex items-center justify-center  bg-gray-100 md:w-[200px] md:h-[175px] w-[300px] h-[300px] overflow-hidden rounded-lg shadow-md mx-auto border-double border-4 border-red-600">
              <img
                src={webDev}
                alt="Web Development"
                className="bg-cover bg-center w-full"
              />
              <span className="absolute bottom-4 text-center bg-red-700 py-1 px-2 rounded text-white">
                <p>Web Development</p>
              </span>
            </div>
            <div className="relative flex items-center justify-center  bg-gray-100 md:w-[200px] md:h-[200px] w-[300px] h-[300px]  rounded-lg shadow-md mx-auto overflow-hidden border-double border-4 border-red-600">
              <img src={cRm} alt="CRM" className="bg-cover bg-center w-full" />
              <span className="absolute bottom-4 text-center bg-red-700 py-1 px-2 rounded text-white">
                <p>CRM</p>
              </span>
            </div>
          </div>

          {/* Third and Fourth Columns */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1 items-start justify-center">
            <div className="relative flex items-center justify-center overflow-hidden  bg-gray-100 md:w-[200px] md:h-[200px] w-[300px] h-[300px]  rounded-lg shadow-md mx-auto border-double border-4 border-red-600">
              <img src={tMs} alt="TMS" className="bg-cover bg-center w-full" />
              <span className="absolute bottom-4 text-center bg-red-700 py-1 px-2 rounded text-white">
                <p>TMS</p>
              </span>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden  bg-gray-100 md:w-[200px] md:h-[175px] w-[300px] h-[300px]  rounded-lg shadow-md mx-auto border-double border-4 border-red-600">
              <img src={eRp} alt="ERP" className="bg-cover bg-center w-full" />
              <span className="absolute bottom-4 text-center bg-red-700 py-1 px-2 rounded text-white">
                <p>ERP</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
