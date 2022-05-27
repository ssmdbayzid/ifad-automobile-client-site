import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword, signInUser, signInLoading, error1,] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const location = useLocation()

    console.log(signInLoading || gLoading)

    let from = location?.state?.from?.pathname || "/home"

    if (signInLoading || gLoading) {
        return <p>Loading...</p>;
    }

    if (signInUser || gUser) {
        navigate(from, { replace: true })
    }


    let errors;

    if (error1 || gError){
        errors = <p className='text-[red]'>{error1.message} {gError.message}</p>
    }

    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
        console.log(email, password)
    }


    return (
        <div className="hero min-h-screen rounded-lg bg-base-300">

            <div className="p-6 rounded-lg bg-orange-200 py-12 items-center w-2/5">
                <h1 className='text-center text-accent text-3xl'>Please Log In</h1>

                <form onSubmit={handleLogIn} className='w-full justify-center p-6'>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className=" w-full p-3 mx-auto rounded " required />

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className=" w-full p-3 mx-auto rounded " required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    {errors}
                    <label className="label">
                        <span> New In IFAD Autos?<a href="/sign-up" className=" text-red-500 font-bold ml-2 text-secondary ">Sign Up</a></span>
                    </label>
                    <input type="submit" className='btn w-full btn-primary' value="Log In" />
                </form>
                <p onClick={()=>signInWithGoogle()} className='btn w-[89%] mx-6 text-lg'> <FcGoogle className='mr-3'/> Sign In With Google</p>

            </div>

        </div>
    );
};

export default LogIn;