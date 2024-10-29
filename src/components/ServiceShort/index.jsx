/** @format */

// Icons for the services (Make sure these are your image paths)
import Icon1 from '/src/assets/icons/serviceIcon1_1.png';
import Icon2 from '/src/assets/icons/serviceIcon1_2.png';
import Icon3 from '/src/assets/icons/serviceIcon1_3.png';
import Icon4 from '/src/assets/icons/serviceIcon1_4.png';
import Icon5 from '/src/assets/icons/team-group.png';
import './ServiceShort.css';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const services = [
  {
    id: 1,
    title: 'Data Analytics',
    description:
      'Data analytics is the process of analyzing raw data to extract insights.',
    icon: Icon1,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'UI/UX design is a crucial aspect of digital interfaces.',
    icon: Icon2,
  },
  {
    id: 3,
    title: 'App Development',
    description:
      'App development focuses on building software for various platforms.',
    icon: Icon4,
  },
  {
    id: 4,
    title: 'Automatization',
    description:
      'Automatization improves production efficiency by reducing manual tasks.',
    icon: Icon3,
  },
  {
    id: 5,
    title: 'Dedicated Teams',
    description:
      'Dedicated teams ensure full focus on a project to deliver optimal results.',
    icon: Icon5,
  },
];

const ServiceCards = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <motion.div className="card-wrapper w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 xl:gap-8 md:px-4 px-10 lg:px-12 py-8 items-center justify-center lg:absolute lg:-top-40 lg:z-30">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={
            isMobile
              ? {
                  opacity: 0,
                  // Slide from right if index is odd, else from left
                  x: index % 2 === 0 ? 50 : -50,
                }
              : { opacity: 0, y: 150 }
          }
          whileInView={
            isMobile
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1 },
                }
              : {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1 },
                }
          }
          viewport={{ once: true }}
          className="card text-black hover:text-white relative border-double m-auto"
        >
          {/* The hover mask */}
          <div className="card-mask"></div>
          <div className="absolute inset-0 flex flex-col justify-start gap-4 p-5 z-20 card-child-wrapper">
            <div className="icon-container">
              <img
                src={service.icon}
                alt={`${service.title} Icon`}
                className="icon"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-gray-500 text-center">{service.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceCards;
