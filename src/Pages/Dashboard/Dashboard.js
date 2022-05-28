import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-5xl'>Dash Board</h1>
                <Outlet></Outlet>
                
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={"/dashboard"} >My Dash Board</Link></li>
                    <li><Link to={'order'} >My Order</Link></li>
                    <li><Link to={'review'} >My Review</Link></li>
                    <li><Link to={'profile'} >My Profile</Link></li>
                    <li><Link to={'addProduct'} >Add A New Product</Link></li>
                    <li><Link to={'allUser'} >Make Admin</Link></li>
                    <li><Link to={'allOrder'} >Manage All Order</Link></li>
                    <li><Link to={'allProduct'} >Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;