import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="light" >
    <Navbar.Brand href="#home">
      <Link to="/">
      CryptoCurrency Tracker
      </Link>
    </Navbar.Brand>
    <Nav.Link> <Link to="/">Home</Link></Nav.Link>
  </Navbar>
  );
};

export default Header;
