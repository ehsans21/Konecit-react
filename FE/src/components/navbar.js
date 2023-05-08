import {Container, Nav, Navbar, Form, Button} from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";


export default function RespoNav() {
  return (
    <Navbar collapseOnSelect expand="xl" bg="white" variant="white">
      <Container>
        <Navbar.Brand href="/">KonecIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto my-2 my-lg-0">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="wiki">Wiki</NavLink>
                    <NavLink to="inventory">Inventory</NavLink>
                    <NavLink to="infrastructure">Infrastructure</NavLink>
                    <NavLink to="todo">ToDo List</NavLink>
                    <NavLink to="checklist">Checklist</NavLink>
                    <NavLink to="technician">Technician</NavLink>
                    <NavLink to="timesheet">Time Sheet</NavLink>
                    <NavLink to="careers">Careers</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-auto"
              aria-label="Search"
            />
            <Button variant="outline-success" >Search</Button>
          </Form>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
