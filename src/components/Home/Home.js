import React from 'react';
import './Home.css';
import banner from '../../images/wild/banner.jpg';


const Home = () => {
    return (
        <div>
            <div className='flex justify-items-center items-center justify-around'>
                <div className='banner-image'>
                    <img className='rounded mt-24' src={banner} alt="" />

                </div>
                <div className='mt-40'>
                    <div className='mr-48'>
                        <p className='banner-text-color text-3xl font-bold mr-24'>Hey, this is A.I.</p>
                        <p className='banner-text-color text-3xl font-bold mt-3'>A companion to frame</p>
                        <p className='banner-text-color text-3xl font-bold mt-3'>Your favorite moments</p>
                    </div>
                    <p className='banner-description text-xl mt-8'>Photographers record events and tells stories using images. <br /> They take pictures of people, places, events, and objects. <br /> Photographers often specialize in a type of photography. <br /> Portrait photographers take pictures of people <br /> in studios or on-site at various locations.</p>
                </div>
            </div>
            <div className='mt-40 mb-40 mx-auto'>
                {/* <p className='text-4xl font-bold'>Customers Reviews : ({reviews.length})</p>
            <div className='reviews-container grid grid-cols-3 gap-45 mt-16'>
                {
                    reviews.map(review => <Reviews
                        key={review.id}
                        review={review}
                    ></Reviews>)
                }
            </div> */}
            </div>

        </div>


    );
};

export default Home;