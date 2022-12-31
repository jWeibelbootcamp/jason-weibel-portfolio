import React from "react";
import Typewriter from 'typewriter-effect';
import './Typewriter.scss';

const TypewriterBlurb = () => {
    return (
        <div>
            <p className="blurb">
                <Typewriter
                    options={{
                        delay: 1,
                    }}
                    onInit={typewriter => {
                        typewriter
                            .typeString(
                                'The past ten years, I have been working as a commercial real estate appraiser. Before that, I attended Vermont Law School where I studied environmental law and received a JD and Master of Environmental Law and Policy. My undergraduate education took place at the University of Georgia where I majored in English with a minor in History and a specialization in Medieval Studies. My strengths in all of these subjects are centered in skills surrounding reading, writing, editing, language, and research. \n\n')
                            .typeString(
                                'In 2022, I completed the Full Stack Coding Bootcamp at the Georgia Institute of Technology where I learned MERN stack development. While not applying directly, my previous experience demonstrates expertise at research, parsing dense documentation, and attention to detail - all beneficial skills for development.\n\n')
                            .typeString(
                                'My current skills include, but are not limited to the MERN stack - MongoDB, Express, React, and NodeJS - as well as MySQL, HTML, and various CSS libraries.')
                            .callFunction(state => {
                                state.elements.cursor.setAttribute('hidden', 'hidden');
                                typewriter.stop();
                            })
                            .start();
                    }}
                />
            </p>
        </div>
    );
};

export default TypewriterBlurb;