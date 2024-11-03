import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './card.css';
import { motion } from 'framer-motion';

function BlogCard({ blog }) {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };
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
      className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm mx-auto"
    >
      <div className="relative w-[384px] h-[250px] flex items-center justify-center hover-zoom hover-shin box-content">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full  object-cover rounded-t-lg"
        />
        <div className="absolute -bottom-5 left-4 bg-white  text-white rounded px-1 py-1 text-sm font-semibold">
          <span className="block text-lg bg-red-600 text-center rounded">
            {blog?.date}
          </span>
          <span className="uppercase text-xs text-gray-800">{blog?.month}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>
            <i className="fas fa-user"></i> {blog.author}
          </span>
          <span>&#183;</span>
          <span>
            <i className="fas fa-tag"></i> {blog.category}
          </span>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          {blog.title}
        </h2>
        <p
          className="mt-2 text-blue-500 hover:underline cursor-pointer"
          onClick={() => handleReadMore(blog?.id)}
        >
          Read More &rarr;
        </p>
      </div>
    </motion.div>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCard;
