import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false); // State cho loading

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setIsLoading(true); // Bắt đầu loading

        if (!formData.name || !formData.email || !formData.password || !formData.avatar) {
            setError("Please fill in all fields.");
            setIsLoading(false); // Ngừng loading nếu không hợp lệ
            return;
        }

        const requestData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            avatar: formData.avatar,
        };

        try {
            await axios.post(
                "https://ecommerce-q3sc.onrender.com/api/v1/register",
                requestData,
                { headers: { "Content-Type": "application/json" } }
            );
            setSuccess("Đăng ký thành công!");
            navigate("/login");
            setFormData({
                name: "",
                email: "",
                password: "",
                avatar: "",
            });
        } catch (err) {
            setError(err.response?.data?.message || "Đăng ký thất bại!");
        } finally {
            setIsLoading(false); // Ngừng loading sau khi xử lý xong
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
                onSubmit={handleSubmit}
            >
                <h2 className="text-xl font-bold text-center">Đăng Ký</h2>

                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Tên</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Avatar URL</label>
                    <input
                        type="text"
                        name="avatar"
                        value={formData.avatar}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                    />
                </div>

                <button
                    type="submit"
                    className={`w-full py-2 px-4 rounded-lg transition ${
                        isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                    disabled={isLoading} // Vô hiệu hoá khi đang loading
                >
                    {isLoading ? (
                        <span className="flex justify-center items-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-2 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Đang xử lý...
                        </span>
                    ) : (
                        "Đăng Ký"
                    )}
                </button>
            </form>
        </div>
    );
};

export default Register;
