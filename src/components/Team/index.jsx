/** @format */
import Icon1 from '/src/assets/bg-images/teamThumb1_1.webp';
import Icon2 from '/src/assets/bg-images/teamThumb1_2.webp';
import Icon3 from '/src/assets/bg-images/teamThumb1_3.webp';
import './Team.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import titleIcon from '/src/assets/icons/title_icons.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Wade Warren',
    role: 'Senior UI/UX Designer',
    imgSrc: Icon1,
    slug: 'wade-waren2',
  },
  {
    id: 2,
    name: 'Wade Warren',
    role: 'CEO & Senior Backend Engineer',
    imgSrc: Icon2,
    slug: 'wade-waren',
  },
  {
    id: 3,
    name: 'Sanjar Juraev',
    role: 'Senior Frontend Engineer',
    imgSrc: Icon2,
    slug: 'sanjar-juraev',
  },
  {
    id: 4,
    name: 'Wade Warren',
    role: 'Senior UI/UX Designer',
    imgSrc: Icon1,
    slug: 'wade-waren3',
  },
  {
    id: 5,
    name: 'Wade Warren',
    role: 'CEO & Senior Backend Engineer',
    imgSrc: Icon2,
    slug: 'wade-waren4',
  },
  {
    id: 6,
    name: 'Albert Flores',
    role: 'Senior Frontend Engineer',
    imgSrc: Icon3,
    slug: 'albert-flores2',
  },
];

const TeamSection = () => {
  const navigate = useNavigate();

  // Create refs and state to manage visibility of each member
  const refs = useRef([]);
  const [inViewStates, setInViewStates] = useState(
    Array(teamMembers.length).fill(false)
  );

  useEffect(() => {
    const handleScroll = () => {
      const updatedInViewStates = refs.current.map((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return inViewStates[index];
      });

      setInViewStates(updatedInViewStates);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check if elements are in view
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inViewStates]);

  const handleClick = (slug) => {
    navigate(`/team/${slug}`);
  };

  return (
    <section>
      <div className="text-center mb-10 items-center justify-center team-text-bg">
        <div className="flex gap-3 items-center justify-center">
          <span>
            <img src={titleIcon} alt="title icon" />
          </span>
          <h5 className="text-red-500 uppercase tracking-wider font-semibold">
            Our Team Member
          </h5>
          <span>
            <img src={titleIcon} alt="title icon" />
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          See Our Skilled Expert Team
        </h2>
      </div>
      <div className="flex relative justify-center gap-8 flex-wrap mt-32 lg:max-w-[1175px] mx-auto overflow-x-visible h-[370px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            575: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
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
          loop={true}
          style={{ overflow: 'visible', width: '100%' }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={member.id}>
              <motion.div
                ref={(el) => (refs.current[index] = el)}
                className="relative group overflow-visible shadow-lg profile-card"
                style={{ width: '370px', height: '343px' }}
                initial={{ opacity: 0, y: -50 }}
                animate={inViewStates[index] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
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
                  <div
                    className="absolute z-10 bottom-8 text-center bg-red-500 py-2 px-4 items-center justify-center right-1/2 translate-x-1/2 rounded cursor-pointer"
                    onClick={() => handleClick(member.slug)}
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-white">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;
