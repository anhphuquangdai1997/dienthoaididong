import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contex/AuthContext';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Kiểm tra dữ liệu form
        if (!name || !email || !password || !confirmPassword) {
            setError('Vui lòng nhập đầy đủ thông tin.');
            setLoading(false);
            return;
        }
        if (password !== confirmPassword) {
            setError('Mật khẩu không khớp.');
            setLoading(false);
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email không hợp lệ.');
            setLoading(false);
            return;
        }
        if (password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự.');
            setLoading(false);
            return;
        }
        if (!avatar) {
            setError('Vui lòng chọn ảnh đại diện.');
            setLoading(false);
            return;
        }

        try {
            // Tạo FormData để gửi dữ liệu
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('avatar', avatar); // Avatar field

            // Gửi request đăng ký
            const response = await fetch('https://ecommerce-q3sc.onrender.com/api/v1/register', {
                method: 'POST',
                body: formData, // Để fetch tự xử lý headers
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Đăng ký thất bại!');
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

    const handleAvatarChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setAvatar(e.target.files[0]);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
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

            {/* Form đăng ký */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Register</h2>
                <form onSubmit={handleRegister} className="space-y-6">
                    {/* Input Name */}
                    <div>
                        <label className="block mb-1 text-gray-600" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            aria-label="Name"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Input Email */}
                    <div>
                        <label className="block mb-1 text-gray-600" htmlFor="email">
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
                        <label className="block mb-1 text-gray-600" htmlFor="password">
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

                    {/* Confirm Password */}
                    <div>
                        <label className="block mb-1 text-gray-600" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            aria-label="Confirm Password"
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Confirm your password"
                        />
                    </div>

                    {/* Input Avatar */}
                    <div>
                        <label className="block mb-1 text-gray-600" htmlFor="avatar">
                            Avatar
                        </label>
                        <input
                            id="avatar"
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Nút Sign Up */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 text-white rounded-md transition-colors ${
                            loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {loading ? 'Registering...' : 'Sign Up'}
                    </button>
                </form>

                {/* Liên kết Login */}
                <p className="mt-4 text-gray-600 text-center">
                    Already have an account?{' '}
                    <Link to={'/login'} className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
