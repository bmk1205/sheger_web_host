import {Nav,Navbar,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export const Footer=()=>{
 return(
    <Container>
        <Navbar bg="dark" data-bs-theme="dark" className='mt-3'>
            <Nav className="me-auto text-center">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                {/* <Nav.Link as={Link} to='/about_as'>About As</Nav.Link>
                <Nav.Link as={Link} to='contact_developer'>Contact Developer</Nav.Link>
                <Nav.Link as={Link} to='help'>Help</Nav.Link> */}
             </Nav>
        </Navbar>
    </Container>
 )
}