import React from "react";
import ResumePDF from "../images/jasonResume.pdf";
import ResumeImage from "../images/resumeScreenshot.png";
import "./Resume.scss";

const Resume = () => {
    return (
        <div className="resumeBox">
            <a className='resumeLink' href={ResumePDF} download>
                <img className='resume' src={ResumeImage} alt="My Resume" />
            </a>
        </div>
    );
};

export default Resume;