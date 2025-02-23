// src/components/Navbar.js

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const CustomNavbar = () => {
  const location = useLocation();
  const boxList = useSelector((state) => state.boxes);
  const [isBoxListEnabled, setIsBoxListEnabled] = useState(false);

  useEffect(() => {
   
    setIsBoxListEnabled(boxList.length > 0);
  }, [boxList]);

  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">Box Shipment App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* Add Box is always enabled */}
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === "/" ? "active text-white" : "text-white"}
            >
              Add Box
            </Nav.Link>

            {/* Box List is disabled initially, enabled when data is added */}
            <Nav.Link 
              as={Link} 
              to="/list" 
              className={location.pathname === "/list" ? "active text-white" : "text-white"}
              disabled={!isBoxListEnabled} // Disable when no data
              style={{ pointerEvents: isBoxListEnabled ? "auto" : "none", opacity: isBoxListEnabled ? 1 : 0.5 }}
            >
              Box List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
