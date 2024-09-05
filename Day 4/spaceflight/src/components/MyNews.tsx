import { useEffect, useState } from "react"
import { Container, Row, Col, Spinner } from "react-bootstrap"
import { Welcome } from '../interfaces/interface'
import SingleNews from "./SingleNews"
interface MyNewsProps {
    searched: string
}




const MyNews = ({ searched }: MyNewsProps) => {
    const [news, setNews] = useState<Welcome[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchNews = async () => {
        const Url = 'https://api.spaceflightnewsapi.net/v4/articles'
        try {
            const response = await fetch(searched ? `${Url}/?search=${searched}` : Url)
            if (response.ok) {
                const data = await response.json()
                setNews(data.results)
                setTimeout(()=>{
                    setIsLoading(false)
                }, 1000)
            } else {
                throw new Error('errore')
            }

        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        setIsLoading(true)
        fetchNews()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searched])
    return (
        <Container className="my-5">
            <Row className=" justify-content-center gy-3">
                {isLoading ? (
                    <Col>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>
                ) :
                    news.map(n => {
                        return (
                            <Col xs={12} key={n.id}>
                                <SingleNews single={n} />
                            </Col>
                        )
                    })
                }

            </Row>
        </Container>
    )
}

export default MyNews