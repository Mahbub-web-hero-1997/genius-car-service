import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../../../images/google_PNG19630.png'

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = event => {
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(name, email, password, confirmPassword);
        event.preventDefault()
    }
    const navigateRegister = event => {
        navigate('/login')
    }
    return (
        <div>
            <h2 className='text-center text-primary mt-3'>Register</h2>
            <div className="w-50 form_Container mx-auto b mb-5 p-3 ">
                <form onSubmit={handleSubmit}>
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
                        LogIn
                    </Button>
                </form>
                <p className='m-2'>Already have an account? <span onClick={() => navigateRegister()} className='text-danger btn'>Please Login</span></p>
                <button className=' d-flex justify-content-center align-items-center btn btn-primary btn-lg w-100 mt-1 position-relative'>
                    <img className='me-2' width={'6%'} src={img} alt="" />
                    <p className='m-0'>Continue With Google</p>
                </button>
            </div>
        </div >
    );
};

export default Login;