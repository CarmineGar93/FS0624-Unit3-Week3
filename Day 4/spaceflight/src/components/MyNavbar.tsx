
import { useState, FormEvent } from 'react'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
interface MyNavbarProps {
    handle: Function
}

function MyNavbar({handle}: MyNavbarProps) {
    const[search, setSearch] = useState('')
    const location = useLocation()
    const isActive = (path: string) =>{
        return location.pathname === path ? 'nav-link active' : 'nav-link'
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        handle(search)
        setSearch('')
    }
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#home">Spaceflight News</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className={isActive('/')} onClick={() => {
                            handle('')
                        }}>Home</Link>
                        <Link to='/details' className='nav-link'>Details</Link>
                    </Nav>
                    <Form onSubmit={e=>handleSubmit(e)} className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search flight"
                            className="me-2"
                            value={search}
                            aria-label="Search"
                            required
                            onChange={(e)=>setSearch(e.target.value)}
                        />
                        <Button type='submit' variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar