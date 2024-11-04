import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AlbumGrid.css';

const albums = [
  { title: "Album 1", description: "Description 1", imageUrl: "https://via.placeholder.com/150" },
  { title: "Album 2", description: "Description 2", imageUrl: "https://via.placeholder.com/150" },
  { title: "Album 3", description: "Description 3", imageUrl: "https://via.placeholder.com/150" },
  { title: "Album 4", description: "Description 4", imageUrl: "https://via.placeholder.com/150" },
//   { title: "Album 5", description: "Description 5", imageUrl: "https://via.placeholder.com/150" },
//   { title: "Album 6", description: "Description 6", imageUrl: "https://via.placeholder.com/150" },
  // Add more albums as needed
];

const AlbumGrid = () => {
  return (
    <Container className="my-5">
      <Row>
        {albums.map((album, index) => (
          <Col key={index} md={4} lg={3} className="mb-4">
            <Card className="text-center">
              <div className="circle-img-wrapper">
                <Card.Img variant="top" src={album.imageUrl} className="album-img" />
              </div>
              <Card.Body>
                <Card.Title>{album.title}</Card.Title>
                <Card.Text>{album.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        {albums.length > 4 && (
          <Col className="d-flex justify-content-center my-4">
            <Button variant="outline-dark">Show More</Button>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default AlbumGrid;
