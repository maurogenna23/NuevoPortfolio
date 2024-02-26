import { createContext, useContext, useState, useEffect } from 'react';

const LightModeContext = createContext();

const LightModeProvider = ({ children }) => {
    const [lightMode, setLightMode] = useState(false);

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
        localStorage.setItem('lightMode', lightMode.toString());
    }, [lightMode]);

    return (
        <LightModeContext.Provider value={{ lightMode, toggleLightMode }}>
            {children}
        </LightModeContext.Provider>
    );
};

export const useLightMode = () => {
    return useContext(LightModeContext);
};

export default LightModeProvider;
