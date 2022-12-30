import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectArray from '../components/ProjectArray';
import ProjectCard from '../components/ProjectCard';
import './Projects.scss';

const Projects = () => {
    return (
        <Container fluid>
            <Row>
                {ProjectArray.map(project => {
                    return (
                        <Col>
                            <ProjectCard image={project.image} title={project.title} description={project.description} gitHub={project.gitHub} deployed={project.deployed} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
};

export default Projects;