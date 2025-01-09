import React from 'react';
import { useLightMode } from '../../LightModeContext';

const Footer = () => {
  const { lightMode, toggleLightMode } = useLightMode();
  return (
    <div>
      <footer
        className={`flex flex-col items-center backdrop-blur-sm text-center ${lightMode ? 'bg-white bg-opacity-70' : 'bg-black bg-opacity-80'}`}
      >
        <div className="container pt-9">
          <div className="mb-9 flex justify-center">
            <a
              href="https://www.linkedin.com/in/mauro-genna-777a84237/"
              className={`m-3 transition duration-300 text-gray-400 hover:text-white dark:text-neutral-200 ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/maurogenna23"
              className={`m-3 transition duration-300  hover:text-white dark:text-neutral-200 ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=2616976887"
              className={`m-3 transition duration-300 text-gray-400 hover:text-white dark:text-neutral-200 ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}
            >
              <i className="fab fa-whatsapp fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
          <p className="mr-2 text-gray-400">© 2023 Copyright:</p>
          <p className=" text-gray-400 dark:text-neutral-400">Mauro Genna</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
