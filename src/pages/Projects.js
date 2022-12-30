import React from 'react';
import ProjectArray from '../components/ProjectArray';
import ProjectCard from '../components/ProjectCard';
import './Projects.scss';

const Projects = () => {
    return (
        <div className='project-list'>
            <div className='row'>
                {ProjectArray.map(project => {
                    <ProjectCard image={project.image} title={project.title} description={project.description} gitHub={project.gitHub} deployed={project.deployed}/>
                })}
            </div>
        </div>
    );
};

export default Projects;