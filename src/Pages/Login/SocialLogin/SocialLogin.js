import React from 'react';
import img1 from '../../../images/social/google_PNG19630.png';
import img2 from '../../../images/social/github.png';
import img3 from '../../../images/social/facebook.png';
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';



const SocialLogin = () => {
    const [signInWithGoogle, user, error,] = useSignInWithGoogle(auth)
    const [signInWithGithub] = useSignInWithGithub(auth)
    const [signInWithFacebook] = useSignInWithFacebook(auth)
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const googleSignIn = () => {
        signInWithGoogle()
    }

    if (error) {
        // return (
        //     <div>
        //         <p className='text-danger '>Error: {error.message}</p>
        //     </div>
        // );
        console.error(error.message);
    }
    const githubSignIn = () => {
        signInWithGithub(auth.user)
    }

    const facebookSignIn = () => {
        signInWithFacebook(auth.user)
    }
    // let errorElement;

    return (
        <div>
            <button onClick={() => googleSignIn()} className=' d-flex justify-content-center align-items-center btn btn-primary btn-lg w-100 mt-1 position-relative'>
                <img className='me-2' width={'30px'} src={img1} alt="" />
                <p className='m-0'>Google Login</p>
            </button>
            <button onClick={() => githubSignIn()} className=' d-flex justify-content-center align-items-center btn btn-primary btn-lg w-100 mt-1 position-relative'>
                <img className='me-2' width={'30px'} src={img2} alt="" />
                <p className='m-0'>Github Login</p>
            </button>
            <button onClick={() => facebookSignIn()} className=' d-flex justify-content-center align-items-center btn btn-primary btn-lg w-100 mt-1 position-relative'>
                <img className='me-2' width={'30px'} src={img3} alt="" />
                <p className='m-0 '>Facebook Login</p>
            </button>

        </div>
    );
};

export default SocialLogin;