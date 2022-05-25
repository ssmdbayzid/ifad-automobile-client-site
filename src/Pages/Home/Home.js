import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Parts from './Parts';
import Review from './Review';
import Summary from './Summary';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;