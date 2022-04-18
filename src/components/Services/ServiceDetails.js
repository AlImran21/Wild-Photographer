import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetails.css'


const ServiceDetails = ({ service }) => {
    const {id, picture, name, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }

    return (
        <div className="service-container">
            <div className='service-details m-10'>
                <div className='card-img'>
                    <img src={picture} alt="" />
                </div>
                <h6 className='service-name text-2xl font-semibold'>{name}</h6>
                <p className='service-price text-xl font-semibold'>Price : {price}</p>
                <p
                    className='service-desc font-sans'>
                    <small>{description.length < 150 ? description.length : description.slice(0, 150)}
                    </small>
                    ...
                </p>
                <button onClick={() => navigateToServiceDetail(id)} className='service-button'>Explore</button>
            </div>
        </div>
    );
};

export default ServiceDetails;