import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import googleLogo from '../../images/google.svg';

const Register = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    if (error || googleError) {
        errorElement = <p style={{ color: 'red' }}>Error: {error?.message} {googleError?.message}</p>
    }

    if (googleUser) {
        navigate('/');
    }

    if (user) {
        navigate('/');
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <label className='text-left' htmlFor="name">Your Name</label>
                        <input type="text" name="name" id="" required placeholder='Enter Name' />
                    </div>
                    <div className="input-group">
                        <label className='text-left' htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required placeholder='Enter Email' />
                    </div>
                    <div className="input-group">
                        <label className='text-left' htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required placeholder='Enter Password' />
                    </div>
                    <p className='text-left' style={{ color: 'red' }}>
                        {error?.message}
                    </p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Register" />
                </form>
                <p style={{ cursor: 'pointer' }} className='text-center'>
                    <span className='form-link form-link-signup'>Already have an account? </span>
                    <span onClick={navigateLogin} className='new-to-wild-text login-text'>Login</span>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button onClick={() => signInWithGoogle()} className='google-auth'>
                        <img src={googleLogo} alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>
                <div className='mb-5'>
                    {errorElement}
                </div>

            </div>
        </div>

    );
};

export default Register;