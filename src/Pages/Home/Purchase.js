import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Purchase = () => {

    const { id } = useParams()
    console.log(id)


    const [product, setProduct] = useState({})

    console.log(product)
    const { name, company, description, picture, price, stock_Quantity } = product;
    useEffect(()=>{
        const url = `https://young-cove-45489.herokuapp.com/inventory/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])


    const handleDeliveryQty = e => {
        e.preventDefault()
        const updateQty = parseInt(stock_Quantity) - 1;


        const url = `https://young-cove-45489.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({updateQty})
            })
            .then(res=>res.json())
            .then(data=>{
                alert('Qty update successfully', data)
            })
    }

    const handleAddQty = e => {
        e.preventDefault()
        const addQty = parseInt(e.target.number.value)
        const updateQty = parseInt(stock_Quantity) + addQty;

        const url = `https://young-cove-45489.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({updateQty})
            })
            .then(res=>res.json())
            .then(data=>{
                alert('Qty update successfully', data)
            })     
    }

    return (
        <div className='flex m-16'>
            <div style={{ width: '350px' }} className='border-gray-400 border-2 rounded'>
                <img className='img-fluid' src={picture} alt="" />
                <h1 className='font-bold text-2xl'>{name}</h1>
                <p>{description}</p>
                <h3 className='font-bold text-xl '>Price ${price}</h3>
                <p>Stock Quantity: {stock_Quantity}</p>
                <p>Supplier: <strong>{company}</strong></p>
                <button onClick={handleDeliveryQty} className='bg-blue-600 w-3/4 rounded-md m-2 py-1 text-white font-bold'>Delivery</button>
            </div>

            <div style={{ height: '200px' }} className='bg-green-900 w-fluid p-3 m-5'>
                <h1 className='text-white text-2xl'>Product Receive Quantity</h1>
                <form onSubmit={handleAddQty}>
                    <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="number" name='number' />
                    <br />
                    <button className='bg-blue-600 w-3/4 rounded-md m-2 py-1 text-white font-bold'>Add Quantity</button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;