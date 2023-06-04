import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };

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
            onClick={toggleOffCanvas}
          />
          <Navbar.Offcanvas
            className="bg-dark text-light"
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            show={show}
            onHide={toggleOffCanvas}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Explore
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <LinkContainer to="/">
                  <Nav.Link className="text-light" onClick={toggleOffCanvas}>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/aboutme">
                  <Nav.Link className="text-light" onClick={toggleOffCanvas}>About Me</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/portfolio">
                  <Nav.Link className="text-light" onClick={toggleOffCanvas}>Portfolio</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link className="text-light" onClick={toggleOffCanvas}>Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/resume">
                  <Nav.Link className="text-light" onClick={toggleOffCanvas}>Resume</Nav.Link>
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
