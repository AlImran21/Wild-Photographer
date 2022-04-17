import React from 'react';
import Error404 from '../../images/404.webp';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className='error-alignment'>
                <img src={Error404} alt="" />
            </div>
        </div>
    );
};

export default NotFound;