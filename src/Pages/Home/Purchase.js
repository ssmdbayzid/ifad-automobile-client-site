import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Purchase = () => {


    const { id } = useParams()
    const [user] = useAuthState(auth)
    const [part, setPart] = useState({})
    const [btnDisable, setBtnDisable] = useState(false);
    const [error, setError] = useState('')

    const { name, img, description, MOQ, Available_Qty, Price } = part;

    useEffect(() => {
        fetch(`https://intense-ocean-10974.herokuapp.com/part/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])


    const handleBtn = (e) => {
        let qtn = parseInt(e.target.value);
        let productQtn = parseInt(Available_Qty);

        if (qtn > productQtn || qtn <= 100 - 1) {
            setBtnDisable(true);
            setError('Please Order Under Available Quantity')
        } else {
            setBtnDisable(false);
            setError('')
        }

    }
    

    const handlePurchase = event => {
        
        event.preventDefault()
        const address = event.target.address.value;
        const mobile = event.target.mobile.value;
        const order_Qty = parseInt(event.target.order_Qty.value);

        const balQty = {balQty: (parseInt(Available_Qty) - order_Qty)}
        
        console.log(balQty)
        const book = {
            img: img,
            partName: name,
            order_Qty: order_Qty,
            client: user.email,
            mobile: mobile,
            address: address,
            price: Price
        }
        
        fetch("https://intense-ocean-10974.herokuapp.com/purchase", {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                toast.success('Thanks For Your Booking')
                }
        })
        
        // fetch("https://intense-ocean-10974.herokuapp.com/user", {
        //         method: 'POST',
        //         headers: {
        //             'content-type' : 'application/json'
        //         },
        //         body: ({
        //             email: user.email,
        //             name: user.displayName,
        //         })
        //     })
        //     .then(res=>res.json()
        //     .then(data=>console.log(data)))

    }



    return (
        <div className="hero min-h-screen p-16 rounded-lg bg-base-300">
            <div className='flex items-center'>
                <div className="card w-ful lg:max-w-lg bg-base-100 shadow-xl">
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
                        </div>
                    </div>
                </div>
                <div className='bg-orange-200 w-fluid p-3 m-5'>
                    <h1 className='text-secondary text-2xl'>Product Receive Quantity</h1>
                    <form onSubmit={handlePurchase } className='grid grid-cols-1 gap-2 mt-12 justify-items-center'>
                        <input type="text" name='name' disabled value={user ? user.displayName : ''} className="input text-sm input-bordered w-full max-w-xs" required />
                        <input type="email" name='email' disabled value={user ? user.email : ''} className="input text-sm input-bordered w-full max-w-xs" required />

                        <textarea type="text" name='address' placeholder="Delivery Address" className="input pt-2 text-sm input-bordered w-full max-w-xs" required />
                        <input type="number" name='mobile' placeholder="Phone Number" className="input text-sm input-bordered w-full max-w-xs" required />
                        <input onChange={handleBtn} type="number" name='order_Qty' placeholder="Order_Qty" className="input text-sm input-bordered w-full max-w-xs" required />
                        <p className='text-[red]'>{error}</p>
                        <br />
                        <input disabled={btnDisable} className='block mx-auto btn btn-secondary rounded-lg text-white text-lg py-3 w-[320px]' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;