import React from 'react';
import ProjectData from '../components/ProjectData';
import './Projects.scss';

const Projects = () => {
    return (
        <div className='project-list'>
            <div className='row'>
                {ProjectData.map(Projects => {
                    return (
                        <div className='col-md-4'>
                            <div className='project position-relative '>
                                <img className="project-image " src={Projects.image} style={{ background: "cover" }} />
                                <div className='project-content'>
                                    <h5>{Projects.title}</h5>
                                    <p>{Projects.description}</p>
                                    <button className='primary-button'><a href={Projects.code}>Code</a></button>
                                    <button className='primary-button'><a href={Projects.demo}>Demo</a></button>
                                </div>
                            </div>
                        </div>
                    );
                })};
            </div>
        </div>
    );
};

export default Projects;