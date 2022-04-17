import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <p className='text-3xl font-bold text-left mt-8 ml-20'>Q1. What is the difference between authorization and authentication?</p>
                <p
                    style={{ lineHeight: '10px' }}
                    className='text-2xl font-medium mt-8 mb-12 text-left ml-20'>
                    Authentication
                </p>
                <p
                    style={{ lineHeight: '10px' }}
                    className='text-xl font-medium mt-8 mb-12 text-left ml-20'>
                    1. Authentication verifies who the user is.
                </p>
                <p
                    style={{ lineHeight: '10px' }}
                    className='text-xl font-medium mt-8 mb-12 text-left ml-20'>
                    2. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                </p>
                <p
                    style={{ lineHeight: '10px' }}
                    className='text-xl font-medium mt-8 mb-12 text-left ml-20'>
                    3. Authentication is the first step of a good identity and access management process.
                </p>
                <p
                    style={{ lineHeight: '10px' }}
                    className='text-xl font-medium mt-8 mb-12 text-left ml-20'>
                    4. Authentication is visible to and partially changeable by the user.
                </p>
                <p
                    style={{ lineHeight: '10px' }}
                    className='text-2xl font-medium mt-8 mb-12 text-left ml-20'>
                    Authorization
                </p>
                <p
                    style={{ lineHeight: '10px' }}
                    className='text-xl font-medium mt-8 mb-12 text-left ml-20'>
                    1. Authorization determines what resources a user can access.
                </p>
                <p
                    style={{ lineHeight: '10px' }}
                    className='text-xl font-medium mt-8 mb-12 text-left ml-20'>
                    2. Authorization works through settings that are implemented and maintained by the organization.
                </p>
                <p
                    style={{ lineHeight: '10px' }}
                    className='text-xl font-medium mt-8 mb-12 text-left ml-20'>
                    3. Authorization always takes place after authentication.
                </p>
                <p
                    style={{ lineHeight: '10px' }}
                    className='text-xl font-medium mt-8 mb-12 text-left ml-20'>
                    4. Authorization isn’t visible to or changeable by the user.
                </p>
            </div>
            <div>
                <p
                    className='text-3xl font-bold text-left mt-8 ml-20'>
                    Q2.1 Why are you using firebase?
                </p>

                <p
                    className='text-3xl font-bold text-left mt-8 ml-20'>
                    Q2.2 What other options do you have to implement authentication?
                </p>

                <p
                    className='text-3xl font-bold text-left mt-8 ml-20'>A2.1 : <span
                        style={{ lineHeight: '30px' }}
                        className='text-xl font-medium mt-8 mb-12 text-left'>
                        Firebase by Google can be used for the following: Firebase manages all data real-time in the database. <br /> So, the exchange of data to and from the database is easy and quick. <br /> Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.</span>
                </p>

                <p
                    className='text-3xl font-bold text-left mt-8 ml-20'>
                    A2.2 : <span
                        style={{ lineHeight: '30px' }}
                        className='text-xl font-medium mt-8 mb-12 text-left'>
                        Usually, authentication by a server entails the use of a user name and password. <br /> Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. <br />Authentication by a client usually involves the server giving a certificate to the client <br /> in which a trusted third party such as Verisign or Thawte states that the server <br /> belongs to the entity (such as a bank) that the client expects it to.
                    </span>
                </p>

                <p
                    className='text-3xl font-bold text-left mt-8 ml-20'>
                    Q3. What other services does firebase provide other than authentication?
                </p>
                <p
                    className='text-2xl font-medium text-left mt-8 ml-20'>
                    There are many services which Firebase provides, Most useful of them are:
                </p>
                <p className='text-xl font-medium text-left mt-6 ml-20'>1. Cloud Firestore.</p>
                <p className='text-xl font-medium text-left mt-6 ml-20'>2. Cloud Functions.</p>
                <p className='text-xl font-medium text-left mt-6 ml-20'>3. Authentication.</p>
                <p className='text-xl font-medium text-left mt-6 ml-20'>4. Hosting.</p>
                <p className='text-xl font-medium text-left mt-6 ml-20'>5. Cloud Storage.</p>
                <p className='text-xl font-medium text-left mt-6 ml-20'>6. Google Analytics.</p>
                <p className='text-xl font-medium text-left mt-6 ml-20'>7. Predictions.</p>
                <p className='text-xl font-medium text-left mt-6 ml-20'>8. Cloud Messaging.</p>
            </div>

        </div>
    );
};

export default Blogs;