import React from "react"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import Image from "next/image"

function Navigation() {
  return (
    <div className='navigation-main'>
      <Navbar bg='light' expand='lg' className='navigation justify-content-end'>
        <Container>
          <Navbar.Brand href='/'>
            <Image
              src='/images/logo/logo-homewise.png'
              alt='Homewise'
              height={65}
              width={124}
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className='justify-content-end'
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='justify-content-end'>
              <Nav className='justify-content-end'>
                <Nav.Link className='navlinks' href='/'>
                  Home
                </Nav.Link>
                <Nav.Link className='navlinks' href='/about'>
                  About
                </Nav.Link>
                <Nav.Link className='navlinks' href='/services'>
                  Services
                </Nav.Link>
                <NavDropdown
                  className='navlinks'
                  title='Projects'
                  id='basic-nav-dropdown'>
                  <NavDropdown.Item href='/projects'>
                    - All Projects -
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/01-project-roofed-deck'>
                    Roofed Deck
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/02-project-lakeside'>
                    Lakeside Deck
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/03-project-side-deck-and-entrances'>
                    Side Deck and Entrances
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/04-project-kitchen-remodel'>
                    Kitchen Remodel
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/05-project-houseaddition'>
                    House Addition
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/06-project-bathroom-remodel'>
                    Bathroom Remodel
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/07-project-opendeck'>
                    Open Flat Deck
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/08-project-room-remodel'>
                    Room Remodal
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
