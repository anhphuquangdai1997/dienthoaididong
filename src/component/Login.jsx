import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contex/AuthContext';
import { DarkModeContext } from '../contex/DarkModeContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const {isDarkMode} =useContext(DarkModeContext)

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Kiểm tra dữ liệu form
        if (!email || !password) {
            setError('Vui lòng nhập đầy đủ email và mật khẩu.');
            setLoading(false);
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email không hợp lệ.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('https://ecommerce-q3sc.onrender.com/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Đăng nhập thất bại!');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('avatarUrl', data.user.avatar.url);
            login(data.token, data.user.avatar.url);
            navigate('/');
        } catch (error) {
            setError(error.message || 'Lỗi kết nối đến server!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={` ${isDarkMode?'bg-customDark text-white':'bg-gray-100 text-gray-700'} min-h-screen flex items-center justify-center `}>
            {/* Thông báo lỗi */}
            {error && (
                <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-xs p-4 mt-4 text-gray-500 bg-red-100 border border-red-400 rounded-lg shadow-lg z-50"
                    role="alert"
                    aria-live="assertive"
                >
                    <div className="flex items-center">
                        <span className="text-sm font-normal">{error}</span>
                        <button
                            type="button"
                            className="ml-auto text-gray-400 hover:text-gray-900"
                            onClick={() => setError('')}
                            aria-label="Close"
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M1 1l6 6m0 0l6 6m-6-6l6-6m-6 6L1 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Form đăng nhập */}
            <div className=" p-8 shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-6  text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Input Email */}
                    <div>
                        <label className="block mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            aria-label="Email Address"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Input Password */}
                    <div>
                        <label className="block mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            aria-label="Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Nút Sign In */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 text-white rounded-md transition-colors ${
                            loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                {/* Liên kết Sign Up */}
                <p className="mt-4 text-gray-600 text-center">
                    Don't have an account?{' '}
                    <Link to={'/register'} className="text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
