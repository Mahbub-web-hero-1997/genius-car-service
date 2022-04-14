import React, { useRef } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../../images/google_PNG19630.png'

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
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
                <button className=' d-flex justify-content-center align-items-center btn btn-primary btn-lg w-100 mt-1 position-relative'>
                    <img className='me-2' width={'6%'} src={img} alt="" />
                    <p className='m-0'>Continue With Google</p>
                </button>


            </div>
        </div >
    );
};

export default Login;