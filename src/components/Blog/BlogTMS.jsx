import { useState } from 'react';
import mainImage from '/src/assets/bg-images/blog-main-tms.png';

const Blog1 = () => {
  const [activeCategory, setActiveCategory] = useState('Software Services');

  const categories = [
    { name: 'Software Services', count: 7 },
    { name: 'UI/UX Design', count: 18 },
    { name: 'IT Consultancy', count: 11 },
    { name: 'App Development', count: 12 },
    { name: 'Database Security', count: 8 },
    { name: 'Level Up', count: 8 },
  ];
  return (
    <div className=" text-gray-800 xl:pt-20">
      <header className="text-center py-20 blog-header-tms">
        <div className="header-title">
          <h1 className="text-white text-5xl font-bold">Digital One Blogs</h1>
          <p className="text-white mt-4">
            <a href="/">Home</a>
            <span className="mx-1">&gt;</span>
            <a href="/blogs">Blogs</a>
            <span className="mx-1">&gt;</span>
            <span className="text-red-500 font-bold">TMS</span>
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <section className="lg:col-span-2">
          <article className="bg-white p-6 shadow-md rounded-md">
            <img
              className="rounded-md mb-4 w-full h-64 object-cover"
              src={mainImage}
              alt="Logistics Management"
            />
            <h2 className="text-2xl font-bold mb-4">
              Unlock Efficiency and Growth with Our Transport Management System
              (TMS)
            </h2>
            <p className="mb-4">
              In today&apos;s fast-paced logistics environment, businesses of
              all sizes—from small owner-operator companies to large logistics
              enterprises—must operate with maximum efficiency to remain
              competitive. Our Transport Management System (TMS) offers a
              complete solution for streamlining your logistics operations,
              reducing administrative burdens, and providing real-time
              visibility across all aspects of your transportation network. From
              team formation to live load tracking, our TMS is designed to
              empower logistics businesses with tools that simplify processes,
              optimize fleet management, and ultimately, enhance profitability.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              Why Choose a TMS for Your Logistics Business?
            </h2>
            <p className="mb-4">
              The logistics sector is constantly evolving, with rising customer
              expectations, compliance requirements, and the need for timely,
              cost-effective services. A robust Transport Management System is
              essential for addressing these challenges and enhancing
              operational efficiency.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              How Our TMS Works: Key Features and Benefits
            </h2>
            <ul className="list-disc list-inside mb-6">
              <li>Live load tracking via Google Maps</li>
              <li>Load history tracking for a complete audit trail</li>
              <li>Automated load creation to save time</li>
              <li>
                Full-service departmental management, from dispatch to fleet
                management
              </li>
              <li>
                Customizable user access levels to ensure secure data access
              </li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Comprehensive Team Formation & Documentation Support
            </h2>
            <p>
              We help logistics businesses structure their teams to operate
              effectively: <br />
              <strong>Dispatcher Team:</strong> Ensuring timely coordination and
              load allocation.
              <br />
              <strong>QC Team:</strong> Monitoring quality to maintain customer
              satisfaction.
              <br />
              <strong>HR Team:</strong> Managing recruitment, training, and
              employee retention.
              <br />
              <strong>Accounting Team:</strong> Streamlining invoicing and
              financial management.
              <br />
              <strong>Insurance Team:</strong> Coordinating with providers and
              handling claims.
              <br />
              <strong>Safety and Compliance Team:</strong> Ensuring regulatory
              compliance.
              <br /> <strong>Fuel and Fleet Management:</strong> Tracking costs
              and maintaining vehicle health.
              <br /> This support ensures that each department is set up for
              success, allowing your business to focus on growth.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Team Formation Support
            </h2>
            <p>
              Building an efficient logistics team can be challenging. Our TMS
              provides hands-on assistance in forming teams across all
              operational areas, including dispatch, quality control (QC), HR,
              accounting, insurance, safety, and more. This support ensures that
              each department is set up for success, allowing your business to
              focus on growth.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Effortless Load Creation
            </h2>
            <p>
              Flexible Options Our TMS offers two primary load creation methods,
              simplifying logistics management for any size of operation.
              <br />
              <strong>Manual Load Form:</strong> Manually fill in all necessary
              fields in the load form.
              <br />
              <strong>Automated Load Form with RC File Upload:</strong> Upload
              an RC file, and our system auto-populates load information,
              requiring only a quick review and confirmation. <br />
              With either method, you can add multiple waypoints to optimize
              load routes, reducing transit times and maximizing efficiency.
            </p>
          </article>
        </section>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Search */}
          <div className="bg-white p-4 shadow-md rounded-md">
            <label htmlFor="search" className="text-lg font-bold block mb-2">
              Search
            </label>
            <input
              id="search"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Search here..."
            />
          </div>

          {/* Categories */}
          <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-lg font-bold mb-4">Categories</h3>

            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    href="#"
                    className={`block p-3 rounded-md transition ${
                      activeCategory === category.name
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-red-500 hover:text-white'
                    }`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    {category.name}{' '}
                    <span
                      className={`${activeCategory === category.name ? 'text-white' : 'text-gray-500'}`}
                    >
                      ({category.count})
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-md mr-4"
                    src="https://via.placeholder.com/50"
                    alt="Post Thumbnail"
                  />
                  <div>
                    <p className="font-bold text-blue-500 hover:underline">
                      Keep Your Business Safe & Endure High Availability
                    </p>
                    <small className="text-gray-500">11 Nov, 2024</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-md mr-4"
                    src="https://via.placeholder.com/50"
                    alt="Post Thumbnail"
                  />
                  <div>
                    <p className="font-bold text-blue-500 hover:underline">
                      Tracking the Changes of Retail Industry
                    </p>
                    <small className="text-gray-500">11 Nov, 2024</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-md mr-4"
                    src="https://via.placeholder.com/50"
                    alt="Post Thumbnail"
                  />
                  <div>
                    <p className="font-bold text-blue-500 hover:underline">
                      What&apos;s Holding Back the IT Solution
                    </p>
                    <small className="text-gray-500">11 Nov, 2024</small>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Blog1;
