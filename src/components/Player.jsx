import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => (
  <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src={imageUrl} alt={`${name} Image`} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        Team: {team} <br />
        Nationality: {nationality} <br />
        Jersey Number: {jerseyNumber} <br />
        Age: {age} <br/>
        <Button variant="primary">Pick</Button>
      </Card.Text>
    </Card.Body>
  </Card>
);

// Define default props
Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://example.com/default.jpg",
};

export default Player;
