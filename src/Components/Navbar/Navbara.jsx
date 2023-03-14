import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';
import "./navbar.css";
import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'


const NavBarExamples = () => {

    const { cart, getTotal, getTotalQuantity, clearCart } = useContext(CartContext)

    const [isOpen, setIsOpen] = useState(false)
  
    const handleMouseEnter = () => {
      setIsOpen(true)
    }
  
    const handleMouseLeave = () => {
      setIsOpen(false)
    }
  
    return (

        
        <>
            <Navbar className="navBar barra" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to= "/" >BOCA Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to= "/" >Inicio</Nav.Link>
                            <Nav.Link as={Link} to= "/camisetas" >Camisetas</Nav.Link>
                            <Nav.Link as={Link} to= "/camisetasretro" >Camisetas Retro</Nav.Link>
                        </Nav>
                        
                        <li class='nav-item lista'>
                            <div
                                className="cart-dropdown-wrapper"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>

                                <i class="bi bi-bag carrito"></i>

                                {cart.length > 0 && (
                                    <span className="badge badge-pill badge-danger ml-1 total">
                                    {getTotalQuantity()}
                                    </span>
                                )}
                                {isOpen && (
                                    <div className="cart-dropdown">
                                    <ul>
                                        {cart.map((camisetas) => (
                                        <li key={camisetas.id}>
                                            <span>{camisetas.name} | <span style={{color: 'green'}}>x{camisetas.quantity}</span> <b>${camisetas.price*camisetas.quantity}</b></span>
                                        </li>
                                        ))}
                                    </ul>
                                    { 
                                    cart.length > 0 &&
                                    <div style={{marginTop: '20px'}}>
                                        <ul>
                                        <span><u>Productos totales:</u> {getTotalQuantity()} </span>
                                        </ul>
                                        <ul>
                                        <span><u>Total a pagar:</u> ${getTotal()} </span>
                                        <button type="button" class="btn btn-dark btn-sm" onClick={() => clearCart()}>Vaciar</button>
                                    </ul>

                                    </div>
                                    }
                                    </div>
                                )}
                            </div>
                        </li>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarExamples;