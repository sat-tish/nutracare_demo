import React from 'react'
import './Navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-navy">
    <Container>
      <Navbar.Brand href="#home">Nutracare 360</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto gap-4">
          <Nav.Link as={NavLink} to='/' >Home</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to='/search-selection'>Professionals</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to='/selection-all-centers'>
              All Centers
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to='/search-selection'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to='/search-selection'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to='/blogs' >Blogs</Nav.Link>
          <Nav.Link as={NavLink} to='/contact' >Contact Us</Nav.Link>
         </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation
