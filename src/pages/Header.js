import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Header = () => {
  return (
    <Navbar expand="md" className="bg-dark header ">
      <Container fluid>
        <Navbar.Brand href="#" className="text-light">
          <h3 className="mx-3">Uber</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            {/* <NavDropdown
              className="text-light"
              title="Link"
              id="navbarScrollingDropdown">
              <NavDropdown.Item className="text-light" href="#action3">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link className="text-light" href="#" disabled>
              Link
            </Nav.Link> */}
            <Nav.Link className="text-light fw-bold" href="#action1">
              Company
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#action1">
              Safety
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#action2">
              Help
            </Nav.Link>
          </Nav>
          <Nav className="">
            <Nav.Link className="text-light fw-bold" href="#action1">
              <i class="fa-thin fa-grid"></i> Products
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#action1">
              <i className="fa-solid fa-globe"></i> EN
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#action2">
              Log in
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#action2">
              <div className="button-div">
                <div className="button text-light">Sign up</div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
