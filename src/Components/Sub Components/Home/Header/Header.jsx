import {Container,Nav,Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const Header=()=>{
    return(
     <Container>
         <Navbar bg="dark" data-bs-theme="dark" expand='md' fixed='top'>
            <Container>
              <Navbar.Brand as={Link} to='/'>Navbar</Navbar.Brand>
              <Navbar.Toggle aria-controls="my_nav"/>
              <Navbar.Collapse id='my_nav'>
                <Nav className="me-auto">
                    {/* <Nav.Link as={Link} to='/'>Home</Nav.Link> */}
                    {/* <Nav.Link as={Link} to='/about_as'>About As</Nav.Link>
                    <Nav.Link as={Link} to='contact_developer'>Contact Developer</Nav.Link>
                    <Nav.Link as={Link} to='help'>Help</Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
      </Navbar>
    </Container>)
}