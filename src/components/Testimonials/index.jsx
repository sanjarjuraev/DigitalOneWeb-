import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonials.css';
import titleIcon from '/src/assets/icons/title_icons.png';
const testimonials = [
  {
    id: 1,
    name: 'Albert Flores',
    role: 'Medical Assistant',
    image: '/src/assets/bg-images/testiThumb1_1.webp', // Replace with actual image path
    rating: 5,
    quote:
      'I have been a customer of Best Computer Hub for over a year now, and I am continually impressed by their exceptional service and quality products. Every purchase I have made has been seamless, from ordering online to receiving the items on time. The product descriptions are accurate.',
  },
  {
    id: 2,
    name: 'Kathryn Murphy',
    role: 'Web Designer',
    image: '/src/assets/bg-images/testiThumb1_2.webp', // Replace with actual image path
    rating: 5,
    quote:
      'Techo has completely transformed our web development process. The user-friendly interface and powerful features make building and maintaining our website a breeze. The customer support team is always responsive and helpful, ensuring we get the most out of their platform. Highly recommended!',
  },
  {
    id: 3,
    name: 'Albert Flores',
    role: 'Medical Assistant',
    image: '/src/assets/bg-images/testiThumb1_1.webp', // Replace with actual image path
    rating: 5,
    quote:
      'I have been a customer of Best Computer Hub for over a year now, and I am continually impressed by their exceptional service and quality products. Every purchase I have made has been seamless, from ordering online to receiving the items on time. The product descriptions are accurate.',
  },
  {
    id: 4,
    name: 'Kathryn Murphy',
    role: 'Web Designer',
    image: '/src/assets/bg-images/testiThumb1_2.webp', // Replace with actual image path
    rating: 5,
    quote:
      'Techo has completely transformed our web development process. The user-friendly interface and powerful features make building and maintaining our website a breeze. The customer support team is always responsive and helpful, ensuring we get the most out of their platform. Highly recommended!',
  },
];

const TestimonialsSection = () => {
  return (
    <section className='container mx-auto lg:max-w-[1300px] overlow-hidden'>
      <div className='text-center mb-10 items-center justify-center'>
        <div className='flex gap-3 items-center justify-center text-shadow'>
          <span>
            <img src={titleIcon} />
          </span>
          <h4 className='uppercase tracking-wider font-bold text-red-500'>
            Testimonials
          </h4>
          <span>
            <img src={titleIcon} />
          </span>
        </div>
        <h2 className='text-3xl md:text-4xl font-bold text-black'>
          What Happy Clients Say About Us?
        </h2>
      </div>
      {/* Swiper Section */}
      <div className='items-center justify-center mx-auto overflow-hidden'>
        <Swiper
          slidesPerView={1} /* Default for mobile view */
          spaceBetween={20} /* Default space */
          breakpoints={{
            575: {
              slidesPerView: 1 /* Mobile view */,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2 /* Medium view (md) */,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2 /* Large view (lg) */,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className='testimonial-swiper'
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true} /* Infinite loop */
          style={{ overflow: 'visible' }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className='flex flex-col lg:flex-row items-center justify-center p-6 bg-white rounded-xl shadow-lg relative max-w-full'>
                <div className='lg:w-1/3 p-4 text-center'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-24 h-24 rounded-full mx-auto mb-4'
                  />
                  <h3 className='text-xl font-semibold'>{testimonial.name}</h3>
                  <p className='text-sm text-gray-500'>{testimonial.role}</p>
                  <div className='flex justify-center mt-2'>
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, index) => (
                        <span key={index} className='text-orange-400 text-xl'>
                          ★
                        </span>
                      ))}
                  </div>
                </div>
                <div className='lg:w-2/3 p-4'>
                  <p className='text-gray-600 text-left'>{testimonial.quote}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}{' '}
          <div className='absolute  -top-20  left-10'>
            <div className='testimonials swiper-button-prev  top-1/2 transform -translate-y-1/2 text-white z-20'>
              <i className='fas fa-chevron-left text-2xl text-red-500 hover:text-red-600'></i>
            </div>
            <div className='testimonials swiper-button-next a top-1/2 transform -translate-y-1/2 text-white z-20 '>
              <i className='fas fa-chevron-right text-2xl text-red-500 hover:text-red-600'></i>
            </div>
          </div>
          {/* Pagination Dots */}
          <div className='absolute right-2 top-28 w-20'>
            <div className='swiper-pagination absolute bottom-4 right-4 z-20 text-red-500'></div>
          </div>
        </Swiper>
      </div>

      <div className='text-center mt-8'>
        <a
          href='/testimonials'
          className='inline-block bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300'
        >
          See All Testimonials
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
