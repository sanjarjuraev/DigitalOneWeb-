import BlogCard from './BlogCard';

const blogs = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/400x300',
    title: 'We have recently started working on an ERP project for GlassPro',
    author: 'Admin',
    category: 'ERP Project',
    date: '21',
    month: 'Oct',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/400x300',
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
