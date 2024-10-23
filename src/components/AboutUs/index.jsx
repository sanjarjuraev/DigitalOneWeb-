/** @format */

import Icon1 from '/src/assets/icons/about_image1.png';
import Icon2 from '/src/assets/icons/about_image2.png';
import Icon3 from '/src/assets/icons/about_image3.png';
import Avatar from '/src/assets/bg-images/aboutProfile1_1.webp';
import aboutTumb1 from '/src/assets/bg-images/aboutThumb1_1.webp';
import aboutTumb2 from '/src/assets/bg-images/aboutThumb1_2.webp';
import titleIcon from '/src/assets/icons/title_icons.png';
// import Logo2 from '/src/assets/icons/D112.png';
import { ReactComponent as Logo } from '/src/assets/D112.svg'; // Adjust the path as needed

import './About.css';
const BusinessSuccessSection = () => {
  return (
    <section className='container mx-auto lg:pt-20  px-4 lg:px-40 about-us'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
        {/* Left Column */}
        <div className='relative lg:order-1 order-1'>
          {/* Large Image */}
          <div className='relative'>
            <img
              src={aboutTumb1}
              alt='Team working'
              className='rounded-lg'
              width='439px'
              height='483px'
            />
            {/* Satisfied Clients Box */}
            <div className='absolute top-6 -left-10 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-2 movingX'>
              <div className='bg-pink-200 p-2 rounded-full'>
                <img src={Icon1} alt='Problem Solving' className='w-8 h-8' />
              </div>
              <div>
                <h4 className='text-lg font-semibold text-black'>20+</h4>
                <p className='text-gray-500'>Satisfied Clients</p>
              </div>
            </div>
            {/* Small Video Box */}
            <div className='absolute bottom-3 right-2 lg:bottom-8 lg:right-5'>
              <div className='relative border-4 border-white rounded-lg'>
                <img
                  src={aboutTumb2}
                  alt='Meeting'
                  className='w-full rounded-lg shadow-lg'
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <button className='text-white text-4xl video-play-button'>
                    <i className='fas fa-play-circle'></i>
                  </button>
                </div>
              </div>
            </div>
            <div className='absolute top-3 right-2 lg:top-8 lg:right-5 w-8 h-8 z-20 movingY hidden lg:block'>
              <Logo width='80px' height='80px' />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='relative lg:order-2 order-2 lg:max-w-lg'>
          <div className='flex gap-3 items-center'>
            <span>
              <img src={titleIcon} />
            </span>
            <h5 className='text-red-500 uppercase tracking-wider font-semibold'>
              What we do
            </h5>
            <span>
              <img src={titleIcon} />
            </span>
          </div>

          <h2 className='text-3xl lg:text-4xl font-bold mb-6 text-black'>
            We Are Increasing Business Success With Technology
          </h2>
          <p className='text-gray-600 mb-8'>
            Harnessing cutting-edge technology and innovative solutions, we help
            businesses optimize their operations, boost efficiency, and achieve
            sustainable growth in today&#39;s digital landscape.
          </p>

          {/* Info Boxes */}
          <div className='space-y-4'>
            {/* Problem Solving */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              {/* <div className='grid grid-cols-2 items-center space-x-2'>
                <div
                  className='bg-pink-200 flex items-center justify-center'
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '100%',
                    padding: 4,
                  }}
                >
                  <img
                    src={Icon2}
                    alt='Mission & Vision'
                    width={32}
                    height={32}
                  />
                </div>
                <div className='col-span-2'>
                  <h4 className='text-lg font-semibold text-black'>
                    Problem Solving
                  </h4>
                  <p className='text-gray-500'>
                    Delivering swift, effective solutions.
                  </p>
                </div>
              </div> */}
              <div className='grid grid-cols-4 items-center gap-2'>
                <div
                  className='bg-pink-200 flex items-center justify-center rounded-full'
                  style={{
                    width: '3rem', // 48px
                    height: '3rem', // 48px
                  }}
                >
                  <img
                    src={Icon2}
                    alt='Problem Solving'
                    className='w-8 h-8' // 32px
                  />
                </div>
                <div className='col-span-3'>
                  <h4 className='text-lg font-semibold text-black'>
                    Problem Solving
                  </h4>
                  <p className='text-gray-500'>
                    Delivering swift, effective solutions.
                  </p>
                </div>
              </div>
              {/* Mission & Vision */}{' '}
              <div className='grid grid-cols-4 items-center gap-2'>
                <div
                  className='bg-pink-200 flex items-center justify-center rounded-full'
                  style={{
                    width: '3rem', // 48px
                    height: '3rem', // 48px
                  }}
                >
                  <img src={Icon3} alt='Mission & Vision' className='w-8 h-8' />
                </div>
                <div className='col-span-3'>
                  <h4 className='text-lg font-semibold text-black'>
                    Mission & Vision
                  </h4>
                  <p className='text-gray-500'>
                    Driving innovation for a sustainable future.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder */}
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-16 gap-4'>
              <div className='flex items-center space-x-4 lg:col-span-2'>
                <div className='bg-pink-200  rounded-full'>
                  <img src={Avatar} alt='Founder' className='w-12 h-12' />
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-black'>
                    Saydullo To&#39;xtasinov
                  </h4>
                  <p className='text-gray-500'>Co-Founder</p>
                </div>
              </div>
              {/* Call to Action Button */}
              <div className='flex items-center justify-center space-x-4 mb-5 sm:mb-0'>
                <button
                  className='btn-cubic px-2 md:px-4 py-2 md:py-2 rounded-full hover:rounded-full transition ease-in-out duration-500
'
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSuccessSection;
