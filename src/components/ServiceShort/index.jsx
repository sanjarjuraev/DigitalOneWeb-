/** @format */

// Icons for the services (Make sure these are your image paths)
import Icon1 from '/src/assets/icons/serviceIcon1_1.png'
import Icon2 from '/src/assets/icons/serviceIcon1_2.png'
import Icon3 from '/src/assets/icons/serviceIcon1_3.png'
import Icon4 from '/src/assets/icons/serviceIcon1_4.png'
import Icon5 from '/src/assets/icons/team-group.png'
import './ServiceShort.css'

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
]

const ServiceCards = () => {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:px-4 px-10 lg:px-12 py-8 items-center justify-center lg:absolute lg:-top-40 lg:z-30'>
      {services.map((service) => (
        <div
          key={service.id}
          className='card text-black hover:text-white relative'
        >
          {/* The hover mask */}
          <div className='card-mask'></div>
          <div className='absolute inset-0 flex flex-col  justify-between p-10  z-20'>
            <div className='icon-container'>
              <img
                src={service.icon}
                alt={`${service.title} Icon`}
                className='icon'
              />
            </div>
            <h3 className='text-xl font-semibold mb-2 text-center '>
              {service.title}
            </h3>
            <p className='text-gray-500 text-center '>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServiceCards
