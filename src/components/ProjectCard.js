import React from "react";
import Card from 'react-bootstrap/Card';

const ProjectCard = (props) => {
  return (
    <Card>
      <div className='card-image-container'>
        <Card.Img variant="top" src={props.image} />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Link>{props.gitHub}</Card.Link>
        <Card.Link>{props.deployed}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;