import React from "react";
import { Image } from "react-bootstrap";
import Photo from "../images/photo.png";
import TechCarousel from "../components/TechCarousel";
import './About.scss';

// probably remove the tech carousel cuz it's just problematic - maybe add an animejs effect for the text typing out real quick.
const About = () => {
    return (
        <div >
            <div className="aboutContainer">
                <div className="photoContainer">
                    <Image src={Photo} alt='Jason Self Photo' />
                </div>

                <p>The past ten years, I have been working as a commercial real estate appraiser. Before that, I attended Vermont Law School where I studied environmental law and received a JD and Master of Environmental Law and Policy. My undergraduate education took place at the University of Georgia where I majored in English with a minor in History and a specialization in Medieval Studies. My strengths in all of these subjects are centered in skills surrounding reading, writing, editing, language, and research.</p>
                <p>In 2022, I completed the Full Stack Coding Bootcamp at the Georgia Institute of Technology where I learned MERN stack development. While not applying directly, my previous experience demonstrates expertise at research, parsing dense documentation, and attention to detail - all beneficial skills for development.</p>
                <p>My current skills include, but are not limited to the MERN stack - MongoDB, Express, React, and NodeJS - as well as MySQL, HTML, and various CSS libraries.</p>
            
            <TechCarousel className='techCarousel' />
            </div>
        </div>
    );
};

export default About;