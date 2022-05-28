import React, { useEffect, useState } from 'react';

const Review = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("https://intense-ocean-10974.herokuapp.com/review")
            .then(res => res.json())
            .then(data => setReviews(data))


    }, [])
    return (
        <div>
            <h1 className='text-primary text-center text-3xl'>OUR CLIENT SAYS</h1>
            <div className='grid gap-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>

            {
                reviews && reviews.map(review =>
                        <div className="hero shadow-xl my-8">
                            <div className="hero-content flex-col lg:flex-row">
                                <img className="mask w-[150px] lg:w-[100px] mask-diamond" src={review.img} alt="" />
                                <div>
                                    <h1 className="text-xl font-bold">{review.name}</h1>
                                    <p className="py-6">{review.comment}</p>
                                    <p>Rating : {review.Rating}</p>
                                </div>
                            </div>
                        </div>
                )
            }
                    </div>


        </div>
    );
};

export default Review;