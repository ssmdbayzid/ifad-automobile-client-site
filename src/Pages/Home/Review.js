import React from 'react';

const Review = () => {
    return (
        <div>
            <h1 className='text-primary text-center text-3xl'>OUR CLIENT SAYS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className="mask w-[150px] lg:w-[100px] mask-diamond" src="https://cdn.lorem.space/images/face/.cache/500x0/rowan-freeman-G-4OXlHo86o-unsplash.jpg" />
                        <div>
                            <h1 className="text-xl font-bold">Michel</h1>
                            <p className="py-6">Bought my car from Gillis and had an amazing experience! The service department is also amazing, I take my car there of oil changes. Always super friendly and honest!</p>
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className="mask w-[150px] lg:w-[100px] mask-diamond" src="https://cdn.lorem.space/images/face/.cache/500x0/levi-meir-clancy-dUxPllTaF18-unsplash.jpg" />
                        <div>
                            <h1 className="text-xl font-bold">Watson</h1>
                            <p className="py-6">Bought my car from Gillis and had an amazing experience! The service department is also amazing, I take my car there of oil changes. Always super friendly and honest!</p>
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary"  />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" checked/>
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className="mask w-[150px] lg:w-[100px] mask-diamond" src="https://cdn.lorem.space/images/face/.cache/500x0/jordan-whitfield-WjUy3NY95yU-unsplash.jpg" />
                        <div>
                            <h1 className="text-xl font-bold">Riki Poiting</h1>
                            <p className="py-6">Bought my car from Gillis and had an amazing experience! The service department is also amazing, I take my car there of oil changes. Always super friendly and honest!</p>
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;