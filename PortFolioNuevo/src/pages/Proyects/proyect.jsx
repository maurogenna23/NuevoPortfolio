import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import codeCommunityImg from '../../../public/assets/CodeCommunity.png'
import piDogImg from '../../../public/assets/Pi_Dogs.png'
import Bambú from '../../../public/assets/Bambú.png'
import AGI from '../../../public/assets/Agi.png'
import Image from 'next/image';
import { useLightMode } from '../../LightModeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import enTranslations from '../../locales/en';
import esTranslations from '../../locales/es';


const Proyectos = () => {
    const { currentLanguage } = useLanguage();
    const translations = currentLanguage === 'en' ? enTranslations : esTranslations;

    const { lightMode, toggleLightMode } = useLightMode();
    const [expandedProyectos, setExpandedProyectos] = useState({});

    const proyectosPorPagina = 1; // Cantidad de proyectos por página
    const [paginaActual, setPaginaActual] = useState(0); // Comienza en 0 para el índice

    const handlePaginaCambio = (data) => {
        const paginaSeleccionada = data.selected;
        setPaginaActual(paginaSeleccionada);
    };



    const handleToggleDescripcion = (proyectoId) => {
        setExpandedProyectos(prevState => ({
            ...prevState,
            [proyectoId]: !prevState[proyectoId],
        }));
    };


    const listaProyectos = [
        {
            id: 1,
            titulo: 'Code Community',
            descripcion: translations.proyect.proyect1.descripcion,
            link: 'https://code-community-three.vercel.app/',
            img: codeCommunityImg
        },
        {
            id: 2,
            titulo: 'Dog World',
            descripcion: translations.proyect.proyect2.descripcion,
            link: 'https://github.com/maurogenna23/PI-DOGS',
            img: piDogImg
        },
        {
            id: 3,
            titulo: 'Bambú',
            descripcion: translations.proyect.proyect3.descripcion,
            link: 'https://bambu-revelazquez.vercel.app/',
            img: Bambú
        },
        {
            id: 3,
            titulo: 'AGI',
            descripcion: translations.proyect.proyect4.descripcion,
            link: 'https://agi-inmobiliaria.vercel.app/',
            img: AGI
        }
    ];

    const proyectosAMostrar = listaProyectos.slice(
        paginaActual * proyectosPorPagina,
        (paginaActual + 1) * proyectosPorPagina
    );

    return (
        <div className="container mx-auto mt-10 my-8 p-2">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-center text-green-400 mb-10">{translations.proyect.title}</h2>
            </div>
            {proyectosAMostrar.map((proyecto) => (
                <div key={proyecto.id} className={`mb-8 shadow-lg p-5 border rounded-md ${lightMode ? 'bg-black bg-opacity-80' : 'bg-white'}`}>

                    <Image
                        src={proyecto.img}
                        alt={proyecto.img}
                        className="w-full sm:w-9/12 h-auto mx-auto rounded-md animated animate__fadeIn"
                    />
                    <h3 className={`text-2xl sm:text-3xl m-5 text-center font-semibold animated animate__fadeIn ${lightMode ? 'text-green-400 ' : 'text-green-800 '}`}>{proyecto.titulo}</h3>
                    <p className={`mt-4 mx-auto w-4/5 text-sm sm:text-lg text-center ${expandedProyectos[proyecto.id] ? 'animated animate__fadeIn' : ''} ${lightMode ? 'text-gray-300' : 'text-gray-600'} `}>
                        {expandedProyectos[proyecto.id]
                            ? proyecto.descripcion
                            : `${proyecto.descripcion.slice(0, 100)}...`}
                        {proyecto.descripcion.length > 150 && (
                            <span className='flex justify-center mt-5'>
                                <button
                                    className="text-neutral hover:text-green-500 transition duration-200 underline cursor-pointer"
                                    onClick={() => handleToggleDescripcion(proyecto.id)}
                                >
                                    {expandedProyectos[proyecto.id] ? <p className='text-neutral hover:text-red-600 transition duration-200 underline'>{translations.proyect.readLess}</p> : translations.proyect.readMore}
                                </button>
                            </span>
                        )}
                    </p>

                    <div className='flex justify-center items-center'>
                        <a href={proyecto.link} className="inline-block m-5 px-4 py-2 text-white bg-green-600 rounded hover:bg-green-900 transition duration-300">
                            {translations.proyect.ButtonA}
                        </a>
                    </div>
                </div>
            ))}

            <ReactPaginate
                previousLabel={<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>}
                nextLabel={<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>}
                breakLabel={'...'}
                pageCount={Math.ceil(listaProyectos.length / proyectosPorPagina)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePaginaCambio}
                containerClassName="my-8 mx-auto flex justify-center items-center"
                activeClassName={`relative block rounded-full px-2 py-2 m-3 text-white font-semibold transition-all duration-300  ${lightMode ? 'bg-blue-300' : 'bg-blue-100'}`}
                pageLinkClassName={`px-3 py-2 m-3 transition duration-300 text-black rounded-full ${lightMode ? 'hover:bg-blue-300' : 'hover:bg-blue-100'}`}
                previousClassName={`rounded-full px-4 py-2 text-black font-semibold  transition duration-300 m-5 ${lightMode ? 'hover:bg-blue-500 bg-blue-300' : 'hover:bg-blue-300 bg-blue-100'}`}
                nextClassName={`rounded-full px-4 py-2 text-black font-semibold bg-blue-100 transition duration-300 m-5 ${lightMode ? 'hover:bg-blue-500 bg-blue-300' : 'hover:bg-blue-300 bg-blue-100'}`}
                disabledClassName="opacity-50 cursor-not-allowed"
                breakClassName="hidden md:block px-3 py-2 text-gray-400 "
            />
        </div>
    );
};

export default Proyectos;
