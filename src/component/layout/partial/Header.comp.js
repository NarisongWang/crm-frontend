import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../../assets/img/logo.png'

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg='info' variant='dark' expand='md'>
        <Navbar.Brand className='ms-4'>
            <img src={logo} width='80px' alt='logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav' className='me-3'>
            <Nav className='ms-auto'>
                <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                <Nav.Link href='/tickets'>Tickets</Nav.Link>
                <Nav.Link href='/logout'>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
