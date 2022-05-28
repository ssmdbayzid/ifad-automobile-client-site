import React from 'react';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Share/Loading';


const AllProduct = () => {
    const {data: allParts, isLoading, refetch} = useQuery('users', () => fetch('https://intense-ocean-10974.herokuapp.com/part').then(res=>res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    console.log(allParts)




    const removePart = (id) => {
        const proceed = window.confirm('Are You Sire');
        if(proceed){
            const url = `http://localhost:5000/part/${id}`;

            fetch( url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    refetch()
                    toast.success('Successfully Remove Items')
                }
            })
        }
    }
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
                            <th>Available Qty</th>
                            <th>Price</th>
                            <th>Remove Items</th>
                        </tr>
                    </thead>
                    {/* const { name, _id, img, description, MOQ, Available_Qty, Price } = part; */}

                    {
                        allParts && allParts.map((part, index) =>
                            <tbody key={part?._id}
                                className="text-secondary text-center"
                            >

                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{part.name}</td>
                                    <td>
                                        <img style={{ width: '75px' }} src={part.img} alt="" />
                                    </td>
                                    <td>{part.Available_Qty}</td>
                                    <td>${part.Price}</td>
                                    <td>
                                        <button onClick={() => removePart(part._id)} style={{ backgroundColor: 'gold', padding: '2px 10px', borderRadius: '10px' }} >Remove</button>
                                    </td>
                                </tr>
                            </tbody>)
                    }
                </table>
            </div >
        </div>
    );
};

export default AllProduct;