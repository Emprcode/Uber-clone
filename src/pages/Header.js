import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


export const Header = () => {
  return (

    <>
    {/* <Navbar expand="md" className="bg-dark ">
      < Container>
        <Navbar.Brand href="#" className="text-light">
          <h3 className="mx-3">Uber</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
           
            <Nav.Link className="text-light fw-bold" href="#action1">
              Company
            </Nav.Link>
            <Nav.Link  className="text-light fw-bold" href="#action1">
              Safety
            </Nav.Link>
            <Nav.Link  className="text-light fw-bold" href="#action2">
              Help
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar> */}


    <Navbar bg="dark" expand="md">
      <Container className=''>
        <Navbar.Brand href="#home" className="text-light" >
        <h3 className="mx-3">Uber</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold gap-3">
            <Nav.Link className="text-light" href="#company">Company</Nav.Link>
            <Nav.Link className="text-light" href="#safety"> Safety</Nav.Link>
            <Nav.Link className="text-light" href="#help">  Help</Nav.Link>
        
          </Nav>
          <Nav className="ms-auto text-light fw-bold gap-3">
            <Nav.Link className="text-light" href="#products">Products</Nav.Link>
            <Nav.Link className="text-light" href="#en"><i className="fa-solid fa-globe"></i> EN</Nav.Link>
            <Nav.Link className="text-light" href="#login">   Log in</Nav.Link>
         <div variant='none' href="#sign-up" className='button fw-bold'> Sign up</div>
         {/* <div
     
     className='button mt-5'>DEMO DRIVE</div>
     </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};
