import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>
          Vivir Fitness
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/category/indumentaria" as={NavLink}>
            Indumentaria
          </Nav.Link>
          <Nav.Link to="/category/calzado" as={NavLink}>
            Calzado
          </Nav.Link>
          <Nav.Link to="/category/accesorios" as={NavLink}>
            Accesorios
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
