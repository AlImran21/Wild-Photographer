import React, { useEffect, useState } from 'react';
import './Home.css';
import banner from '../../images/wild/banner.jpg';
import ServiceDetails from '../Services/ServiceDetails';


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div>
            <div className='flex justify-items-center items-center justify-around banner-container'>
                <div className='banner-image'>
                    <img className='rounded mt-24' src={banner} alt="" />

                </div>
                <div className='mt-40 banner-heading'>
                    <div className='mr-48'>
                        <p className='banner-text-color text-3xl font-bold mr-24'>Hey, This is A.I.</p>
                        <p className='banner-text-color text-3xl font-bold mt-3'>A companion to frame</p>
                        <p className='banner-text-color text-3xl font-bold mt-3'>Your favorite moments</p>
                    </div>
                    <p className='banner-description text-xl mt-8'>Photographers record events and tells stories using images. <br /> They take pictures of people, places, events, and objects. <br /> Photographers often specialize in a type of photography. <br /> Portrait photographers take pictures of people <br /> in studios or on-site at various locations.</p>
                </div>
            </div>
            <div className='mt-40 mb-10 mx-auto'>
                <p className='text-4xl font-bold'>Our Services : ({services.length})</p>
                <div className=''>
                    <div className='services-container'>
                        {
                            services.map(service => <ServiceDetails
                                key={service.id}
                                service={service}
                            ></ServiceDetails>)
                        }
                    </div>
                </div>

            </div>

        </div>


    );
};

export default Home;