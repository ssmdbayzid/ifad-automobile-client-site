import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {

    const [user] = useAuthState(auth)

    const handleProfile = event => {
        event.preventDefault()
        if (user) {
            const name = user.displayName;
            const email = user.email;
            const education = event.target.education.value;
            const location = event.target.location.value;
            const mobile = event.target.mobile.value;
            const idLink = event.target.idLink.value;

            const newUser = {
                name: name,
                email: email,
                education: education,
                mobile: mobile,
                location: location,
                idLink: idLink
            }

            fetch('https://intense-ocean-10974.herokuapp.com/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }

    }

    return (
        <div className="hero min-h-screen  bg-base-300">
            <div className='bg-orange-200 w-fluid p-16 m-5'>
                <h1 className='text-secondary font-bold text-2xl text-center'>My Profile</h1>
                <form onSubmit={handleProfile} className='grid grid-cols-1 gap-2 mt-12 justify-items-center'>
                    <input type="text" name='name' disabled value={user ? user.displayName : ''} className="input text-sm input-bordered w-full max-w-xs" required />
                    <input type="email" name='email' disabled value={user ? user.email : ''} className="input text-sm input-bordered w-full max-w-xs" required />

                    <input type="text" name='education' placeholder="Last Educational Degree" className="input text-sm input-bordered w-full max-w-xs" required />
                    <textarea type="text" name='location' placeholder="Cit Name /District Name" className="input pt-2 text-sm input-bordered w-full max-w-xs" required />
                    <input type="number" name='mobile' placeholder="Phone Number" className="input text-sm input-bordered w-full max-w-xs" required />
                    <input type="text" name='idLink' placeholder="Your Facebook/LinkedIn Profile Link" className="input text-sm input-bordered w-full max-w-xs" required />

                    <input className='block mx-auto btn btn-secondary rounded-lg text-white text-lg py-3 w-[320px]' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Profile;