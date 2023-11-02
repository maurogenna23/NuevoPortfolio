import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';
import imagen from '../../../public/assets/contact.png';
import video from '../../../public/assets/contact.mp4';
import styles from './contact.module.css';
import { useLanguage } from '../../contexts/LanguageContext';
import enTranslations from '../../locales/en';
import esTranslations from '../../locales/es';
import { useLightMode } from '../../LightModeContext';

function ContactForm() {
    const [state, handleSubmit] = useForm("mvojgaqr");
    const { lightMode, toggleLightMode } = useLightMode();
    const { currentLanguage } = useLanguage();
    const translations = currentLanguage === 'en' ? enTranslations : esTranslations;

    if (state.succeeded) {
        return (
            <div className='flex flex-col-reverse lg:flex-row mt-10 lg:mt-40'>
                <div className="w-full lg:w-1/2 p-2 flex items-center justify-center animated animate__fadeIn">
                    <div className={`max-w-3xl p-8 shadow-xl w-full border rounded-md text-center ${lightMode ? 'bg-black bg-opacity-80' : 'bg-white'}`}>
                        <p className={`text-4xl mb-4 ${lightMode ? ' text-green-400' : 'text-green-600'}`}>{translations.contact.paragraph1}</p>
                        <p className={`text-xl ${lightMode ? 'text-white' : ''}`}>{translations.contact.paragraph2}</p>
                        <div className="mt-10">
                            <p className={`${lightMode ? 'text-gray-300' : ''}`}>{translations.contact.paragraph3}</p>
                            <div className="flex justify-center space-x-4 mt-2">
                                <a href="https://www.linkedin.com/in/mauro-genna-777a84237/" className={`relative inline-block text-3xl font-medium p-1  hover:text-linkedin transition duration-300 hover:after:content-[''] after:block after:w-0 after:h-0.5 after:bg-linkedin after:absolute after:bottom-0 after:left-0 after:w-full after:transition-transform after:duration-300 after:transform after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left ${lightMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/maurogenna23" className={`relative inline-block text-3xl font-medium p-1  transition duration-300 hover:after:content-[''] after:block after:w-0 after:h-0.5 after:bg-gray-600 after:absolute after:bottom-0 after:left-0 after:w-full after:transition-transform after:duration-300 after:transform after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left ${lightMode ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-black'}`}>
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.instagram.com/mauro_genna/" className={`relative inline-block text-3xl font-medium p-1 hover:text-[#E4405F] transition duration-300 hover:after:content-[''] after:block after:w-0 after:h-0.5 after:bg-[#E4405F] after:absolute after:bottom-0 after:left-0 after:w-full after:transition-transform after:duration-300 after:transform after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left ${lightMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    <i className='fab fa-instagram'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <video
                        width="95%"  // Cambiado a 100% para que se ajuste al ancho del contenedor
                        height="auto" // Auto para mantener la proporción original
                        className='rounded-full shadow-lg shadow-black/5 hover:shadow-black/30'
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        );
    }

    return (
        <div className='flex flex-col-reverse lg:flex-row mt-10 lg:mt-40'>
            <div className="w-full lg:w-1/2 p-2 flex items-center justify-center">
                <form
                    onSubmit={handleSubmit}
                    className={`max-w-3xl p-8 shadow-xl w-full border rounded-md ${lightMode ? 'bg-black bg-opacity-80' : 'bg-white'}`}
                >
                    <h2 className="text-4xl mb-10 font-bold text-green-400">
                        {translations.contact.title}
                    </h2>
                    <div className={`flex flex-col lg:flex-row mb-6 `}>
                        <div className="w-full lg:w-1/2 mr-0 lg:mr-2">
                            <label
                                htmlFor="nombre"
                                className={`block mb-2 text-lg font-medium ${lightMode ? 'text-white' : 'text-black'}`}
                            >
                                {translations.contact.label1}
                            </label>
                            <input
                                id="nombre"
                                type="text"
                                name="nombre"
                                className="w-full p-4 border border-black rounded-lg focus:ring focus:ring-blue-300 transition duration-300"
                                placeholder={translations.contact.label1}
                                required
                            />
                        </div>
                        <div className="w-full lg:w-1/2 ml-0 lg:ml-2 mt-4 lg:mt-0">
                            <label
                                htmlFor="Last Name"
                                className={`block mb-2 text-lg font-medium ${lightMode ? 'text-white' : 'text-black'}`}
                            >
                                {translations.contact.label2}
                            </label>
                            <input
                                id="apellido"
                                type="text"
                                name="apellido"
                                className="w-full p-4 border border-black rounded-lg focus:ring focus:ring-blue-300 transition duration-300"
                                placeholder={translations.contact.label2}
                                required
                            />
                        </div>
                    </div>

                    <div className={`mb-6 `}>
                        <label
                            htmlFor="Email"
                            className={`block mb-2 text-lg font-medium ${lightMode ? 'text-white' : 'text-black'}`}
                        >
                            {translations.contact.label3}
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="w-full p-4 border border-black rounded-lg focus:ring focus:ring-blue-300 transition duration-300"
                            placeholder={translations.contact.label3}
                            required
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                        />
                    </div>

                    <div className={`mb-6`}>
                        <label
                            htmlFor="message"
                            className={`block mb-2 text-lg font-medium ${lightMode ? 'text-white' : 'text-black'}`}
                        >
                            {translations.contact.label4}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full p-4 border border-black rounded-lg focus:ring focus:ring-blue-300 transition duration-300"
                            placeholder={translations.contact.label4}
                            required
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className=" w-1/2 p-4 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            {translations.contact.button}
                        </button>
                    </div>
                </form>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center">
                <video
                    width="95%"  // Cambiado a 100% para que se ajuste al ancho del contenedor
                    height="auto" // Auto para mantener la proporción original
                    className='rounded-full shadow-lg shadow-black/5 hover:shadow-black/30'
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default ContactForm;
