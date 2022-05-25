import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../media/logo.png'
import '../styles/Header.scss'

const Header = () => {
  return (
    <div>
      <Nav  activeKey="/home" className='nav'>
        <Nav.Item>
          <div className='img'>
            <a href='/'><img src={logo}/></a>
          </div>
        </Nav.Item>

        <div className="items">
          <Nav.Item>
            <Nav.Link href="/" className='text'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" href='/reservation' className='text'>Reservations</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-1" href='/fleet' className='text'>Fleet</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-2" href='/about' className='text'>About Us</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-3" href='/contact' className='text'>Contact Us</Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </div>
  )
}

export default Header