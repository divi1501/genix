import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <Navbar className='navbar' variant="dark">
            <Container>
              <Navbar.Brand className='learningGennix'><Link style={{color:"white"}} to='/'><span style={{ color: "#0085FF" }} >//</span>Learning Genix</Link></Navbar.Brand>
              <div>
                <Nav className="me-auto">
                <Nav.Link><Link style={{color:"white"}} to='/projects'>Project</Link></Nav.Link>
                <Nav.Link><Link style={{color:"white"}} to='/indivproject'>IndivProject</Link></Nav.Link>
                <Nav.Link><Link style={{color:"white"}} to='/adminproject'>Admin</Link></Nav.Link>
                <Nav.Link><Link style={{color:"white"}} to='/about'>AboutUs</Link></Nav.Link>
                  <Button variant="outline-secondary" style={{color:"white"}} className='bt1'>Secondary</Button>{' '}
                </Nav>
              </div>

            </Container>
          </Navbar>
    </div>
  )
}
