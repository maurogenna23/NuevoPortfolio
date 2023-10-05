import React, { useState } from 'react';
import { useLanguage } from './contexts/LanguageContext';
import styles from './styles.module.css';
import Image from 'next/image';
import English from '../public/assets/English.png'
import España from '../public/assets/españa.png'

const LanguageToggle = () => {
    const { toggleLanguage, currentLanguage } = useLanguage();
    const [isEnglish, setIsEnglish] = useState(currentLanguage === 'english');

    const handleToggle = () => {
        toggleLanguage();
        setIsEnglish(!isEnglish);
    };

    return (
        <div className={`${styles.toggle_switch}`}>
            <label className={styles.switch_label}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    onClick={handleToggle}
                />
                <div className={styles.slider}>
                    <Image src={English} alt="English flag" />
                    <Image src={España} alt="Spanish flag" />
                </div>
            </label>
        </div>
    );
};

export default LanguageToggle;
