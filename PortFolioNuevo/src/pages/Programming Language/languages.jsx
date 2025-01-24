import React from 'react';
import git from '../../../public/assets/git.jpg';
import react from '../../../public/assets/react.jpg';
import nextJs from '../../../public/assets/nextjs.png';
import materialUi from '../../../public/assets/material-ui.jpg';
import typescript from '../../../public/assets/typescript.png';
import nestJs from '../../../public/assets/nest.png';
import sql from '../../../public/assets/sql.png';
import Image from 'next/image';
import styles from './language.module.css';
import { useLightMode } from '../../LightModeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import enTranslations from '../../locales/en';
import esTranslations from '../../locales/es';

const Languages = () => {
  const { lightMode, toggleLightMode } = useLightMode();
  const { currentLanguage } = useLanguage();
  const translations =
    currentLanguage === 'en' ? enTranslations : esTranslations;

  const technologies = [
    { name: 'REACT', image: react },
    { name: 'NEXT JS', image: nextJs },
    { name: 'MATERIAL UI', image: materialUi },
    { name: 'TYPESCRIPT', image: typescript },
    { name: 'NEST JS', image: nestJs },
    { name: 'SQL', image: sql },
  ];

  return (
    <div className={`p-2 ${styles.container}`}>
      <div>
        <h2 className="text-4xl font-bold text-center text-green-400 mb-24">
          {translations.technology.title}
        </h2>
      </div>
      <div className={styles.subContainer}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 mb-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`${
                lightMode ? styles.cardLight_container : styles.card_container
              }`}
            >
              <div
                className={`${
                  lightMode ? styles.cardLight : styles.card
                } flex flex-col items-center`}
              >
                <div
                  className={`${
                    lightMode ? styles.lightMode : styles.img_content
                  }`}
                >
                  <Image src={tech.image} alt="" />
                </div>
                <div className={styles.content}>
                  <p className={styles.heading}>{tech.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${
            lightMode ? styles.cardLight_container : styles.card_container
          }`}
        >
          <div
            className={`${
              lightMode ? styles.cardLight : styles.card
            } flex flex-col items-center`}
          >
            <div
              className={`${lightMode ? styles.lightMode : styles.img_content}`}
            >
              <Image src={git} alt="Git" />
            </div>
            <div className={styles.content}>
              <p className={styles.heading}>GIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
