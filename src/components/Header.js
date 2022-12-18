import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <Navbar expand='lg'>
            <Container>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Link to='/jason-weibel-portfolio'>Home</Link>
                    <Link to='jason-weibel-portfolio/about'>About</Link>
                    <Link to='jason-weibel-portfolio/projects'>Projects</Link>
                    <Link to='jason-weibel-portfolio/resume'>Resume</Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;