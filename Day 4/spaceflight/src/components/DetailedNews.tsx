import { Container, Row, Col } from "react-bootstrap"
import SingleNews from "./SingleNews"
import { useParams } from "react-router-dom"
import { Welcome } from "../interfaces/interface"
import { useState, useEffect } from "react"

function DetailedNews() {
    const [news, setNews] = useState<Welcome | null>(null)
    const params = useParams().newsId
    const fetchNews = async () => {
        try {
            const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/' + params)
            if (response.ok) {
                const data = await response.json()
                setNews(data)
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
                    news && (
                        <Col xs={12}>
                            <SingleNews single={news} />
                        </Col>
                    )
                }

            </Row>
        </Container>
    )
}

export default DetailedNews