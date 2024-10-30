import BlogGrid from './BlogGrid';

const BlogPage = () => {
  return (
    <div className="min-h-screen xl:pt-20">
      <header className="text-center py-20 blog-header">
        <h1 className="text-white text-5xl font-bold">Digital One Blogs</h1>
        <p className="text-white mt-4">
          <a href="/">Home</a>
          <span className="mx-1">&gt;</span>
          <span className="text-red-500 font-bold">Blog Grid</span>
        </p>
      </header>
      <main className="container mx-auto px-4 p-12">
        <BlogGrid />
      </main>
    </div>
  );
};

export default BlogPage;
