import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Share/Loading';

const AllUser = () => {

    // const [allUser, setAlluser] = useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/user')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setAlluser(data)
    //     })
    // },[])
    const {data: allUser, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user').then(res=>res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    const makeAdmin = (email) =>{

        fetch(`http://localhost:5000/admin/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'json/application'
            },
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            refetch()
            toast.success('Success Fully Make an Admin')
        })
        

    }

    const removeUser = (id) => {
        const proceed = window.confirm('Are You Sire');
        if(proceed){
            const url = `http://localhost:5000/user/${id}`;

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
            <h1>All User is Heere</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Email</th>
                            <th>Catagory</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    {
                        allUser && allUser.map((user, index)=><tbody
                        key={user._id}                        
                        >
                        <tr>
                            <td>{index + 1}</td>
                            <td>{user.email}</td>
                            <td>{ user.role !== 'Admin' && <button onClick={()=> makeAdmin(user.email)} className='btn btn-xs'>Make Admin</button>}</td>
                            <td><button onClick={()=>  removeUser(user._id)} className='btn btn-xs'>Remove</button></td>
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

export default AllUser;