import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <Navbar expand='lg'>
            <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/resume'>Resume</Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;