import React from 'react';
import img from '../../image/banner.jpeg'

const Banner = () => {
    return (
        <div  className="hero min-h-screen">
            <div  className="hero-content flex-col lg:flex-row-reverse">
                <img src={img}  className="max-w-sm lg:max-w-lg rounded-lg" />
                <div className='p-16'>
                    <h1  className="text-5xl text-primary font-bold">Make Your Car Last Longer</h1>
                    <p  className="py-6">We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software in your vehicle.</p>
                    <button  className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;