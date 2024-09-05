import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Welcome } from '../interfaces/interface'
import SingleNews from "./SingleNews"




const MyNews = () => {
    const [news, setNews] = useState<Welcome[]>([])
    const fetchNews = async () => {
        try {
            const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles')
            if (response.ok) {
                const data = await response.json()
                setNews(data.results)
            } else {
                throw new Error('errore')
            }

        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        fetchNews()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Container className="my-5">
            <Row className=" justify-content-center gy-3">

                {
                    news.map(n => {
                        return (
                            <Col xs={12} key={n.id}>
                                <SingleNews single={n}/>
                            </Col>
                        )
                    })
                }

            </Row>
        </Container>
    )
}

export default MyNews