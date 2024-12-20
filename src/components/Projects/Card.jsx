import PropTypes from 'prop-types';
import './Projects.css';
import { motion } from 'framer-motion';

const Card = ({ item }) => {
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
    <motion.div variants={cardVariants} className="hover14 ">
      <figure className="border-double border-4 border-red-600">
        <div
          className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 hover15"
          style={{
            backgroundImage: `url(${item?.image})`,
            width: 'inherit',
            height: 'inherit',
          }}
        >
          {/* Card content */}
          <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600">{item?.description}</p>
              <h3 className="text-xl font-semibold text-gray-800">
                {item?.title}
              </h3>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
              <span className="text-lg">→</span>
            </div>
          </div>
        </div>
      </figure>
    </motion.div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
