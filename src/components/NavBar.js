import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import logo from "../images/logo.png";
import { MovieContext } from "../store/MovieContext";

const NavBar = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="text-danger">
          <span>
            <img src={logo} alt="" style={{ width: "45px" }} />
          </span>
          <strong>Movies App </strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link to="/" className="text-secondary text-decoration-none">
                Home
              </Link>
            </Nav.Link>

            <Nav.Link href="#action1">
              <Link
                to="/addmovie"
                className="text-secondary text-decoration-none"
              >
                Add Movies
              </Link>
            </Nav.Link>
            <Nav.Link href="#action2">Categories</Nav.Link>
            <Nav.Link href="#action2">Recently Added</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="warning" className="m-1">
              <Link
                to="/addmovie"
                className="text-dark fw-bold text-decoration-none"
              >
                Add Movies +
              </Link>
            </Button>
            <Button variant="warning">
              <strong>Movies List</strong>{" "}
              <Badge bg="danger">{movies.length}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
