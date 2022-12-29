import { React, useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Photo from "../images/photo.png";
import TypewriterBlurb from "../components/Typewriter";
import TechCarousel from "../components/TechCarousel";
import './About.scss';

// delays rendering of whatever it wraps
const useDelayedRender = delay => {
    const [delayed, setDelayed] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => setDelayed(false), delay);
        return () => clearTimeout(timeout);
    }, [delay]);
    return fn => !delayed && fn();
};

const DelayedRender = ({ delay, children }) => useDelayedRender(delay)(() => children);
// end delay

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
                    <DelayedRender delay={16500}>
                        <TechCarousel className='techCarousel' />
                    </DelayedRender>
                </div>
            </div>
        </div>
    );
};

export default About;