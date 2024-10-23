/** @format */

import './Projects.css';
import Icon1 from '/src/assets/bg-images/oxus-university.png';
import Icon2 from '/src/assets/bg-images/sba.png';
import Icon3 from '/src/assets/bg-images/tms.png';
import Icon4 from '/src/assets/bg-images/erp-solutions.png';
import Icon5 from '/src/assets/bg-images/e-commerce.png';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import titleIconWhite from '/src/assets/icons/title-icons-white.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const services = [
  {
    id: 1,
    title: 'OXUS University',
    image: Icon1,
    description: 'Web Development',
  },
  {
    id: 2,
    title: 'SBA Transportation',
    image: Icon2,
    description: 'Web Development',
  },
  {
    id: 3,
    title: 'Cargo Prime Logistics',
    image: Icon3,
    description: 'TMS App',
  },
  {
    id: 4,
    title: 'Glass Pro',
    image: Icon4,
    description: 'ERP Solution',
  },
  {
    id: 5,
    title: 'Khiva Pharmacy',
    image: Icon5,
    description: 'E-commerce App',
  },
];

const ProjectsSection = () => {
  return (
    <section className='container mx-auto w-full justify-center items-center lg:max-w-[1450px]'>
      <div className='text-center mb-10 items-center justify-center'>
        <div className='flex gap-3 items-center justify-center text-shadow'>
          <span>
            <img src={titleIconWhite} />
          </span>
          <h4 className='uppercase tracking-wider font-bold text-white'>
            Recent Works
          </h4>
          <span>
            <img src={titleIconWhite} />
          </span>
        </div>
        <h2 className='text-3xl md:text-4xl font-bold text-white'>
          Latest Projects of Digital One
        </h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className='projects-slider'
        style={{ overflow: 'visible' }}
      >
        {' '}
        {services.map((service) => (
          <SwiperSlide key={service?.id}>
            <Card item={service} key={service?.id} />
          </SwiperSlide>
        ))}
        <div className='absolute right-10 -top-5 w-20'>
          <div className='swiper-button-next a top-1/2 transform -translate-y-1/2 text-white z-20'>
            <i className='fas fa-chevron-right text-2xl hover:text-red-600'></i>
          </div>
          <div className='swiper-button-prev  top-1/2 transform -translate-y-1/2 text-white z-20'>
            <i className='fas fa-chevron-left text-2xl hover:text-red-600'></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default ProjectsSection;
