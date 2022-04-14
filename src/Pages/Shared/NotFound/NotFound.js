import React from 'react';
import error from '../../../images/error.jpg'

const NotFound = () => {
    return (
        <div width={'100%'} className='d-flex justify-content-center align-items-center'>
            <img width={'100%'} height={'400px'} src={error} alt="" />
        </div>
    );
};

export default NotFound;