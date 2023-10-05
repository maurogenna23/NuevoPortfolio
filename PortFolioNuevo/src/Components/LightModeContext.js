// Crear un nuevo archivo llamado LightModeContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const LightModeContext = createContext();

const LightModeProvider = ({ children }) => {
    const [lightMode, setLightMode] = useState(false);

    // Almacenar el modo claro en localStorage para persistencia
    useEffect(() => {
        const storedMode = localStorage.getItem('lightMode');
        if (storedMode !== null) {
            setLightMode(storedMode === 'true');
        }
    }, []);

    const toggleLightMode = () => {
        setLightMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        // Guardar el modo claro en localStorage
        localStorage.setItem('lightMode', lightMode.toString());
    }, [lightMode]);

    return (
        <LightModeContext.Provider value={{ lightMode, toggleLightMode }}>
            {children}
        </LightModeContext.Provider>
    );
};

const useLightMode = () => {
    return useContext(LightModeContext);
};

export { LightModeProvider, useLightMode };

