import React, { useEffect, useState } from 'react';

const Parts = () => {
    const [parts, setParts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/part')
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[])

    return (
        <div>
            <h1 className='uppercase text-center text-2xl'>Choose the Right Automobile Spare Parts for Your Car</h1>

            <h2>Total Parts Qty {parts && parts.length}</h2>
        </div>
    );
};

export default Parts;