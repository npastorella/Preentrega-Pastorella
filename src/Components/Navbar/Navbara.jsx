import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';



const NavBarExamples = () => {
    return (
        <>
            <Navbar className="navBar barra" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to= "/" >BOCA Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to= "/" >Home</Nav.Link>
                            <Nav.Link as={Link} to= "/camisetas" >Camisetas</Nav.Link>
                            <Nav.Link as={Link} to= "/camisetasretro" >Camisetas Retro</Nav.Link>
                        </Nav>
                        <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

<section>
   
</section>

        </>
    )
}

export default NavBarExamples;