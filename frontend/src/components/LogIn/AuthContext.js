import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');

    const login = (name) => {
        setIsAuthenticated(true);
        setUserName(name);
        localStorage.setItem('isAuthenticated', 'true'); // Persist login state
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserName('');
        localStorage.removeItem('isAuthenticated'); // Clear login state
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userName, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
