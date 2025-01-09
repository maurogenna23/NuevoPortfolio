'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLightMode } from '../../LightModeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import enTranslations from '../../locales/en';
import esTranslations from '../../locales/es';
import imagen from '../../../public/assets/fotoLinkedin.jpg';

const About = () => {
  const { lightMode } = useLightMode();
  const { currentLanguage } = useLanguage();
  const translations = currentLanguage === 'en' ? enTranslations : esTranslations;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <motion.div
          id="about-section"
          className="p-2 my-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
      >
        <div
            className={`container mx-auto p-10 px-6 rounded-lg shadow-lg ${
                lightMode ? 'bg-black bg-opacity-90 text-white' : 'bg-white text-black'
            } transition-all duration-300 ease-in-out`}
        >
          <motion.h2
              className="text-4xl font-bold text-center text-green-400 mb-16"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
          >
            {translations.about.title}
          </motion.h2>
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12">
            <motion.div
                className="lg:w-1/2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl mx-auto">
                <Image
                    src={imagen}
                    alt="Profile"
                    layout="responsive"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
            </motion.div>
            <motion.div
                className="lg:w-1/2 text-center lg:text-left space-y-4"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[1, 2, 3, 4].map((i) => (
                  <p key={i} className="text-lg leading-relaxed">
                    {translations.about.content[`paragraph${i}`]}
                  </p>
              ))}
            </motion.div>
          </div>
          <motion.div
              className="flex justify-center mt-12 space-x-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
          >
            {['spanish', 'english'].map((lang) => (
                <a
                    key={lang}
                    href={lang === 'spanish' ? "https://docs.google.com/document/d/10h8wy61Rg6mIZqZL7FHccDj9FzbikV--oaiLyhikoRs/edit?usp=drive_link" : "https://docs.google.com/document/d/1wCAmOAYRKZ3MGWBGpWJov_WbvkJdIKVonRpvMYCNOQ0/edit?usp=drive_link"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                  <button className={`
                px-6 py-3 rounded-lg text-white font-semibold
                transition duration-300 ease-in-out
                ${lang === 'spanish' ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}
                transform group-hover:scale-105 group-hover:shadow-lg
              `}>
                    {translations.about.cvLinks[lang]}
                  </button>
                </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
  );
};

export default About;

