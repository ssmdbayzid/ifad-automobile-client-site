import React from 'react';
import img from '../../image/summary.png'
import icon1 from '../../image/icons/client.png'
import icon2 from '../../image/icons/employ.png'
import icon3 from '../../image/icons/project.png'

const Summary = () => {
    return (
        <div>
            <h1 className="uppercase mt-12 text-accent text-3xl text-center">Business Summary</h1>
            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='p-6'>
                        <h1 className="lg:text-4xl text-2xl mb-8 font-bold">Through our large capacity we dare to say we are different.</h1>
                        <div>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between'>
                                <div className='text-center m-6 mx-6 text-center justify-center'>
                                    <img src={icon2} alt='' className='w-[150px] mx-auto h-[200px]' />
                                    <h1 className='text-5xl mb-2'>+200</h1>
                                    <hr className='bg-primary mx-auto w-1/2 h-3' />
                                    <h1 className='text-4xl'>EMPLOYEE</h1>
                                </div>
                                <div className='text-center m-6 mx-6 justify-center'>
                                    <img src={icon3} alt='' className='w-[150px] mx-auto h-[200px]' />
                                    <h1 className='text-5xl mb-2'>+100</h1>
                                    <hr className='bg-primary mx-auto w-1/2 h-3' />
                                    <h1 className='text-4xl'>Project Complete</h1>
                                </div>
                                <div className='text-center m-6 mx-6 justify-center'>
                                    <img src={icon1} alt='' className='w-[150px] mx-auto h-[200px]' />
                                    <h1 className='text-5xl mb-2'>+80</h1>
                                    <hr className='bg-primary mx-auto w-1/2 h-3' />
                                    <h1 className='text-4xl'>CLIENTS</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Summary;