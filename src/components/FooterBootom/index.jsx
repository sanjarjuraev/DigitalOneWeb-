const FooterBootom = () => {
  return (
    <div className=' border-t border-gray-700 p-2 bg-red-900'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-4'>
        <p className='text-sm text-gray-400'>
          © All Copyright 2024 by Digital One
        </p>
        <div className='flex space-x-6 mt-4 md:mt-0'>
          <a href='#' className='text-gray-400 hover:text-white'>
            Terms & Condition
          </a>
          <a href='#' className='text-gray-400 hover:text-white'>
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBootom;
