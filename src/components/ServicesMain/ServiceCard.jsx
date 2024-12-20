import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  const cardVariants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'eseaIn',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      key={service.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden card2"
    >
      <div className="overflow-hidden   h-44 rounded-t-lg">
        <img
          src={service.mainImg}
          alt={service.title}
          className="w-full h-48 object-cover main-image"
        />
      </div>

      <div className="icon-container2">
        <img
          src={service.icon}
          alt={`${service.title} Icon`}
          className="icon"
        />
      </div>
      {/* Content below the image */}
      <div className="p-6 mt-4 ">
        <h3 className="text-xl font-semibold mb-2 text-black">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <a
          href="#"
          className="text-pink-600 hover:text-red-500 font-semibold inline-flex items-center"
        >
          Read More <span className="ml-2">→</span>
        </a>
      </div>
    </motion.div>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    mainImg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default ServiceCard;
