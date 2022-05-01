import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';





const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        createUserWithEmailAndPassword(email, password)

    }
    const navigateRegister = event => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <h2 className='text-center text-primary mt-3'>Register</h2>
            <div className="w-50 form_Container mx-auto b mb-5 p-3 ">
                <form onSubmit={handleRegister}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" name='name' placeholder="name@example.com" required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" name='email' placeholder="name@example.com" required />
                    </FloatingLabel>
                    <FloatingLabel className='mb-3' controlId="floatingPassword" label="Password">
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </FloatingLabel>
                    <FloatingLabel className='mb-3' controlId="floatingPassword" label="Confirm Password">
                        <Form.Control type="password" name='confirmPassword' placeholder="Password" required />
                    </FloatingLabel>
                    <Button className='w-100 btn btn-lg' variant="primary" type="submit">
                        Register
                    </Button>
                </form>
                <p className='m-2'>Already have an account? <span onClick={() => navigateRegister()} className='text-danger btn'>Please Login</span></p>
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

export default Register;