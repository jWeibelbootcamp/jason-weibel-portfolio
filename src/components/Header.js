import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Link to='/jason-weibel-portfolio'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/resume'>Resume</Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;