import React from 'react';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Share/Loading';


const AllOrder = () => {
    const {data: allOrder, isLoading, refetch} = useQuery('allOrder', () => fetch('https://intense-ocean-10974.herokuapp.com/allOrder').then(res=>res.json()))

    if(isLoading){
        return <Loading></Loading>
    }




    const removeOrder = (id) => {
        const proceed = window.confirm('Are You Sure');
        if(proceed){
            const url = `https://intense-ocean-10974.herokuapp.com/allOrder/${id}`;

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
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Items Name</th>
                            <th>Buyer</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    {
                        allOrder && allOrder.map((order, index)=><tbody
                        key={order._id}                        
                        >
                        <tr>
                            <td>{index + 1}</td>
                            <td>{order.partName}</td>
                            <td>{order.client}</td>
                            <td><button onClick={()=>  removeOrder(order._id)} className='btn btn-xs'>Remove</button></td>
                        </tr>
                        </tbody>)
                    }
                    <tbody>

                    </tbody>
                    <ToastContainer />
                </table>
            </div>
            
        </div>
    );
};

export default AllOrder;