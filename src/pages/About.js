import React from "react";
import { Image } from "react-bootstrap";
import Photo from "../images/photo.png";
import anime from "animejs";
import TechCarousel from "../components/TechCarousel";
import './About.scss';


const About = () => {
    let element = document.getElementsByClassName("text-animation")[0];

    element.innerHTML = element.textContent.replace(/\S/g, '<span class="letter">$&</span>');

    let blurbAnime = {};
    blurbAnime.opacityIn = [0, 1];
    blurbAnime.scaleIn = [0.9, 1];
    blurbAnime.delay = 500;

    const animationRef = React.useRef(null);

    React.useEffect(() => {
        animationRef.current = anime.timeline({ loop: false })
            .add({
                targets: '.text-animation .letter',
                opacity: [0, 1],
                duration: 1000,
                easing: "easeOutExpo",
                delay: (elem, index) => index * 25
            })
    });

    return (
        <div >
            <div className="aboutContainer">
                <div className="photoContainer">
                    <Image src={Photo} alt='Jason Self Photo' />
                </div>

                <p className="text-animation">The past ten years, I have been working as a commercial real estate appraiser. Before that, I attended Vermont Law School where I studied environmental law and received a JD and Master of Environmental Law and Policy. My undergraduate education took place at the University of Georgia where I majored in English with a minor in History and a specialization in Medieval Studies. My strengths in all of these subjects are centered in skills surrounding reading, writing, editing, language, and research.</p>
                {/* <p className="text-animation">In 2022, I completed the Full Stack Coding Bootcamp at the Georgia Institute of Technology where I learned MERN stack development. While not applying directly, my previous experience demonstrates expertise at research, parsing dense documentation, and attention to detail - all beneficial skills for development.</p>
                <p className="text-animation">My current skills include, but are not limited to the MERN stack - MongoDB, Express, React, and NodeJS - as well as MySQL, HTML, and various CSS libraries.</p> */}

                <TechCarousel className='techCarousel' />
            </div>
        </div>
    );
};

export default About;