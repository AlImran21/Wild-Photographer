import React from 'react'
import './Footer.css'

const Footer = () => {
    const today = new Date ();
    const year = today.getFullYear ();

  return (
    <footer className='bg-white  w-full py-8 mt-8'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className='footer-text banner-text-color text-center text-cyan-600 pt-10 sm:pt-12 font-medium font-mono flex items-center justify-center'>
          All Rights Reserved By &copy; Photographer World <span className='dynamic-year font-sans ml-2'>{year}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer