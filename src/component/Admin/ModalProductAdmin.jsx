import React, { useState } from 'react'

const ModalProductAdmin = ({ isOpen, closeModal, product }) => {
    const [selectedImages, setSelectedImages] = useState([])

    if (!isOpen) return null;

    const handleFileChange =(e)=>{
        const files = Array.from(e.target.files);
        setSelectedImages(files)
    }
    const handleCancel =()=>{
        setSelectedImages([])
        closeModal()
    }

    return (
        <div className='fixed flex inset-0 justify-center items-center bg-black bg-opacity-50 '>
            <div className='bg-white p-6 rounded shadow-md w-[400px] '>
                <h2 className=' text-2xl mb-4 '>edit product</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">product name</label>
                        <input type="text" className="w-full p-2 border rounded" defaultValue={product?.name} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">product category</label>
                        <select className="w-full p-2 border rounded" defaultValue={product?.category}>
                            <option value="laptop">Laptop</option>
                            <option value="smartphone">SmartPhones</option>
                            <option value="camera">Camera</option>
                            <option value="accessory">Phụ Kiện</option>
                            <option value="ipad">Ipad</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Stock</label>
                        <input type="number" className="w-full p-2 border rounded" defaultValue={product?.Stock} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Price</label>
                        <input type="number" className="w-full p-2 border rounded" defaultValue={product?.price} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Description</label>
                        <textarea className='w-full rounded' defaultValue={product?.description}/>
                    </div>
                    <div className="mb-4">
                    <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                            className="w-full h-[5vh] bg-white border-none cursor-pointer transition-all duration-500 py-0 px-[1vmax] text-gray-600 hover:bg-gray-200"
                        />
                    </div>
                    {/* hiện thị ảnh đã chọn */}
                    {
                        selectedImages.length>0 && (
                            <div className="flex flex-wrap gap-2">
                                {selectedImages.map((image, index) => (
                                    <img
                                     key={index} 
                                     src={URL.createObjectURL(image)}
                                     alt='array image'
                                     className='w-14 h-14 object-cover rounded '
                                     />
                                ))}
                            </div>
                        )
                    }

                    <div className='flex justify-end gap-2'>
                        <button onClick={handleCancel} type='button' className='bg-gray-500 text-white px-4 py-2 rounded'>cancel</button>
                        <button type='submit' className='bg-red-500 text-white px-4 py-2 rounded'>save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalProductAdmin