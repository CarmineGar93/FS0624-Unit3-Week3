import {Container, Row, Col, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Favourites = () => {
    const fav = useSelector(store => {
        return store.companies.favourites
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <Container>
            <Row>
                <Col xs={10} className='mx-auto'>
                    <h1 className='display-1'>Favourite companies list</h1>
                </Col>
                <Col xs={10} className='mx-auto my-4'>
                <ListGroup>
                    {
                        fav.sort().map((comp, i) => {
                            return (
                                <ListGroupItem key={i} className='d-flex justify-content-between'>
                                    <Link to={`/${comp}`}>{comp}</Link>
                                    <Button variant='danger' onClick={() => dispatch({
                                        type: 'REMOVE_FROM_FAVOURITES',
                                        payload: comp
                                    })}>Remove fav</Button>
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