import React from "react"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import Image from "next/image"

function Navigation() {
  return (
    <div>
      <Navbar bg='light' expand='lg' className='navigation justify-content-end'>
        <Container>
          <Navbar.Brand href='/'>
            <Image
              src='/images/logo/logo-homewise.png'
              alt='Homewise'
              height={88.6}
              width={170}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav className='justify-content-end'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/about'>About</Nav.Link>
                <Nav.Link href='/services'>Services</Nav.Link>
                <NavDropdown title='Projects' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='/01-project-roofed-deck'>
                    RoofDeck
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/02-project-lakeside'>
                    Lakeside
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/03-project-onestep'>
                    One Step Deck
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/04-project-fencing'>
                    Fencing
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/05-project-houseaddition'>
                    House Addition
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/06-project-deckblend'>
                    Deck Blend
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/07-project-opendeck'>
                    Open Flat Deck
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
