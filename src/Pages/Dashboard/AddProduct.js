import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const AddProduct = () => {


    const navigate = useNavigate()
    const handleReview = event => {
        event.preventDefault()
        

        const name = event.target.name.value;
        const img = event.target.img.value;
        const description = event.target.description.value;
        const MOQ = event.target.MOQ.value;
        const Available_Qty = event.target.Available_Qty.value;
        const Price = event.target.Price.value;

        const newProduct = {
            name: name,
            img: img,
            MOQ: MOQ,
            description: description,
            Available_Qty: Available_Qty,
            Price: Price
        }

        console.log(newProduct)
        fetch("https://intense-ocean-10974.herokuapp.com/part",{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast('Added New Product')
                navigate('/dashboard')
            }
        })
        
    }
    

    return (
        <div className='min-h-screen bg-base-200  flex justify-center items-center'>
            <div className="p-6 rounded-lg bg-orange-200 text-white pt-16  pb-12 items-center w-2/5">
                <h1 className='text-center text-accent text-3xl'>Add New Product</h1>

                <form onSubmit={handleReview}  className='w-full mt-6 justify-center'>

                    <input type="text" name='name' placeholder="Product Name" className=" w-full text-accent  mb-3  p-3 mx-auto rounded "/>
                    <input type="text" name='img' placeholder="Img URL" className=" w-full text-accent  mb-3  p-3 mx-auto rounded " />
                    <textarea type="text" name='description' placeholder="Details of Product" className=" w-full text-secondary mb-3  p-3 mx-auto rounded " required />

                    <input type="number" name='MOQ' placeholder="Minimum Order Qty" className=" w-full text-secondary mb-3  p-3 mx-auto rounded " required />
                    <input type="number" name='Available_Qty' placeholder="Available Qty" className=" w-full text-secondary mb-3  p-3 mx-auto rounded " required />
                    <input type="number" name='Price' placeholder="Price" className=" w-full text-secondary mb-3  p-3 mx-auto rounded " required />


                    <input type="submit" className='btn w-full btn-primary' value="Submit Review" />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddProduct;