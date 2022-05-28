import React from 'react';
import Profile  from '../../image/profile.jpg';

const Portfolio = () => {
    return (
        <div className='min-h-screen bg-base-200  flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={Profile} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Name: S S Md. Bayzid
                    </h2>
                    <p><strong>Last Education :</strong> Diploma In Engineering</p>
                    <p><strong>Technology :</strong> Automobile Technology</p>
                    <div class="card-actions justify-end">
                    <p className='p-3 mb-3'>My Project 1 : <a href='https://ifad-autos.web.app' className='p-3 bg-green-600 rounded'>1st Project</a></p>
                    <p className='p-3 mb-3'>My Project 2 : <a href='https://chimerical-squirrel-f1631b.netlify.app/' className='p-3 bg-green-600 rounded'>2nd Project</a></p>
                    <p className='p-3 mb-3'> My Project 3 : <a href='https://masuk-computers-warehouse.web.app/' className='p-3 bg-green-600 rounded'> 3rd Project </a></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Portfolio;