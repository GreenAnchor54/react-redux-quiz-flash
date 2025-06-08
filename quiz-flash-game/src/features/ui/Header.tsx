import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { toggleTheme, setLanguage } from './uiSlice';

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const { theme, language } = useAppSelector(state => state.ui);

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    const handleLanguageToggle = () => {
        const newLang = language === 'en' ? 'sk' : 'en';
        dispatch(setLanguage(newLang));
    };

    return (
        <header className="app-header">
            <button onClick={handleLanguageToggle} className="btn-icon" title="Toggle Language">
                {language === 'en' ? '🇸🇰' : '🇬🇧'}
            </button>
            <button onClick={handleThemeToggle} className="btn-icon" title="Toggle Theme">
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </header>
    );
};

export default Header;