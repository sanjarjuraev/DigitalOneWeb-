// /** @format */

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay, EffectFade  } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import './Hero.css'; // Custom animations and styles
// import Logo from '/src/assets/icons/D112.png'; // Adjust the path as needed

// import SliderImg1 from '/src/assets/bg-images/wms-bg.jpg';
// import SliderImg2 from '/src/assets/bg-images/erp.jpg';
// import SliderImg3 from '/src/assets/bg-images/tms.jpg';
// import { useRef } from 'react';

// const Hero = () => {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current?.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };

//   return (
//     <section className="relative w-full h-screen md:max-h-[800px] bg-slate-600">
//       {/* <Swiper
//         modules={[Navigation, Pagination, Autoplay, EffectFade]}
//         spaceBetween={30}
//         slidesPerView={1}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//         pagination={{
//           clickable: true,
//           el: '.swiper-pagination',
//           type: 'bullets',
//         }}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         className='relative z-10 hero-swiper'
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//       >
//         <SwiperSlide>
//           <div
//             className='relative w-full h-full flex items-center justify-left text-white'
//             style={{
//               backgroundImage: `url(${SliderImg1})`,
//               backgroundSize: 'cover',
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'center',
//             }}
//           >
//             <div
//               className='absolute inset-0 bg-black bg-opacity-40'
//               style={{
//                 backgroundImage: `url(${Logo})`,
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
//               }}
//             ></div>
//             <div className='absolute w-full max-w-lg p-5 md:p-10 text-left animate-fadeInLeft flex flex-col items-center md:items-start justify-center left-0 md:left-36 z-20 bg-black bg-opacity-60'>
//               <h2 className='text-2xl md:text-4xl font-bold mb-4 text-center md:text-left'>
//                 Slide 1: Captivating Title Here
//               </h2>
//               <p className='mb-6 text-center md:text-left'>
//                 This is some sample text for the first slide. You can add any
//                 content here to make it informative and attractive.
//               </p>
//               <button className='btn-cubic px-4 md:px-6 py-2 md:py-3 rounded-full'>
//                 Get in Touch
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div
//             className='relative w-full h-full flex items-center text-white'
//             style={{
//               backgroundImage: `url(${SliderImg2})`,
//               backgroundSize: 'cover',
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'center',
//             }}
//           >
//             <div className='absolute inset-0 bg-black bg-opacity-40'></div>
//             <div className='absolute w-full max-w-lg p-5 md:p-10 text-left animate-fadeInLeft flex flex-col items-center md:items-start justify-center left-0 md:left-36 z-20 bg-black bg-opacity-60'>
//               <h2 className='text-2xl md:text-4xl font-bold mb-4 text-center md:text-left'>
//                 Slide 2: Informative Title
//               </h2>
//               <p className='mb-6 text-center md:text-left'>
//                 This is some sample text for the second slide. It can be
//                 modified as per your requirements.
//               </p>
//               <button className='btn-cubic px-4 md:px-6 py-2 md:py-3 rounded-full'>
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div
//             className='relative w-full h-full flex items-center text-white'
//             style={{
//               backgroundImage: `url(${SliderImg3})`,
//               backgroundSize: 'cover',
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'center',
//             }}
//           >
//             <div className='absolute inset-0 bg-black bg-opacity-40'></div>
//             <div className='absolute w-full max-w-lg p-5 md:p-10 text-left animate-fadeInLeft flex flex-col items-center md:items-start justify-center left-0 md:left-36 z-20 bg-black bg-opacity-60'>
//               <h2 className='text-2xl md:text-4xl font-bold mb-4 text-center md:text-left'>
//                 Slide 3: Final Call to Action
//               </h2>
//               <p className='mb-6 text-center md:text-left'>
//                 This is some sample text for the third slide. Feel free to edit
//                 this content.
//               </p>
//               <button className='btn-cubic px-4 md:px-6 py-2 md:py-3 rounded-full'>
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>

//         <div className='autoplay-progress' slot='container-end'>
//           <svg viewBox='0 0 48 48' ref={progressCircle}>
//             <circle cx='24' cy='24' r='20'></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div>

//         <div className='absolute right-2 bottom-20 w-20'>
//           <div className='swiper-button-next text-white z-20'>
//             <i className='fas fa-chevron-right text-2xl hover:text-red-600'></i>
//           </div>
//           <div className='swiper-button-prev text-white z-20'>
//             <i className='fas fa-chevron-left text-2xl hover:text-red-600'></i>
//           </div>
//         </div>

//         <div className='absolute right-2 bottom-28 w-20'>
//           <div className='swiper-pagination absolute bottom-4 right-4 z-20'></div>
//         </div>
//       </Swiper> */}
//     </section>
//   );
// };

// export default Hero;
// src/components/HeroBanner.jsx
import webDev from '/src/assets/bg-images/web-dev1.png';
import cRm from '/src/assets/bg-images/web-crm.png';
import tMs from '/src/assets/bg-images/web-tms.png';
import eRp from '/src/assets/bg-images/web-erp.png';

const Hero = () => {
  return (
    <section className="relative  text-gray-800 sm:pt-10 md:pt-20 lg:pt-40 xl:pt-60 lg:pb-40 sm:pb-20">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        {/* Left Side: Text and Call to Action */}
        <div className="w-full md:w-1/2">
          <img
            src="/path-to-your-logo.png"
            alt="Digital One Logo"
            className="w-32 mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Empowering Businesses with Innovative Tech Solutions
          </h1>
          <p className="text-xl mb-6">
            Specializing in Web Development, CRM, TMS, ERP, WMS, and E-commerce
            Solutions
          </p>
          <a
            href="#contact"
            className="inline-block bg-red-600 text-white px-6 py-3 text-lg rounded-md hover:bg-red-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Right Side: Service Icons or Animation */}
        <div className="grid  gap-4  sm:grid-cols-1 mx-auto">
          {/* First and Second Columns */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1 items-end">
            <div className="relative flex items-center justify-center  bg-gray-100 w-[200px] h-[175px] overflow-hidden rounded-lg shadow-md mx-auto">
              <img
                src={webDev}
                alt="Web Development"
                className="bg-cover bg-center"
              />
              <span className="absolute bottom-4 text-center bg-red-700 py-1 px-2 rounded text-white">
                <p>Web Development</p>
              </span>
            </div>
            <div className="relative flex items-center justify-center  bg-gray-100 w-[200px] h-[200px]  rounded-lg shadow-md mx-auto overflow-hidden">
              <img src={cRm} alt="CRM" className="bg-cover bg-center" />
              <span className="absolute bottom-4 text-center bg-red-700 py-1 px-2 rounded text-white">
                <p>CRM</p>
              </span>
            </div>
          </div>

          {/* Third and Fourth Columns */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1 items-start justify-center">
            <div className="relative flex items-center justify-center overflow-hidden  bg-gray-100 w-[200px] h-[200px]  rounded-lg shadow-md mx-auto">
              <img src={tMs} alt="TMS" className="bg-cover bg-center" />
              <span className="absolute bottom-4 text-center bg-red-700 py-1 px-2 rounded text-white">
                <p>TMS</p>
              </span>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden  bg-gray-100 w-[200px] h-[175px]  rounded-lg shadow-md mx-auto">
              <img src={eRp} alt="ERP" className="bg-cover bg-center" />
              <span className="absolute bottom-4 text-center bg-red-700 py-1 px-2 rounded text-white">
                <p>ERP</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Optional background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-transparent opacity-50"></div>
    </section>
  );
};

export default Hero;
