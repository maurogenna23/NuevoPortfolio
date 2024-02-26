import imagen from '../../../public/assets/fotoLinkedin.jpg'
import Image from 'next/image';
import { useLightMode } from '../../LightModeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import enTranslations from '../../locales/en';
import esTranslations from '../../locales/es';

const About = () => {

    const { lightMode, toggleLightMode } = useLightMode();
    const { currentLanguage } = useLanguage();
    const translations = currentLanguage === 'en' ? enTranslations : esTranslations;

    return (
        <div className="p-2 mt-40 mb-40" >
            <div className={`container border  mx-auto p-10 px-6 rounded-lg shadow-md ${lightMode ? 'bg-black bg-opacity-80 text-white' : ' bg-white text-black'}`}>
                <h2 className="text-4xl font-bold text-center text-green-400 mb-24">{translations.about.title}</h2>
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <div className="lg:w-1/2 lg:mb-0">
                        <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg mx-auto mb-6 lg:mb-0">
                            <Image src={imagen} alt="imagen" layout="responsive" objectFit="cover" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 text-center xl:text-left">
                        <p className="sm:text-lg mb-4">
                            {translations.about.content.paragraph1}
                        </p>
                        <p className="sm:text-lg mb-4">{translations.about.content.paragraph2}</p>
                        <p className="sm:text-lg mb-4 underline">{translations.about.content.paragraph3}</p>
                        <p className="sm:text-lg mb-4 underline">{translations.about.content.paragraph4}</p>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <a href="https://docs.google.com/document/d/10h8wy61Rg6mIZqZL7FHccDj9FzbikV--oaiLyhikoRs/edit?usp=drive_link" className="mx-4">
                        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
                            {translations.about.cvLinks.spanish}
                        </button>
                    </a>
                    <a href="https://docs.google.com/document/d/1wCAmOAYRKZ3MGWBGpWJov_WbvkJdIKVonRpvMYCNOQ0/edit?usp=drive_link" className="mx-4">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                            {translations.about.cvLinks.english}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;
