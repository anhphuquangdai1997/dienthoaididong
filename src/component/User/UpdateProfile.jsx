import React, { useState } from 'react'

const UpdateProfile = () => {
    const [avatar, setAvatar] = useState("https://res.cloudinary.com/dwjj1ijln/image/upload/v1734075362/avatars/ulxrzvq3so2flo36oudc.jpg");

    const handleFileChange=(e)=>{
        const file =e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend=()=>{
                setAvatar(reader.result);
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gray-200 fixed top-0 left-0 ">
            <div className="bg-white h-[60vh] box-border overflow-hidden p-4 sm:w-[70vw]">
                <h2 className="text-center text-gray-600 font-normal text-[1.3vmax] py-[1.3vmax] border-b border-gray-300 w-1/2 mx-auto">
                    Update Profile
                </h2>

                <form className="flex flex-col items-center mx-auto py-[2vmax] justify-evenly h-[70%] transition-all duration-500">
                    <div className="flex w-full items-center">
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            name="name"
                            className="py-[1vmax] px-[4vmax] pr-[1vmax] w-full border border-gray-300 rounded-md font-light text-[0.9vmax] outline-none"
                        />
                    </div>
                    <div className="flex w-full items-center">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            name="email"
                            className="py-[1vmax] px-[4vmax] pr-[1vmax] w-full border border-gray-300 rounded-md font-light text-[0.9vmax] outline-none"
                        />
                    </div>

                    <div className="flex flex-col items-c`enter p-2">
                        <img src={avatar} alt="Avatar Preview" className="w-[3vmax] rounded-full m-[1vmax]" width={50} height={50}/>
                        <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full h-[5vh] bg-white border-none cursor-pointer transition-all duration-500 py-0 px-[1vmax] text-gray-600 hover:bg-gray-200"
                        />
                    </div>

                    <input
                        type="submit"
                        value="Update"
                        className="bg-red-500 text-white w-full py-[0.8vmax] cursor-pointer transition-all duration-500 rounded-md shadow-md hover:bg-[#b3422e] border-none"
                    />
                </form>
            </div>
        </div>

    )
}

export default UpdateProfile
