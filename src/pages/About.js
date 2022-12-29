import React from "react";
import { Image } from "react-bootstrap";
import Photo from "../images/photo.png";
import TypewriterBlurb from "../components/Typewriter";
import TechCarousel from "../components/TechCarousel";
import './About.scss';

const About = () => {
    return (
        <div >
            <div className="aboutContainer">
                <div className="photoContainer">
                    <Image src={Photo} alt='Jason Self Photo' />
                </div>
                <div className="blurbContainer">
                    <TypewriterBlurb />
                </div>
                <div className="carouselContainer">
                    <TechCarousel className='techCarousel' />
                </div>
            </div>
        </div>
    );
};

export default About;