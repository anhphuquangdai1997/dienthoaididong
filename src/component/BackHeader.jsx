import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

const BackHeader = () => {
    const navigation =useNavigate()
    const handleClick =()=>{
        navigation('/')
      }
    return (
        <div className='relative w-full flex items-center justify-center border-b py-2'>
            <span onClick={handleClick} className='absolute left-0 top-1/2 cursor-pointer'><IoMdArrowRoundBack /></span>
            <h2 className='my-0 py-1 text-base font-semibold'>Trang Chủ</h2>
        </div>
    )
}

export default BackHeader
