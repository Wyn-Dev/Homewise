import React from "react"
import Header from "./Header"
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"
import Link from "next/link"
function Navigation() {
  return (
    <div>
      <Header />

      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>Homewise</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/services'>Services</Nav.Link>
              <NavDropdown title='Projects' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/o-1roofdeck'>
                  RoofDeck
                </NavDropdown.Item>
                <NavDropdown.Item href='/o-2lakeside'>
                  Lakeside
                </NavDropdown.Item>
                <NavDropdown.Item href='/o-3onestep'>
                  One Step Deck
                </NavDropdown.Item>
                <NavDropdown.Item href='/o-4fencing'>Fencing</NavDropdown.Item>
                <NavDropdown.Item href='/o-5houseaddition'>
                  House Addition
                </NavDropdown.Item>
                <NavDropdown.Item href='/o-6deckblend'>
                  Deck Blend
                </NavDropdown.Item>
                <NavDropdown.Item href='/o-7opendeck'>
                  Open Flat Deck
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
