import React from "react";
import Card from 'react-bootstrap/Card';

const ProjectCard = (props) => {
    console.log(props);
    return (
      <Card style={{ width: '25rem'}}>
        <Card.Img variant="top" src={ props.image } />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
  
  export default ProjectCard;