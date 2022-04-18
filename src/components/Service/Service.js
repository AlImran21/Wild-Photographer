import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Service = () => {
    const {serviceId} = useParams();

    return (
        <div>
             <div>
            <p className='text-3xl font-semibold'>Welcome to detail : {serviceId}</p>
            <Link to='/checkout'>
                <button className='my-4 py-2 px-4 bg-red-400 text-white rounded'>Proceed Checkout </button>
            </Link>
        </div>
        </div>
    );
};

export default Service;