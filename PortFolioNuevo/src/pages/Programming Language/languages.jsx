import React from "react";
import imagen1 from "../../../public/assets/html.jpg";
import imagen2 from "../../../public/assets/css3.jpg";
import imagen3 from "../../../public/assets/javascript.jpg";
import imagen4 from "../../../public/assets/node.jpg";
import imagen5 from "../../../public/assets/postgres.jpg";
import imagen6 from "../../../public/assets/react.jpg";
import imagen7 from "../../../public/assets/redux.jpg";
import imagen8 from "../../../public/assets/bootstrap.jpg";
import imagen9 from "../../../public/assets/git.jpg";
import imagen10 from "../../../public/assets/nextJS.png"
import imagen11 from "../../../public/assets/Tailwind.png"
import Image from "next/image";
import styles from "./language.module.css";
import { useLightMode } from '../Components/LightModeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import enTranslations from '../../locales/en';
import esTranslations from '../../locales/es';

const Languages = () => {
    const { lightMode, toggleLightMode } = useLightMode();
    const { currentLanguage } = useLanguage();
    const translations = currentLanguage === 'en' ? enTranslations : esTranslations;

    const technologies = [
        { name: "HTML", image: imagen1 },
        { name: "CSS3", image: imagen2 },
        { name: "JAVASCRIPT", image: imagen3 },
        { name: "NEXT JS", image: imagen10 },
        { name: "TAILWIND CSS", image: imagen11 },
        { name: "NODE JS", image: imagen4 },
        { name: "POSTGRE SQL", image: imagen5 },
        { name: "REACT JS", image: imagen6 },
        { name: "REDUX", image: imagen7 },
        { name: "BOOTSTRAP", image: imagen8 },
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
                            className={`${lightMode ? styles.cardLight_container : styles.card_container
                                }`}
                        >
                            <div
                                className={`${lightMode ? styles.cardLight : styles.card
                                    } flex flex-col items-center`}
                            >
                                <div
                                    className={`${lightMode ? styles.lightMode : styles.img_content
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
                <div className={`${lightMode ? styles.cardLight_container : styles.card_container
                    }`}>
                    <div
                        className={`${lightMode ? styles.cardLight : styles.card
                            } flex flex-col items-center`}
                    >
                        <div
                            className={`${lightMode ? styles.lightMode : styles.img_content
                                }`}
                        >
                            <Image src={imagen9} alt="Git" />
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
