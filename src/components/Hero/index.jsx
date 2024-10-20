/** @format */

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './Hero.css' // Add your custom animations and styles here
import { useRef } from 'react'
const Hero = () => {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current?.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }
  return (
    <section className='relative w-full h-screen md:max-h-[800px] bg-slate-600'>
      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className='relative z-10'
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {/* Slides */}
        <SwiperSlide>
          <div
            className='relative w-full h-full flex items-center justify-left  text-white'
            style={{
              backgroundImage: `url('/src/assets/bg-images/crm.png')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className='hidden md:block md:absolute w-full h-full'>
              <div
                style={{
                  clipPath: 'polygon(45% 0%, 100% 0%, 100% 100%, 30% 100%)',
                }}
                className='absolute inset-0'
              />
            </div>
          </div>{' '}
          <div className='absolute w-full max-w-lg p-5 md:p-10 text-left animate-fadeInLeft flex flex-col items-center md:items-start justify-center left-0 md:left-36 z-20 bg-red-500 bg-opacity-60'>
            <h2 className='text-2xl md:text-4xl font-bold mb-4 text-center md:text-left'>
              Slide 1: Captivating Title Here
            </h2>
            <p className='mb-6 text-center md:text-left'>
              This is some sample text for the first slide. You can add any
              content here to make it informative and attractive.
            </p>
            <button className='bg-red-500 hover:bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full transition duration-300'>
              Get in Touch
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className='relative w-full h-full flex items-center text-white'
            style={{
              backgroundImage: `url('/src/assets/bg-images/erp.jpg')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {' '}
            <div className='hidden md:block md:absolute w-full h-full'>
              <div
                style={{
                  clipPath: 'polygon(45% 0%, 100% 0%, 100% 100%, 30% 100%)',
                }}
                className='absolute inset-0'
              />
            </div>
          </div>
          <div className='absolute w-full max-w-lg p-5 md:p-10 text-left animate-fadeInLeft flex flex-col items-center md:items-start justify-center left-0 md:left-36 z-20 bg-red-500 bg-opacity-60'>
            <h2 className='text-2xl md:text-4xl font-bold mb-4 text-center md:text-left'>
              Slide 1: Captivating Title Here
            </h2>
            <p className='mb-6 text-center md:text-left'>
              This is some sample text for the first slide. You can add any
              content here to make it informative and attractive.
            </p>
            <button className='bg-red-500 hover:bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full transition duration-300'>
              Get in Touch
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='relative w-full h-full flex items-center text-white'
            style={{
              backgroundImage: `url('/src/assets/bg-images/tms.jpg')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className='hidden md:block md:absolute w-full h-full'>
              <div
                style={{
                  clipPath: 'polygon(45% 0%, 100% 0%, 100% 100%, 30% 100%)',
                }}
                className='absolute inset-0'
              />
            </div>
          </div>{' '}
          <div className='absolute w-full max-w-lg p-5 md:p-10 text-left animate-fadeInLeft flex flex-col items-center md:items-start justify-center left-0 md:left-36 z-20 bg-red-500 bg-opacity-60'>
            <h2 className='text-2xl md:text-4xl font-bold mb-4 text-center md:text-left'>
              Slide 1: Captivating Title Here
            </h2>
            <p className='mb-6 text-center md:text-left'>
              This is some sample text for the first slide. You can add any
              content here to make it informative and attractive.
            </p>
            <button className='bg-red-500 hover:bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full transition duration-300'>
              Get in Touch
            </button>
          </div>
        </SwiperSlide>

        <div className='autoplay-progress' slot='container-end'>
          <svg viewBox='0 0 48 48' ref={progressCircle}>
            <circle cx='24' cy='24' r='20'></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
        {/* Add more slides as needed */}
      </Swiper>

      {/* Navigation Buttons */}
      <div className='swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-20'>
        <i className='fas fa-chevron-left text-2xl'></i>
      </div>
      <div className='swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-20'>
        <i className='fas fa-chevron-right text-2xl'></i>
      </div>

      {/* Pagination Dots */}
      <div className='swiper-pagination absolute bottom-4 right-4 z-20'></div>

      {/* Autoplay Progress Bar */}
      <div className='autoplay-progress absolute bottom-4 left-4 z-20 w-32 h-1 bg-white bg-opacity-30'>
        <span className='block h-full bg-red-500'></span>
      </div>
    </section>
  )
}

export default Hero
