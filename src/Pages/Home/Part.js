import React from 'react';
import { NavLink } from 'react-router-dom';

const Part = ({ part }) => {
    const { name, _id, img, description, MOQ, Available_Qty, Price } = part;
    return (
        <div className="card w-96 lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-accent">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-center flex ">
                    <div className="badge text-white bg-primary black-outline">M.O.Q: {MOQ}</div>
                <div className="badge bg-secondary text-white badge-outline">Availabe Qty: {Available_Qty}</div>
                <div className="badge bg-[red] text-white black-outline">Price: ${Price}</div>
                <br />
                <NavLink to={`/purchase/${_id}`} className='btn w-full btn-primary'>Order Now</NavLink>

            </div>
            </div>
        </div>
    );
};

export default Part;