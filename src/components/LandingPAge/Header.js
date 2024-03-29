import React, {useState , useEffect} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useLocation } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import {Link} from "react-router-dom";
import './offer.css';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand="sm"
        className={`py-3 ${isScrolled ? 'sticky-header' : ''}`}
        style={isScrolled ? { backgroundColor: '#222' } : null} >
          
          <Container fluid>
            <Navbar.Brand href="#">
              {" "}
              <b>ATRASKI | Hotels</b>{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ATRASKI | HOTELS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link
                    
                    style={{ fontSize: "15px" }}
                    className="headlink"
                  >
                    <Link to="/" style={{textDecoration:'none' , color:'teal' , fontWeight:'700' }} className="head">
                    Home
                    </Link>
                  </Nav.Link>

                  <Nav.Link className="headlink">
                    <Link to="/OurRoom" style={{textDecoration:'none' , color:'teal' , fontWeight:'700' }} className="head">
                    Our Hotel
                    </Link>
                  </Nav.Link>

                  <Nav.Link className="headlink">
                    <Link to="/about" style={{textDecoration:'none' , color:'teal' , fontWeight:'700' }} className="head">
                    About
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="headlink">
                    <Link to="/reservation" style={{textDecoration:'none' , color:'teal' , fontWeight:'700' }} className="head">
                    Reservation{" "}
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#action2" className="headlink">
                    <Link to="/blogs" style={{textDecoration:'none' , color:'teal' , fontWeight:'700' }} className="head">
                    Blogs
                    </Link>
                  </Nav.Link>
                                  </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{ backgroundColor: "" }}
                  />
                  <NavDropdown.Item
                    
                    className="navBtn"
                    style={{
                      width: "10rem",
                      borderRadius: "50px",
                      backgroundColor: "teal",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    <Link to="/contactus" style={{textDecoration:'none' , color:'#fff' }}>
                    Contact Us
                    </Link>
                  </NavDropdown.Item>

                  {/* <Button
                    className="navBtn"
                    style={{
                      width: "10rem",
                      borderRadius: "50px",
                      backgroundColor: "teal",
                      color: "white",
                    }}
                  >
                    Contact Us
                  </Button> */}
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
