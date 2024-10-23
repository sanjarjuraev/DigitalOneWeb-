import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTotal =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;

    if (scrollTotal === 0) return; // Avoid division by zero

    const scrollPercentage = (currentScroll / scrollTotal) * 100;
    setScrollPosition(scrollPercentage);

    // Show button when scrolled down more than one screen height (viewport height)
    if (currentScroll > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div className='fixed bottom-6 right-6'>
          <div
            className='relative cursor-pointer w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-lg'
            onClick={scrollToTop}
            style={{
              background: `conic-gradient(red ${scrollPosition}%, #e0e0e0 ${scrollPosition}%)`,
            }}
          >
            <div className='absolute inset-1 bg-white rounded-full flex items-center justify-center'>
              <span className='text-red-500 text-lg'>↑</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
