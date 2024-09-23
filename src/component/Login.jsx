import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contex/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (e) => {  
        e.preventDefault();  
        const response = await fetch('http://localhost:5000/api/v1/login', {  
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
            alert(data.message || 'Đăng nhập thất bại!');  
        }  
    };  

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
