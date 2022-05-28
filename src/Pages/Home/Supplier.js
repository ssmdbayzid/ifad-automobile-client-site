import React from 'react';
import banner from '../../image/supplierImg.png'

const Supplier = () => {
    return (
        <div className='my-12'>
            <h1 className='text-5xl mb-3 text-primary text-center font-bold'>Our Valueable Supplier</h1>
            <img className='w-full' src={banner} alt="" />
        </div>
    );
};

export default Supplier;