import React from 'react';
import styles from './certificaciones.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useLightMode } from '../../LightModeContext';
import imagen1 from '../../../public/assets/imagen1.png';
import { useLanguage } from '../../contexts/LanguageContext';
import enTranslations from '../../locales/en';
import esTranslations from '../../locales/es';

const Certificaciones = () => {
    const { lightMode, toggleLightMode } = useLightMode();
    const { currentLanguage } = useLanguage();
    const translations = currentLanguage === 'en' ? enTranslations : esTranslations;

    // Enlaces para los certificados de SoyHenry
    const soyHenryCertificateLinks = [
        'https://certificates.soyhenry.com/new-cert?id=2d7d15494aa73c61d38dac52113fef78b6f90f030e80dcdc774c145710c28e87',
        'https://certificates.soyhenry.com/new-cert?id=b6e3c6bf0f3e079d7e7a3f7e341de05d7e4ba1e768a386ce3a7bbd8b28def4a7',
        // Agrega más enlaces según sea necesario
    ];

    // Imágenes para nextU
    const soyHenryImages = [
        '/assets/imagen5.png',
        '/assets/imagen6.png',
    ];

    return (
        <div className="text-white py-12 mt-32 mb-60 ">
            <div className={`container mx-auto p-2`}>
                <h2 className="text-4xl font-bold text-center text-green-400 mb-24">{translations.certificates.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Section for nextU images */}
                    <div className={`flex flex-col items-center gap-8 text-black rounded-lg shadow-md p-6 ${lightMode ? 'bg-black bg-opacity-80' : 'bg-white'}`}>
                        <h1 className="text-3xl text-green-600 font-bold mb-4">NextU</h1>
                        <div className='rounded-lg'>
                            <Image src={imagen1} alt="Certificación NextU" width={500} height={250} className='rounded-lg mx-auto' />
                        </div>
                        <Link href="https://www.credential.net/profile/maurogenna401710/wallet">
                            <div className="text-center px-4 py-2 text-white bg-green-600 rounded hover:bg-green-900 transition duration-300">
                                {translations.certificates.button1}
                            </div>
                        </Link>
                    </div>

                    {/* Section for soyHenry images */}
                    <div className={`flex flex-col items-center gap-8 text-black rounded-lg shadow-md p-6 ${lightMode ? 'bg-black bg-opacity-80' : 'bg-white'}`}>
                        <h1 className="text-3xl text-green-600 font-bold mb-4">Henry</h1>
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            {soyHenryImages.map((image, index) => (
                                <div key={index}>
                                    <div className='rounded-lg'>
                                        <Image
                                            src={image}
                                            alt={`Certificación ${index + 4}`}
                                            width={500}
                                            height={250}
                                            className='rounded-lg w-full h-auto'
                                        />

                                    </div>
                                    <Link href={soyHenryCertificateLinks[index]}>
                                        <div className="text-center mt-6 px-4 py-2 text-white bg-green-600 rounded hover:bg-green-900 transition duration-300">
                                            {translations.certificates.button2}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Certificaciones;
