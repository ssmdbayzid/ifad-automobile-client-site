import React from 'react';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../Share/Loading';

const Dashboard = () => {


    const {data: allUser, isLoading} = useQuery('users', () => fetch('https://intense-ocean-10974.herokuapp.com/user').then(res=>res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-5xl'>Dash Board</h1>
                <Outlet></Outlet>
                
            </div>
            
                


                    {/* <!-- Sidebar content here --> */}

                    {
                        allUser && allUser.map(user=>
                            <div className="drawer-side">
                            <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    <li><Link to={"/dashboard"} >My Dash Board</Link></li>
                    { user.role !== 'Admin' && <li><Link to={'order'} >My Order</Link></li>}
                    {user.role !== 'Admin' &&<li><Link to={'review'} >My Review</Link></li>}
                    <li><Link to={'profile'} >My Profile</Link></li>
                     <li><Link to={'addProduct'} >Add A New Product</Link></li>
                    {user.role !== 'Admin' &&<li><Link to={'allUser'} >Make Admin</Link></li>}
                    <li><Link to={'allOrder'} >Manage All Order</Link></li>
                    <li><Link to={'allProduct'} >Manage Products</Link></li>
                    </ul>
                    </div>)
                    }
                    
             

            
        </div>
    );
};

export default Dashboard;