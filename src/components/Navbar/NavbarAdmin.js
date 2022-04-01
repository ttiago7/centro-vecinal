import logo from "../../logo.svg";
import "./NavbarAdmin.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

function NavbarAdmin() {
  return (
    <div className="Navbar">
      <Navbar bg="dark" variant="dark" fixed="buttom" expand="sm">
        <Navbar.Brand className='mx-3'>
          <img src={logo} alt="Logo" width="40px" height="40px" />
          Logo
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#createPost">Crear post</Nav.Link>
            <Nav.Link href="#neighborhoodCenter">Mi centro vecinal</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end mx-3" >
            <Nav>
              <Nav.Link href="#viewProfile">Ver perfil</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">This is a content.</div>
    </div>
  );
}

export default NavbarAdmin;