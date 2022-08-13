import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const Movie = ({ movie }) => {
  return (
    <div>
      <ListGroup as="ol">
        <ListGroup.Item
          variant="warning"
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <span>{movie.id}.</span> Movie Title: {movie.title}
            </div>
            <strong>Price:</strong> $ {movie.price}
          </div>
          <Badge bg="danger" pill>
            top rated
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Movie;
