import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../image/ifad_logo.png'
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth)

    const logOut = () => {
        signOut(auth)
    }

    const navbar = <>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        {user && <li><Link to={'/order'}>Order</Link></li>}
        { user && <li><Link to={'/review'}>Add a Reviews</Link></li>}
        { user && <li><Link to={'/profile'}>My Profile</Link></li>}
        <li><Link to={'/blog'}>Blog</Link></li>
        {user && <li><Link to={'dashboard'}>Dashboard</Link></li>}
        {user ? <button onClick={logOut} className='btn mx-3 btn-secondary'>Log Out</button>
            :
            <li><Link to={'log-in'}>Log In</Link></li>

        }
        {user ? '' : <li><Link to={'sign-up'}>Register</Link></li>}

    </>

    return (
        <div className="navbar related top-0 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact font-bold dropdown-content mt-3 p-2  bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <div className='flex items-center justity-center'>
                    <img src={logo} style={{ width: '150px' }} className="" alt="logo" />
                    <a className="text-primary font-bold normal-case text-xl">IFAD AUTOS LTD</a>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  font-bold p-0">
                    {navbar}

                </ul>
            </div>
        </div>
    );
};

export default Header;