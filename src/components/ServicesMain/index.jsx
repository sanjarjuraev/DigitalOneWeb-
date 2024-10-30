/** @format */

import './serviceMain.css';
import Icon1 from '/src/assets/icons/serviceIcon1_1.png';
import Icon2 from '/src/assets/icons/serviceIcon1_2.png';
import Icon3 from '/src/assets/icons/serviceIcon1_3.png';
import Icon4 from '/src/assets/icons/serviceIcon1_4.png';
import Icon11 from '/src/assets/bg-images/software-services.jpg';
import Icon12 from '/src/assets/bg-images/ui-ux.jpg';
import Icon13 from '/src/assets/bg-images/it-consulting.jpg';
import Icon14 from '/src/assets/bg-images/web-dev.jpg';
import Icon15 from '/src/assets/bg-images/database-security.jpg';
import Icon16 from '/src/assets/bg-images/level-up.png';
import titleIcon from '/src/assets/icons/title_icons.png';
import ServiceCard from './ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Software Services',
    mainImg: Icon11,
    description: 'Optimize workflows and productivity.',
    icon: Icon1,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    mainImg: Icon12,
    description: 'Craft engaging digital interfaces.',
    icon: Icon2,
  },
  {
    id: 3,
    title: 'IT Consultancy',
    mainImg: Icon13,
    description: 'Stay ahead with new technologies.',
    icon: Icon3,
  },
  {
    id: 4,
    title: 'Web Development',
    mainImg: Icon14,
    description: 'Tailored solutions for your business.',
    icon: Icon4,
  },
  {
    id: 5,
    title: 'Database Security',
    mainImg: Icon15,
    description: 'Protect your data with security.',
    icon: Icon3,
  },
  {
    id: 6,
    title: 'Level Up',
    mainImg: Icon16,
    description: 'We help to upgrade your skills and level.',
    icon: Icon3,
  },
];

const ServicesSection = () => {
  return (
    <section className="container mx-auto w-full justify-center items-center">
      <div className="text-center mb-10 items-center justify-center">
        <div className="flex gap-3 items-center justify-center text-shadow">
          <span>
            <img src={titleIcon} />
          </span>
          <h4 className="text-red-600 uppercase tracking-wider font-bold">
            Our Feathered Services
          </h4>
          <span>
            <img src={titleIcon} />
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          We Provide Exclusive Service For Your Business
        </motion.h2>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="projects-slider"
        >
          {' '}
          {services.map((service) => (
            <SwiperSlide key={service?.id}>
              <ServiceCard key={service?.id} service={service} />
            </SwiperSlide>
          ))}
          <div className="absolute right-10 top-0 md:-top-5 w-20">
            <div className="swiper-button-next a top-1/2 transform -translate-y-1/2 text-red-500 z-20">
              <i className="fas fa-chevron-right text-2xl hover:text-red-600"></i>
            </div>
            <div className="swiper-button-prev  top-1/2 transform -translate-y-1/2 text-red-500 z-20">
              <i className="fas fa-chevron-left text-2xl hover:text-red-600"></i>
            </div>
          </div>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
