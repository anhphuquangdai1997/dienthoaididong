import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedWard, setSelectedWard] = useState("");

    const [loadingProvinces, setLoadingProvinces] = useState(true);
    const [loadingDistricts, setLoadingDistricts] = useState(false);
    const [loadingWards, setLoadingWards] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(`https://provinces.open-api.vn/api/p/`)
            .then((response) => {
                setProvinces(response.data);
                setLoadingProvinces(false);
            })
            .catch(() => {
                setError("Failed to load provinces");
                setLoadingProvinces(false);
            });
    }, []);

    useEffect(() => {
        if (selectedProvince) {
            setLoadingDistricts(true);
            axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`)
                .then((response) => {
                    setDistricts(response.data.districts);
                    setWards([]);
                    setLoadingDistricts(false);
                })
                .catch(() => {
                    setError("Failed to load districts");
                    setLoadingDistricts(false);
                });
        }
    }, [selectedProvince]);

    useEffect(() => {
        if (selectedDistrict) {
            setLoadingWards(true);
            axios
                .get(`https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`)
                .then((response) => {
                    setWards(response.data.wards);
                    setLoadingWards(false);
                })
                .catch(() => {
                    setError("Failed to load wards");
                    setLoadingWards(false);
                });
        }
    }, [selectedDistrict]);

    const handleSubmit= async(e)=>{
        e.preventDefault()

        const data={
            province:selectedProvince,
            district:selectedDistrict,
            ward: selectedWard
        }
        try {
            const response= await axios.post('https://ecommerce-q3sc.onrender.com/api/save-address',data)
            alert(response.data.message)
        } catch (error) {
            alert('error',error)
        }
    }

    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
            </p>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="sm:col-span-3">
                    <label
                        htmlFor="province"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Province
                    </label>
                    <div className="mt-2">
                        <select
                            value={selectedProvince}
                            onChange={(e) => setSelectedProvince(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option value="" disabled>
                                {loadingProvinces ? "Loading provinces..." : "Chọn Tỉnh"}
                            </option>
                            {provinces.map((province) => (
                                <option key={province.code} value={province.code}>
                                    {province.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label
                        htmlFor="district"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        District
                    </label>
                    <div className="mt-2">
                        <select
                            value={selectedDistrict}
                            onChange={(e) => setSelectedDistrict(e.target.value)}
                            disabled={!selectedProvince}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option value="" disabled>
                                {loadingDistricts ? "Loading districts..." : "Select District"}
                            </option>
                            {districts.map((district) => (
                                <option key={district.code} value={district.code}>
                                    {district.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label
                        htmlFor="ward"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Ward
                    </label>
                    <div className="mt-2">
                        <select
                            value={selectedWard}
                            onChange={(e) => setSelectedWard(e.target.value)}
                            disabled={!selectedDistrict}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option value="" disabled>
                                {loadingWards ? "Loading wards..." : "Select Ward"}
                            </option>
                            {wards.map((ward) => (
                                <option key={ward.code} value={ward.code}>
                                    {ward.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="rounded-full col-span-full bg-stone-950 text-cyan-50 p-1"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Form;
