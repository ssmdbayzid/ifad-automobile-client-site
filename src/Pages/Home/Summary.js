import React from 'react';
import img from '../../image/summary.png'

const Summary = () => {
    return (
        <div>
            <h1 className="uppercase mt-12 text-accent text-3xl text-center">Business Summary</h1>
            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="lg:max-w-lg w-full rounded-lg shadow-2xl" />
                    <div className='p-6'>
                        <h1 className="text-2xl mb-8 font-bold">Through our large capacity we dare to say we are different.</h1>
                        <div className='flex justify-between'>
                            <div className='text-center sm:me-6 justify-center'>
                                <h1 className='lg:text-5xl text-2xl mb-2'>+200</h1>
                                <hr className='bg-primary mx-auto w-1/2 h-3' />
                                <h1 className='lg:text-2xl'>EMPLOYEE</h1>
                            </div>
                            <div className='text-center sm:me-6 justify-center'>
                                <h1 className='lg:text-5xl text-2xl mb-2'>+100</h1>
                                <hr className='bg-primary mx-auto w-1/2 h-3' />
                                <h1 className='lg:text-2xl'>Project Complete</h1>
                            </div>
                            <div className='text-center sm:me-6 justify-center'>
                                <h1 className='lg:text-5xl text-2xl mb-2'>+80</h1>
                                <hr className='bg-primary mx-auto w-1/2 h-3' />
                                <h1 className='lg:text-2xl'>CLIENTS</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;