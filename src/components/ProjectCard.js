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
        <div className="card-link-container">
          <Card.Link href='{props.gitHub}'>GitHub Repo</Card.Link>
          <text className="link-separator">|</text>
          <Card.Link href='{props.deployed}'>Deployed App</Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;