import {Container, Row, Col, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Favourites = () => {
    const fav = useSelector(store => {
        return store.companies.favourites
    })
    const navigate = useNavigate()
    return (
        <Container>
            <Row>
                <Col xs={10} className='mx-auto'>
                    <h1 className='display-1'>Favourite companies list</h1>
                </Col>
                <Col xs={10} className='mx-auto my-4'>
                <ListGroup>
                    {
                        fav.map((comp) => {
                            return (
                                <ListGroupItem>
                                    <Link to={`/${comp}`}>{comp}</Link>
                                </ListGroupItem>
                            )
                        })
                    }
                </ListGroup>
                </Col>
                <Col xs={10} className='mx-auto'>
                   <Button variant='danger' onClick={()=>{
                    navigate('/')
                   }}>Homepage</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Favourites