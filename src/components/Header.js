import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="mb-3 sticky-top" >
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand className="text-light">
              Jerry Beau Baggett
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle
            className="bg-secondary"
            aria-controls={`offcanvasNavbar-expand-lg`}
          />
          <Navbar.Offcanvas
            className="bg-dark text-light"
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Explore
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <LinkContainer to="/">
                  <Nav.Link className="text-light">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/aboutme">
                  <Nav.Link className="text-light">About Me</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/portfolio">
                  <Nav.Link className="text-light">Portfolio</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link className="text-light">Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/resume">
                  <Nav.Link className="text-light">Resume</Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
