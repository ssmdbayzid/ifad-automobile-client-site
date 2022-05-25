import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([])

    useEffect(() => {
        fetch('https://intense-ocean-10974.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    return (
        <div>
            <h1 className='uppercase text-primary text-center text-3xl'>Choose the Right Parts for Your Car</h1>
            <div className='grid gap-16 grid-cols-1 mt-12 shadow-lg lg:grid-cols-3'>


                {
                    parts && parts.map(part =>
                        <Part
                            key={part._id}
                            part={part}
                        ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;