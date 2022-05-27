import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import banner from '../../image/comBanner.jpg'
const Review = () => {
    const [user] = useAuthState(auth)
    console.log(user)

    const handleReview = event => {
        event.preventDefault()
        const client = event.target.client.value;
        const comment = event.target.comment.value;
        const rating = event.target.rating.value;

        const review = {
            name: client,
            img: user.photoURL,
            comment: comment,
            rating: rating
        }

    }
    

    return (
        <div style={{backgroundImage : `url(${banner})`, backgroundSize: 'cover'}} className='min-h-screen bg-green-700 flex justify-center items-center'>
            <div className="p-6 rounded-lg text-white pt-44  pb-12 items-center w-2/5">
                <h1 className='text-center pt-6 text-accent text-3xl'>Please Put Your Review</h1>

                <form onSubmit={handleReview}  className='w-full mt-6 justify-center'>

                    <input type="text" name='name' placeholder={user.displayName} className=" w-full text-accent font-bold mb-3  p-3 mx-auto rounded " disabled />
                    <textarea type="text" name='comment' placeholder="Comment" className=" w-full text-secondary mb-3  p-3 mx-auto rounded " required />

                    <input type="number" name='rating' placeholder="Rating" className=" w-full text-secondary mb-3  p-3 mx-auto rounded " required />
       

                    <input type="submit" className='btn w-full btn-primary' value="Submit Review" />
                </form>
            </div>
        </div>
    );
};

export default Review;