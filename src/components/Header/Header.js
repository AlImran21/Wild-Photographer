import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <p className='banner-text-color font-sans font-bold text-xl text-grey-600'>Wild Photographer</p>
            </div>
            <div className='flex gap-4 text-xl font-medium'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/login'>Login</CustomLink>
            </div>
        </div>
    );
};

export default Header;