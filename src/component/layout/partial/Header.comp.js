import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

export const Header = () => {
  const naviagate = useNavigate();

  const logMeOut = () =>{
    naviagate("/");
  }
  return (
    <Navbar collapseOnSelect bg='info' variant='dark' expand='md'>
        <Navbar.Brand className='ms-4'>
            <img src={logo} width='80px' alt='logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav' className='me-3'>
            <Nav className='ms-auto'>
              <LinkContainer to='/dashboard'>
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/tickets'>
                <Nav.Link>Tickets</Nav.Link>
              </LinkContainer>
              <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
