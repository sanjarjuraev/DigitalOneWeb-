import BlogCard from './BlogCard';
import blog_img1 from '/src/assets/bg-images/blog-1-1.png';
import blog_img2 from '/src/assets/bg-images/blog-2-1.png';
const blogs = [
  {
    id: 1,
    imageUrl: blog_img1,
    title:
      'Unlock Efficiency and Growth with Our Transport Management System (TMS)',
    author: 'Admin',
    category: 'TMS Project',
    date: '21',
    month: 'Oct',
  },
  {
    id: 2,
    imageUrl: blog_img2,
    title:
      'We have started developing e-commerce and WMS for Urgench Pharmacy.',
    author: 'Admin',
    category: 'E-commerce',
    date: '23',
    month: 'Oct',
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/400x300',
    title: 'Which Yoga Hybrid is Right For You?',
    author: 'Admin',
    category: 'UX/UI Design',
    date: '28',
    month: 'Oct',
  },
  // Add more blog posts as needed...
];

function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogGrid;
