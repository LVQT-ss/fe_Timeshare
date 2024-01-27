import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../styles/App.css";
import LoginModal from './LoginModal'; // Import the LoginModal

const NavigationBar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src="/assets/img/logo.png" alt="Logo" />
        </Navbar.Brand>
        <Form inline className="mx-auto navbar-search-form">
          <FormControl
            type="text"
            placeholder="Search Timeshare"
            className="mr-sm-2 square rounded-pill"
            style={{ width: "250px" }}
          />
          <Button variant="outline-info" className='square rounded-circle' style={{ width: "39px" }}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Form>
        <Nav>
          <Nav.Link onClick={handleShowLogin}>Login/Register</Nav.Link>
        </Nav>
      </Navbar>
      <LoginModal show={showLogin} handleClose={handleCloseLogin} />
    </>
  );
};

export default NavigationBar;
