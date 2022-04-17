import React from 'react';
import professional2 from '../../images/professional/professional2.jpg';
import './About.css'


const About = () => {
    return (
        <div>
            <p className='text-3xl text-left font-mono ml-20 mb-5'>Al-Imran</p>
            <div className='professional-men ml-20'>
                <img src={professional2} alt="" />
            </div>
            <p
                className='text-3xl font-bold text-left mt-8 ml-20'>
                My goal : <span
                    style={{ lineHeight: '30px' }}
                    className='text-xl font-medium mt-8 mb-12 text-left'>
                    Honestly, I think a finisher can have only one goal in Struggle Time, <br /> and that is to use his talent and work tirelessly. Maybe less than others! <br /> But, I believe that my hard work will never deceive me. <br />So, hard worker is definitely a winner!
                </span>
            </p>
        </div>
    );
};

export default About;