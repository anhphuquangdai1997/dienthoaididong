import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userAvatar, setUserAvatar] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        const avatar = localStorage.getItem('avatar'); // Lấy avatar từ localStorage
        if (token) {
            setIsAuthenticated(true);
            if (avatar) {
                setUserAvatar(avatar); // Thiết lập avatar nếu có
            }
        }
    }, []);

    const login = (token, avatar) => {
        localStorage.setItem('token', token);
        localStorage.setItem('avatar', avatar); // Lưu avatar khi đăng nhập
        setUserAvatar(avatar);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('avatar'); // Xóa avatar khi logout
        setUserAvatar(null);
        setIsAuthenticated(false);
    };
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout,userAvatar }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
