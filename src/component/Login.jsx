import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contex/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const { login } = useAuth();

    const handleLogin = async (e) => {  
        e.preventDefault();  
        const response = await fetch('https://ecommerce-q3sc.onrender.com/api/v1/login', {  
            method: 'POST',  
            headers: {  
                'Content-Type': 'application/json',  
            },  
            body: JSON.stringify({ email, password }),  
        });         
        const data = await response.json();  

        if (response.ok) {  
            localStorage.setItem('token', data.token);
            localStorage.setItem('token', data.user.avatar.url);
            login(data.token,data.user.avatar.url)
            navigate('/')
        } else {  
            setError(data.message || 'Đăng nhập thất bại!'); 
        }  
    };  

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {error && (
                    <div id="toast-undo" className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-xs p-4 mt-4 text-gray-500 bg-red-100 border border-red-400 rounded-lg shadow-lg dark:text-gray-400 dark:bg-gray-800 z-50" role="alert">
                    <div className="flex items-center">
                        <div className="text-sm font-normal">
                            {error}
                        </div>
                        <div className="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
                            <button type="button" className="ml-2 text-gray-400 hover:text-gray-900" onClick={() => setError('')} aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                )}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block mb-1 text-gray-600" htmlFor="email">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="text"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-600" htmlFor="password">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Sign In
                    </button>
                </form>
                
                <p className="mt-4 text-gray-600 text-center">
                    Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    )
}

export default Login
