import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import { Link } from 'react-router-dom';

const Order = () => {

    const [bookedParts, setBookedParts] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        fetch(`http://localhost:5000/purchased?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookedParts(data))

    }, [])

    const handleRemoveProduct = (id) => {
        const proceed = window.confirm('Are You Sire');
        if (proceed) {
            const url = `http://localhost:5000/purchased/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProduct = bookedParts.filter(product => product._id !== id);
                        setBookedParts(remainingProduct)
                    }
                })
        }
    }

    console.log(bookedParts)
    return (
        <div>
            <div>
                <h5 className='bg-gray-600 text-3xl py-3 my-3 text-orange-600'>Manage Product Storization</h5>

                <table className='mb-5 text-secondary bg-green-100 w-full'>
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Product Name</th>
                            <th>Images</th>
                            <th>Order Qty</th>
                            <th>Total Price</th>
                            <th>Address</th>
                            <th>Payment</th>
                            <th>Remove Items</th>
                        </tr>
                    </thead>
                    {/* const { name, _id, img, description, MOQ, Available_Qty, Price } = part; */}

                    {
                        bookedParts && bookedParts.map((part, index) =>
                            <tbody key={part?._id}
                                className="text-secondary text-center"
                            >

                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{part.partName}</td>
                                    <td>
                                        <img style={{ width: '75px' }} src={part.img} alt="" />
                                    </td>
                                    <td>{part.order_Qty}</td>
                                    <td>${parseInt(part.order_Qty) * parseInt(part.price)}</td>
                                    <td>{part.address}</td>
                                    <td>
                                        <button style={{ backgroundColor: 'primary', padding: '2px 10px', borderRadius: '10px' }} >Unpaid</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleRemoveProduct(part._id)} style={{ backgroundColor: 'gold', padding: '2px 10px', borderRadius: '10px' }} >Remove</button>
                                    </td>
                                </tr>
                            </tbody>)
                    }
                </table>
            </div >
        </div>
    );
};

export default Order;