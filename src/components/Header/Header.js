import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link to='/' className='banner-text-color font-sans font-bold text-xl text-grey-600'>Wild Photographer</Link>
            </div>
            <div className='flex gap-4 text-xl font-medium'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                {
                    user ? <button
                        onClick={handleSignOut}
                        className='sign-out-button py-1 px-3 text-white rounded'>
                        Sign Out
                    </button>
                        :
                        <CustomLink to='/login'>
                            Login
                        </CustomLink>
                }
            </div>
        </div>
    );
};

export default Header;