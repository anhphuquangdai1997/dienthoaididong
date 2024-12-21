import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userAvatar, setUserAvatar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    const fetchCurrentUser = async () => {
        try {
            setLoading(true);
            const config = {
                withCredentials: true,
            };
            const { data } = await axios.get('http://localhost:5000/api/v1/me', config);
            setCurrentUser(data.user);
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchUsers = async () => {
        if (!currentUser || currentUser.role !== 'admin') return; // Chỉ gọi khi role là admin
        setLoading(true);
        try {
            const config = {
                withCredentials: true,
            };
            const response = await axios.get("http://localhost:5000/api/v1/admin/users", config);
            setUsers(response.data.users);
        } catch (error) {
            setError(error.message);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        const token = localStorage.getItem('token') || Cookies.get('token');
        const avatar = localStorage.getItem('avatar');
        if (authStatus === 'true' || token) {
            setIsAuthenticated(true);
            if (avatar) {
                setUserAvatar(avatar);
            }
            fetchCurrentUser();
        }
        else {
            setLoading(false)
        }
        
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            fetchCurrentUser();
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (currentUser?.role === 'admin') {
            fetchUsers(); // Chỉ gọi fetchUsers khi role là admin
        }
    }, [currentUser]);

    const login = (token, avatar) => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('token', token);
        localStorage.setItem('avatar', avatar);
        setUserAvatar(avatar);
        setIsAuthenticated(true);
        Cookies.set('token', token, { path: '/' });
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
        <AuthContext.Provider value={{ isAuthenticated, login, logout, userAvatar, updateAvatar, loading, error, users, currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
