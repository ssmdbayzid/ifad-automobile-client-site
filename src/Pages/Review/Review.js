import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import banner from '../../image/comBanner.jpg'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const Review = () => {
    const [user] = useAuthState(auth)

    const handleReview = event => {
        event.preventDefault()
        
        const comment = event.target.comment.value;
        const rating = event.target.rating.value;

        if(rating > 5){
            alert("minimum Rating 1 & Maximim Rating 5")
            return;
        }

        const review = {
            name: user.displayName,
            img: user.photoURL,
            comment: comment,
            Rating: rating
        }

        fetch("http://localhost:5000/review",{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast('Thanks for Your Review')
            }
        })
        
    }
    

    return (
        <div style={{backgroundImage : `url(${banner})`, backgroundSize: 'cover'}} className='min-h-screen flex justify-center items-center'>
            <div className="p-6 rounded-lg text-white pt-16  pb-12 items-center w-2/5">
                <h1 className='text-center text-accent text-3xl'>Please Put Your Review</h1>

                <form onSubmit={handleReview}  className='w-full mt-6 justify-center'>

                    <input type="text" name='name' placeholder={user?.displayName} className=" w-full text-accent font-bold mb-3  p-3 mx-auto rounded " disabled />
                    <textarea type="text" name='comment' placeholder="Comment" className=" w-full text-secondary mb-3  p-3 mx-auto rounded " required />

                    <input type="number" name='rating' placeholder="Rating" className=" w-full text-secondary mb-3  p-3 mx-auto rounded " required />
       

                    <input type="submit" className='btn w-full btn-primary' value="Submit Review" />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Review;