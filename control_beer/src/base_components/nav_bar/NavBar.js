import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { RemoveAllButton } from '../remove_all_button/RemoveAllButton.js';

export function NavBar(props) {

    let navigate = useNavigate();
    let location = useLocation();

    return <>
                <Navbar sticky="top" variant='dark' bg="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Beers App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link  onClick={() => navigate("/browse_beers")}>Browse Beers</Nav.Link>
                            <Nav.Link  onClick={() => navigate("/favorite")}>Favorite Beers</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                            {location.pathname === "/favorite" && <RemoveAllButton/>}
                    </Container>
                </Navbar>           
            </>
}