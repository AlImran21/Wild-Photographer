import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import googleLogo from '../../images/google.svg';

const Login = () => {
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
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button className='google-auth'>
                        <img src={googleLogo} alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;