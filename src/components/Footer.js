import React from "react";
import gitHub from '../images/footer-icons/gitHub.svg';
import linkedIn from '../images/footer-icons/linkedIn.svg';
import envelope from '../images/footer-icons/envelope.svg';
import './Footer.scss';

const Footer = () => {
    return (
        <div>
            <a href='https://github.com/jWeibelbootcamp'>
                <img src={gitHub} alt='GitHub' width="50px" height="50px" />
            </a>
            <a href='https://www.linkedin.com/in/jason-weibel/'>
                <img src={linkedIn} alt='LinkedIn' width="50px" height="50px" />
            </a>
            <a href='mailto:weibel.jason@gmail.com'>
                <img src={envelope} alt='Email' width="50px" height="50px" />
            </a>
        </div>
    );
};

export default Footer;