import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userAvatar, setUserAvatar] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        const token = localStorage.getItem('token') || Cookies.get('token');
        const avatar = localStorage.getItem('avatar');
        if (authStatus === 'true' || token) {
            setIsAuthenticated(true);
            if (avatar) {
                setUserAvatar(avatar);
            }
        }
        else {
            setLoading(false)
        }
        
    }, []);


    const login = (token, avatar) => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('token', token);
        localStorage.setItem('avatar', avatar);
        setUserAvatar(avatar);
        setIsAuthenticated(true);
        Cookies.set('token', token, { 
            path: '/', 
            sameSite: 'None',  // Cho phép cookie cross-origin
            secure: true       // Cần HTTPS để cookie được gửi đi
        });
    };

    const logout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('token');
        localStorage.removeItem('avatar');
        setUserAvatar(null);
        setIsAuthenticated(false);
        Cookies.remove('token', { path: '/' });
        window.location.reload();
    };

    const updateAvatar = (newAvatar) => {
        localStorage.setItem('avatar', newAvatar);
        setUserAvatar(newAvatar);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, userAvatar, updateAvatar, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
