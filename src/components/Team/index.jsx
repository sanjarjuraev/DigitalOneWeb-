/** @format */
import Icon1 from '/src/assets/bg-images/teamThumb1_1.webp';
import Icon2 from '/src/assets/bg-images/teamThumb1_2.webp';
import Icon3 from '/src/assets/bg-images/teamThumb1_3.webp';
import './Team.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import titleIcon from '/src/assets/icons/title_icons.png';
const teamMembers = [
  {
    id: 1,
    name: 'Wade Warren',
    role: 'Senior UI/UX Designer',
    imgSrc: Icon1, // Replace with actual image path
  },
  {
    id: 2,
    name: 'Wade Warren',
    role: 'CEO & Senior Backend Engineer',
    imgSrc: Icon2,
  },
  {
    id: 3,
    name: 'Albert Flores',
    role: 'Senior Frontend Engineer',
    imgSrc: Icon3,
  },
  {
    id: 4,
    name: 'Wade Warren',
    role: 'Senior UI/UX Designer',
    imgSrc: Icon1, // Replace with actual image path
  },
  {
    id: 5,
    name: 'Wade Warren',
    role: 'CEO & Senior Backend Engineer',
    imgSrc: Icon2,
  },
  {
    id: 6,
    name: 'Albert Flores',
    role: 'Senior Frontend Engineer',
    imgSrc: Icon3,
  },
];

const TeamSection = () => {
  return (
    <section>
      <div className="text-center mb-10 items-center justify-center team-text-bg">
        <div className="flex gap-3 items-center justify-center">
          <span>
            <img src={titleIcon} />
          </span>
          <h5 className="text-red-500 uppercase tracking-wider font-semibold">
            Our Team Member
          </h5>
          <span>
            <img src={titleIcon} />
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          See Our Skilled Expert Team
        </h2>
      </div>
      <div className="flex relative justify-center gap-8 flex-wrap mt-32 lg:max-w-[1175px] mx-auto overflow-x-visible h-[370px]">
        <Swiper
          slidesPerView={1} // Default for mobile view
          spaceBetween={20} // Default space
          breakpoints={{
            575: {
              slidesPerView: 1, // Mobile view
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, // Medium view (md)
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // Large view (lg)
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="team-swiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true} // Infinite loop
          style={{ overflow: 'visible', width: '100%' }} // Ensure Swiper takes full width
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div
                className="relative group overflow-visible shadow-lg profile-card"
                style={{ width: '370px', height: '343px' }}
              >
                <div className="profile-card2 absolute bottom-0">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-transform duration-300">
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="object-cover mx-auto"
                      style={{ height: '452px', maxWidth: '264px' }}
                    />
                  </div>
                  <div className="absolute z-10 bottom-8 text-center bg-red-500 py-2 px-4 items-center justify-center right-1/2 translate-x-1/2 rounded cursor-pointer">
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-white">{member.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;
