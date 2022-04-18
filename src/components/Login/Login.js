import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import googleLogo from '../../images/google.svg';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    let errorElement;

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);


    if (error || googleError) {
        errorElement = <p style={{ color: 'red' }}>Error: {error?.message} {googleError?.message}</p>
    }

    if (user || googleUser) {
        navigate('/');
    }


    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        signInWithEmailAndPassword(email, password);


    }

    const navigateRegister = (event) => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please, enter your email');
        }

    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label className='text-left' htmlFor="email">Email</label>
                        <input ref={emailRef} type="email" name="email" id="" required placeholder='Enter Email' />
                    </div>
                    <div className="input-group">
                        <label className='text-left' htmlFor="password">Password</label>
                        <input ref={passwordRef} type="password" name="password" id="" required placeholder='Enter Password' />
                    </div>
                    <p className='text-left' style={{ color: 'red' }}>
                        {error?.message}
                    </p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p style={{ cursor: 'pointer' }} className='text-center'>
                    <span className='new-to-wild-text'>New to Wild Photographer?</span>
                    <span onClick={navigateRegister} className='form-link ml-2'>Please, Register</span>
                </p>
                <p style={{ cursor: 'pointer' }} className='text-center py-2'>
                    <span className='new-to-wild-text'>Forget Password?</span>
                    <span onClick={resetPassword} className='text-blue-500 ml-2'>Reset Password</span>
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
                {/* <div className='mb-5'>
                    {errorElement}
                </div> */}
                <ToastContainer />

            </div>
        </div>
    );
};

export default Login;