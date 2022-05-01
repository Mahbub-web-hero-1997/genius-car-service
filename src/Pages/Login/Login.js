import React, { useRef } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div>
            <h2 className='text-center text-primary mt-3'>LogIn</h2>
            <div className="w-50 form_Container mx-auto b mb-5 p-3 ">
                <form onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control ref={emailRef} type="email" placeholder="name@example.com" required />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </FloatingLabel>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className='w-100 btn btn-lg' variant="primary" type="submit">
                        LogIn
                    </Button>
                </form>
                <p className='m-2'>New to Genius car? <span onClick={() => navigateRegister()} className='text-danger btn'>Plese Register</span></p>
                <div className='d-flex align-items-center '>
                    <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                    <small className='px-2 mb-1'>or</small>
                    <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                </div>
                <SocialLogin></SocialLogin>



            </div>
        </div >
    );
};

export default Login;