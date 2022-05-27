import React, { useEffect, useState } from 'react';

const AllUser = () => {

    const [allUser, setAlluser] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>{
            setAlluser(data)
        })
    },[])

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
                    const remainingProduct = allUser.filter(product => product._id !== id);
                    setAlluser(remainingProduct)
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
                            <th>Education</th>
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
                            <td>{user.education}</td>
                            <td><button className='btn btn-xs'>Make Admin</button></td>
                            <td><button onClick={()=>  removeUser(user._id)} className='btn btn-xs'>Remove</button></td>
                        </tr>
                        </tbody>)
                    }
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;