import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import enTranslations from '../../locales/en';
import esTranslations from '../../locales/es';
import { useLightMode } from '../../LightModeContext';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { lightMode, toggleLightMode } = useLightMode();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const { currentLanguage } = useLanguage();
    const translations = currentLanguage === 'en' ? enTranslations : esTranslations;

    const redirectToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/mauro-genna-777a84237/', '_blank');
    };

    const redirectToGitHub = () => {
        window.open('https://github.com/maurogenna23', '_blank');
    };

    const redirectToWhatsApp = () => {
        window.open('https://api.whatsapp.com/send?phone=2616976887', '_blank');
    };

    return (
        <div>
            <nav className={`w-full fixed top-0 z-10 bg-opacity-50 backdrop-blur-sm ${lightMode ? 'bg-white' : 'bg-black'}`}>
                <div className="container mx-auto flex justify-between items-center sm:py-5 py-1">

                    <div className={`hidden md:flex mx-auto space-x-12 ${lightMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        <ScrollLink to="home" smooth={true} duration={1000} className='cursor-pointer'>
                            <p className={`relative inline-block text-lg font-medium p-1  transition duration-300 hover:after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:transition-transform after:duration-300 after:transform after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left ${lightMode ? 'hover:text-black after:bg-black' : 'hover:text-white after:bg-white'}`} onClick={closeMenu}>{translations.NavBar.Home}</p>
                        </ScrollLink>
                        <ScrollLink to="about" smooth={true} duration={1000} className='cursor-pointer'>
                            <p className={`relative inline-block text-lg font-medium p-1  transition duration-300 hover:after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:transition-transform after:duration-300 after:transform after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left ${lightMode ? 'hover:text-black after:bg-black' : 'hover:text-white after:bg-white'}`} onClick={closeMenu}>{translations.NavBar.About}</p>
                        </ScrollLink>
                        <ScrollLink to="Contact" smooth={true} duration={1000} className='cursor-pointer'>
                            <p className={`relative inline-block text-lg font-medium p-1 transition duration-300 hover:after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:transition-transform after:duration-300 after:transform after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left ${lightMode ? 'hover:text-black after:bg-black' : 'hover:text-white after:bg-white'}`} onClick={closeMenu}>{translations.NavBar.Contact}</p>
                        </ScrollLink>

                        <div className="relative group">
                            <div className='flex flex-row' onClick={toggleMenu}>
                                <p className={`relative inline-block cursor-pointer text-lg font-medium p-1 transition duration-300 ${lightMode ? 'hover:text-black ' : 'hover:text-white '} `}>{translations.NavBar.Portfolio}
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-2 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <ul className={`absolute ${menuOpen ? 'block' : 'hidden'} ${lightMode ? 'bg-black bg-opacity-80' : 'bg-white'}  mt-2 border rounded-md shadow-md expanded`}>
                                <li>
                                    <ScrollLink to="Proyectos" smooth={true} duration={1000} className='cursor-pointer'>
                                        <p className={`relative inline-block transition duration-300 cursor-pointer  text-lg font-medium p-1 animated animate__fadeIn animate-expand-delayed-0 ${lightMode ? 'hover:text-gray-400 text-white' : 'hover:text-gray-400 text-black '} `} onClick={closeMenu}>{translations.NavBar.Projects}</p>
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="Certificaciones" smooth={true} duration={1000} className='cursor-pointer'>
                                        <p className={`relative inline-block transition duration-300 cursor-pointer text-lg font-medium p-1 animated animate__fadeIn animate-expand-delayed-1 ${lightMode ? 'hover:text-gray-400 text-white' : 'hover:text-gray-400 text-black '} `} onClick={closeMenu}>{translations.NavBar.Certifications}</p>
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="Languages" smooth={true} duration={1000} className='cursor-pointer'>
                                        <p className={`relative inline-block transition duration-300 cursor-pointer text-lg font-medium p-1 animated animate__fadeIn animate-expand-delayed-2 ${lightMode ? 'hover:text-gray-400 text-white' : 'hover:text-gray-400 text-black '} `} onClick={closeMenu}>{translations.NavBar.Technologies}</p>
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`flex space-x-4 ${lightMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        <Link href="ttps://www.linkedin.com/in/mauro-genna-777a84237/" className="cursor-pointer relative inline-block text-lg font-medium p-1 hover:text-linkedin transition duration-300 hover:after:content-[''] after:block after:w-0 after:h-0.5 after:bg-linkedin after:absolute after:bottom-0 after:left-0 after:w-full after:transition-transform after:duration-300 after:transform after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left">
                            <i className="fab fa-linkedin fa-2x sm:fa-x" onClick={redirectToLinkedIn}></i>
                        </Link>
                        <Link href="ttps://github.com/maurogenna23" className={`cursor-pointer relative inline-block text-lg font-medium p-1 transition duration-300 hover:after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:transition-transform after:duration-300 after:transform after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left ${lightMode ? ' hover:text-gray-400' : ' hover:text-white'}`}>
                            <i className="fab fa-github fa-2x" onClick={redirectToGitHub}></i>
                        </Link>
                        <Link href="ttps://api.whatsapp.com/send?phone=2616976887" className="cursor-pointer relative inline-block text-lg font-medium p-1  hover:text-green-500 transition duration-300 hover:after:content-[''] after:block after:w-0 after:h-0.5 after:bg-green-500 after:absolute after:bottom-0 after:left-0 after:w-full after:transition-transform after:duration-300 after:transform after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left">
                            <i className="fab fa-whatsapp fa-2x" onClick={redirectToWhatsApp}></i>
                        </Link>
                    </div>

                    <div className="md:hidden mb-4">
                        <button
                            onClick={toggleMenu}
                            className={`text-lg mr-3 bg-F2EDDC p-0.5 rounded-md relative group ${menuOpen ? 'ring-red-400' : 'ring-green-400'} focus:ring-4 duration-200 shadow-md`}
                        >
                            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-7 h-7 transform transition-all">
                                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                    <div className={`bg-green-400 h-[2px] w-7 transform transition-all duration-300 origin-left ${menuOpen ? 'translate-x-10' : ''}`}></div>
                                    <div className={`bg-green-400 h-[2px] w-7 rounded transform transition-all ${menuOpen ? 'translate-x-10 delay-75' : ''}`}></div>
                                    <div className={`bg-green-400 h-[2px] w-7 transform transition-all duration-300 origin-left ${menuOpen ? 'translate-x-10 delay-150' : ''}`}></div>

                                    <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${menuOpen ? 'translate-x-0' : '-translate-x-10'} flex w-0 ${menuOpen ? 'w-12' : ''}`}>
                                        <div className={`absolute bg-red-400 h-[2px] w-5 transform transition-all duration-500 ${menuOpen ? 'rotate-45 delay-300' : ''}`}></div>
                                        <div className={`absolute bg-red-400 h-[2px] w-5 transform transition-all duration-500 ${menuOpen ? '-rotate-45 delay-300' : ''}`}></div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <div className="md:hidden transition duration-300 animate-expand">
                        <ScrollLink to="home" smooth={true} duration={1000}>
                            <p className={`flex items-center text-lg font-medium p-1 hover:opacity-50 animated animate__fadeIn animate-expand-delayed-0 ${lightMode ? '' : 'text-gray-300'}`} onClick={closeMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className="mr-2 mb-1" style={{ fill: lightMode ? '' : '#718096' }}>
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                                </svg>
                                {translations.NavBar.Home}
                            </p>
                        </ScrollLink>


                        <ScrollLink to="about" smooth={true} duration={1000}>
                            <p className={`flex items-center text-lg font-medium p-1 hover:opacity-50 animated animate__fadeIn animate-expand-delayed-1 ${lightMode ? '' : 'text-gray-300'}`} onClick={closeMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="mr-2 mb-1" style={{ fill: lightMode ? '' : '#718096' }}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>{translations.NavBar.About}</p>
                        </ScrollLink>
                        <ScrollLink to="Contact" smooth={true} duration={1000} className='bg-opacity-50 backdrop-blur-sm'>
                            <p className={`flex items-center text-lg font-medium p-1 hover:opacity-50 animated animate__fadeIn animate-expand-delayed-2 ${lightMode ? '' : 'text-gray-300'}`} onClick={closeMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="mr-2 mb-1" style={{ fill: lightMode ? '' : '#718096' }}><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                {translations.NavBar.Contact}</p>
                        </ScrollLink>
                        <ScrollLink to="Proyectos" smooth={true} duration={1000} className='bg-opacity-50 backdrop-blur-sm'>
                            <p className={`flex items-center text-lg font-medium p-1 hover:opacity-50 animated animate__fadeIn animate-expand-delayed-3 ${lightMode ? '' : 'text-gray-300'}`} onClick={closeMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" className="mr-2 mb-1" style={{ fill: lightMode ? '' : '#718096' }}><path d="M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                                {translations.NavBar.Projects}</p>
                        </ScrollLink>
                        <ScrollLink to="Certificaciones" smooth={true} duration={1000} className='bg-opacity-50 backdrop-blur-sm'>
                            <p className={`flex items-center text-lg font-medium p-1 hover:opacity-50 animated animate__fadeIn animate-expand-delayed-4 ${lightMode ? '' : 'text-gray-300'}`} onClick={closeMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" className="mr-2 mb-1" style={{ fill: lightMode ? '' : '#718096' }}><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" /></svg>



                                {translations.NavBar.Certifications}</p>
                        </ScrollLink>
                        <ScrollLink to="Languages" smooth={true} duration={1000} className='bg-opacity-50 backdrop-blur-sm'>
                            <p className={`flex items-center text-lg font-medium p-1 hover:opacity-50 animated animate__fadeIn animate-expand-delayed-5 ${lightMode ? '' : 'text-gray-300'}`} onClick={closeMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="mr-2 mb-1" style={{ fill: lightMode ? '' : '#718096' }}><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" /></svg>
                                {translations.NavBar.Technologies}</p>
                        </ScrollLink>
                    </div>

                )}
            </nav>
        </div>
    );
};

export default Navbar;