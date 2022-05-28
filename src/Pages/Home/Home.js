import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Footer from './Footer';
import Parts from './Parts';
import Review from './Review';
import Summary from './Summary';
import Supplier from './Supplier';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Review></Review>
            <Banner2></Banner2>
            <Supplier></Supplier>
            <Footer></Footer>
        </div>
    );
};

export default Home;