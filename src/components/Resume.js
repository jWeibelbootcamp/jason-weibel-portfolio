import React from "react";
import ResumePDF from "../images/jasonResume.pdf";
import ResumeImage from "../images/resumeScreenshot.png";

const Resume = () => {
    return (
        <div>
            <h1>
                <a href={ResumePDF}download>
                    <img src={ResumeImage} alt="My Resume" width="80%" />
                </a>
            </h1>
        </div>
    );
};

export default Resume;