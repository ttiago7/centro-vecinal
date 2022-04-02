import logo from "../../assets/images/bandera.png";
import "./Publicnavbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import bontoncito from './buttontheme'

function NavbarComponent2() {
  return (
    <div className="Navbar">
      {/* <Navbar bg="dark" variant="dark" fixed="buttom" expand="sm">
        <Navbar.Brand>
          <img src={logo} alt="Logo" width="40px" height="40px" />
          Logo
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#createPost">Crear post</Nav.Link>
            <Nav.Link href="#neighborhoodCenter">Mi centro vecinal</Nav.Link>
            <Nav.Link href="#viewProfile">Ver perfil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">This is a content.</div> */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="margin-logo">
          <img src={logo} alt="Logo" width="40px" height="50px" />
          <Navbar.Brand href="#home">Centro Vecinal</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Inicio</Nav.Link>
              <Nav.Link href="#GetAll">Todos los Centros Vecinales</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="My Account" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>

                {/* <NavDropdown.Item href="#action/3.3">Set Theme</NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">LogOut</NavDropdown.Item>
              </NavDropdown>
              {bontoncito()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent2;
