
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

function MyNavbar() {
    const location = useLocation()
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#home">Spaceflight News</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/details' className='nav-link'>Details</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search flight"
                            className="me-2"
                            aria-label="Search"
                            required
                        />
                        <Button type='submit' variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar