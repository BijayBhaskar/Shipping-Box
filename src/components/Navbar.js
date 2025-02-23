// src/components/Navbar.js

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux"; // Import Redux to check data

const CustomNavbar = () => {
  const location = useLocation();
  const boxList = useSelector((state) => state.boxes); // Fetch boxes from Redux
  const [isBoxListEnabled, setIsBoxListEnabled] = useState(false);

  useEffect(() => {
    // Enable "Box List" tab if data exists
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



// import { Link } from 'react-router-dom';

// const Navbar = () => (
//   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//     <div className="container">
//       <Link className="navbar-brand" to="/">Box App</Link>
//       <div className="navbar-nav">
//         <Link className="nav-link" to="/">Add Box</Link>
//         <Link className="nav-link" to="/list">Box List</Link>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;

