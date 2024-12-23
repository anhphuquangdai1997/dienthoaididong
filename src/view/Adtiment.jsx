import React from 'react';
import oneimages from "../images/4810ab203ec6286f99c11cfd7d9f5917.webp";
import two from "../images/aaa05119320eec8a193a5fc40ca4d69d.webp";
import three from "../images/5db8807174f55f0ae5b898429b9dad31.webp"

const Adtiment = () => {
    return (
        <div className='grid-cols-1 px-2 hidden md:block'>
            <div className='max-w-56 py-2'><img src={oneimages} alt="" /></div>
            <div className='max-w-56 py-2'><img src={two} alt="" /></div>
            <div className='max-w-56 py-2'><img src={three} alt="" /></div>
        </div>
    )
}

export default Adtiment
