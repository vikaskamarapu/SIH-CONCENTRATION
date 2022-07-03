import React from 'react'
import {Navbar,Container,Button,NavDropdown,Nav,Form,FormControl }from 'react-bootstrap'
import {Link} from 'react-router-dom'
import target from '../gifs/target.gif'; 
function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/"><img src={target} alt="" width="70px" height="70px" />CONCENTRIA </Navbar.Brand>
   
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link className='nav-link active' to="/">HOME</Link>
        <Link className='nav-link active' to="analysis">ANALYSIS</Link>
        <Link className='nav-link active' to="enhancement">ENHANCEMENT</Link>
        <NavDropdown title="JOIN US" id="navbarScrollingDropdown">
          <NavDropdown.Item href="register">REGISTER</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="login">LOGIN</NavDropdown.Item>
        </NavDropdown>
        <Link className='nav-link active' to="contactus" >
          CONTACT US
        </Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header