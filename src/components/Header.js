import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import Logo from '../media/logo.png';

const Header = () => {
  return (
    <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src={Logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"> About Us</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Self-Drive</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Airport Shuttle Service</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Driving School</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">With Driver</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Reservation</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contact Us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header