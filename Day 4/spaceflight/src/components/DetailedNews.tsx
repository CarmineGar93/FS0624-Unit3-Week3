import { Container, Row, Col, Spinner } from "react-bootstrap"
import SingleNews from "./SingleNews"
import { useParams } from "react-router-dom"
import { Welcome } from "../interfaces/interface"
import { useState, useEffect } from "react"
import { useAppDispatch } from "../hooks"

function DetailedNews() {
    const [news, setNews] = useState<Welcome | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useAppDispatch()
    const params = useParams().newsId
    const fetchNews = async () => {
        try {
            const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/' + params)
            if (response.ok) {
                const data = await response.json()
                setNews(data)
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
        dispatch({
            type: 'ADD_ID',
            payload: params
        })
        setIsLoading(true)
        fetchNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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