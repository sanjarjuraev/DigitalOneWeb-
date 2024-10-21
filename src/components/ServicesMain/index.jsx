import './serviceMain.css';
import Icon1 from '/src/assets/icons/serviceIcon1_1.png';
import Icon2 from '/src/assets/icons/serviceIcon1_2.png';
import Icon3 from '/src/assets/icons/serviceIcon1_3.png';
import Icon4 from '/src/assets/icons/serviceIcon1_4.png';
import Icon11 from '/src/assets/bg-images/software-services.jpg';
import Icon12 from '/src/assets/bg-images/ui-ux.jpg';
import Icon13 from '/src/assets/bg-images/it-consulting.jpg';
import Icon14 from '/src/assets/bg-images/web-dev.jpg';
import Icon15 from '/src/assets/bg-images/database-security.jpg';
const services = [
  {
    id: 1,
    title: 'Software Services',
    mainImg: Icon11,
    description: 'Optimize workflows and productivity.',
    icon: Icon1,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    mainImg: Icon12,
    description: 'Craft engaging digital interfaces.',
    icon: Icon2,
  },
  {
    id: 3,
    title: 'IT Consultancy',
    mainImg: Icon13,
    description: 'Stay ahead with new technologies.',
    icon: Icon3,
  },
  {
    id: 4,
    title: 'Web Development',
    mainImg: Icon14,
    description: 'Tailored solutions for your business.',
    icon: Icon4,
  },
  {
    id: 5,
    title: 'Database Security',
    mainImg: Icon15,
    description: 'Protect your data with security.',
    icon: Icon3,
  },
];

const ServicesSection = () => {
  return (
    <section className='py-12  container mx-auto w-full'>
      <div className='text-center mb-10'>
        <p className='text-purple-600 uppercase tracking-wider font-semibold'>
          Our Feathered Services
        </p>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
          We Provide Exclusive Service For Your Business
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4'>
        {services.map((service) => (
          <div
            key={service.id}
            className='bg-white shadow-lg rounded-lg overflow-hidden card2'
          >
            {/* Image at the top */}
            <img

              src={service.mainImg}
              alt={service.title}
              className='w-full h-48 object-cover main-image'
            />
            <div className='icon-container2'>
              <img
                src={service.icon}
                alt={`${service.title} Icon`}
                className='icon'
              />
            </div>
            {/* Content below the image */}
            <div className='p-6 mt-4'>
              <h3 className='text-xl font-semibold mb-4 text-black'>
                {service.title}
              </h3>
              <p className='text-gray-600 mb-4'>{service.description}</p>
              <a
                href='#'
                className='text-purple-600 hover:text-purple-800 font-semibold inline-flex items-center'
              >
                Read More <span className='ml-2'>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
