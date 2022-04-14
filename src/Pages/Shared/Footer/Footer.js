import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className='footer bg-primary'>
                <p><small>Copyright &copy; {(new Date().getFullYear())}</small></p>

            </footer>
        </div>
    );
};

export default Footer;