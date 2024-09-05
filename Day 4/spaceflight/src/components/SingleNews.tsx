import { Card, Button } from "react-bootstrap"
import { Welcome } from "../interfaces/interface"
import { useLocation, useNavigate } from "react-router-dom"
interface SingleNewsProps {
    single: Welcome
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dicember']

function SingleNews({single}: SingleNewsProps) {
    const navigate = useNavigate()
    const location = useLocation()
    const date = new Date(single.published_at)
    return (
        <Card className="text-center">
            {
                location.pathname === `/details/${single.id}` && (
                    <>
                        <Card.Header>{single.news_site}</Card.Header>
                        <Card.Img variant="top" src={single.image_url}/>
                    </>
                )
            }
            
            <Card.Body>
                <Card.Title><a href={single.url} title="a">{single.title}</a></Card.Title>
                {
                    location.pathname !== `/details/${single.id}` ? (
                        single.summary.length > 90 ? (
                            <Card.Text>{single.summary.slice(0, single.summary.indexOf(' ', 90))}<span className="fw-bold"> [...See more]</span>                   
                            </Card.Text>
                        ) : (
                            <Card.Text>{single.summary}                   
                            </Card.Text>
                        )
                        
                    ) : (
                        <Card.Text>{single.summary}</Card.Text>
                    )
                }
                {
                    location.pathname !== `/details/${single.id}` && <Button variant="primary" onClick={()=>navigate(`/details/${single.id}`)}>Check the news</Button>
                }              
            </Card.Body>
            <Card.Footer className="text-muted">{`${days[date.getDay()]}  ${date.getDate()} ${months[date.getMonth()]} - ${date.getHours()}:${date.getMinutes() === 0 ? '00': date.getMinutes()}`}</Card.Footer>
        </Card>
    )
}

export default SingleNews