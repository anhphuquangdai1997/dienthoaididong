import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userAvatar, setUserAvatar] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const authStatus=localStorage.getItem('isAuthenticated');
        const token = localStorage.getItem('token') || Cookies.get('token');
        const avatar = localStorage.getItem('avatar'); // Lấy avatar từ localStorage
        if (authStatus==='true' || token) {
            setIsAuthenticated(true);
            if (avatar) {
                setUserAvatar(avatar); // Thiết lập avatar nếu có
            }
        }
        setLoading(false);
    }, []);

    const login = (token, avatar) => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('token', token);
        localStorage.setItem('avatar', avatar);
        setUserAvatar(avatar);
        setIsAuthenticated(true);
        Cookies.set('token', token, { path: '/'});

    };

    const logout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('token');
        localStorage.removeItem('avatar');
        setIsAuthenticated(false);
        Cookies.remove('token', { path: '/' });
        window.location.reload();
        console.log()
    };
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout,userAvatar }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
0