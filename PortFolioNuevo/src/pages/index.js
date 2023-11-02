import React, { useState, useEffect, useRef } from 'react';
import styles from './home.module.css';
import imagen from '../../public/assets/Home.png';
import About from '../pages/About/about';
import Certificaciones from '../pages/Certficaciones/certificaciones';
import Proyectos from '../pages/Proyects/proyect';
import ContactForm from '../pages/Contact/contact';
import Languages from '../pages/Programming Language/languages';
import Image from 'next/image';
import { useLightMode } from '../LightModeContext';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from '../LanguageToggle';
import enTranslations from '../locales/en';
import esTranslations from '../locales/es';

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { lightMode, toggleLightMode } = useLightMode();
  const { currentLanguage } = useLanguage();
  const translations = currentLanguage === 'en' ? enTranslations : esTranslations;

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón "Back to Top" cuando se desplaza más de 400 píxeles hacia abajo
      if (window.scrollY > 1000) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // Agregar el event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Remover el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    // Desplazar la página al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHireMeClick = () => {
    // Desplazar la página a la sección de contacto
    const contactSection = document.getElementById('Contact');
    window.scrollTo({ top: contactSection.offsetTop, behavior: 'smooth' });
  };


  return (

    <main className={`flex flex-col justify-center h-full ${lightMode ? 'bg-gray-100' : ''}`}>
      <section id='home' className={`flex flex-col lg:flex-row ${lightMode ? 'bg-gray-300' : 'bg-zinc-900'}`}>
        <div className='mt-24 flex justify-between'>
          <div className={styles.toggle_switch}>
            <label className={styles.switch_label}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={lightMode}
                onChange={toggleLightMode}
              />
              <span className={styles.slider}></span>
            </label>
          </div>
          <LanguageToggle />
        </div>
        <div className="flex flex-col lg:flex-row rounded-lg mb-4 md:mb-44 items-center">
          <div className="w-full xl:w-1/2 p-4 md:p-24 mt-6 xl:text-left">
            <h3 className={`font-semibold text-xl sm:text-xl mb-2 sm:mb-5 mt-10 ${lightMode ? 'text-green-600' : 'text-green-400'}`}>
              {translations.home.hello}
            </h3>
            <h2 className={`font-semibold text-2xl sm:text-5xl mb-2 sm:mb-5  mt-2 sm:mt-5 ${lightMode ? 'text-neutral-900' : 'text-gray-200'}`}>
              {translations.home.welcome}
            </h2>
            <p className={`mb-4 sm:mb-6 font-medium ${lightMode ? 'text-neutral-900' : 'text-gray-200'}`}>
              {translations.home.description}
            </p>
            <section>
              <button
                className='inline-block cursor-pointer rounded bg-green-700 px-4 sm:px-6 pb-2 pt-2.5 text-xs sm:text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]'
                onClick={handleHireMeClick}
              >
                {translations.home.hireMe}
              </button>
            </section>
          </div>
          <div className="w-full xl:w-1/2 flex items-center justify-center">
            <Image
              src={imagen}
              alt="Imagen de Home"
              className="w-full md:w-3/4 h-2/4 mt-4 xl:mt-40 rounded-full brightness-200"
            />
          </div>
        </div>
      </section>

      <hr className={`w-4/5 mx-auto ${lightMode ? 'border-t-2 border-gray-700 bg-gray-800' : 'border-t-2 border-gray-300 bg-gray-100'
        }`} />
      <section id='about' className='mt-60 mb-60'>
        <About />
      </section>
      <hr className={`w-4/5 mx-auto ${lightMode ? 'border-t-2 border-gray-700 bg-gray-800' : 'border-t-2 border-gray-300 bg-gray-100'
        }`} />
      <section id='Certificaciones'>
        <Certificaciones />
      </section>
      <hr className={`w-4/5 mx-auto ${lightMode ? 'border-t-2 border-gray-700 bg-gray-800' : 'border-t-2 border-gray-300 bg-gray-100'
        }`} />
      <section id='Proyectos'>
        <Proyectos />
      </section>
      <hr className={`w-4/5 mx-auto ${lightMode ? 'border-t-2 border-gray-700 bg-gray-800' : 'border-t-2 border-gray-300 bg-gray-100'
        }`} />
      <section id='Languages'>
        <Languages />
      </section>
      <hr className={`w-4/5 mx-auto ${lightMode ? 'border-t-2 border-gray-700 bg-gray-800' : 'border-t-2 border-gray-300 bg-gray-100'
        }`} />
      <section id='Contact'>
        <ContactForm />
      </section>

      <div className="hidden lg:block">
        {showBackToTop && (
          <button className="fixed bottom-3 right-5 p-2 bg-blue-500 text-white rounded-full cursor-pointer transition duration-300 animated animate__fadeIn hover:bg-blue-700" onClick={handleBackToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12l-4-4-4 4M12 16V9" />
            </svg>
          </button>
        )}
      </div>
    </main>
  );
};

export default Home;
