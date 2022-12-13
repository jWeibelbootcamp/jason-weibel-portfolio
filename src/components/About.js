import React from "react";
import { Image } from "react-bootstrap";
import Photo from "../images/photo.png";
import './About.scss';

const About = () => {
    return (
        <div className="aboutContainer">
            <div className="photoContainer">
                <Image src={Photo} />
            </div>
            <div className="blurbContainer">
                <p>The past ten years, I have been working as a commercial real estate appraiser. Before that, I attended Vermont Law School where I studied environmental law and received a JD and Master of Environmental Law and Policy. My undergraduate education took place at the University of Georgia where I majored in English with a minor in History and a specialization in Medieval Studies. My strengths in all of these subjects are centered in skills surrounding reading, writing, editing, language, and research. 
                </p>
                <p>In 2022, I completed the Full Stack Coding Bootcamp at the Georgia Institute of Technology where I learned MERN stack development. While not applying directly, my previous experience demonstrates expertise at research, parsing dense documentation, and attention to detail - all beneficial skills for development.</p>
            </div>
        </div>
    );
};

export default About;