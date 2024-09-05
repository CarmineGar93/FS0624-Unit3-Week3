import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Welcome } from '../interfaces/interface'
import SingleNews from "./SingleNews"
interface MyNewsProps {
    searched: string
}




const MyNews = ({searched}: MyNewsProps) => {
    const [news, setNews] = useState<Welcome[]>([])
    const fetchNews = async () => {
        const Url = 'https://api.spaceflightnewsapi.net/v4/articles'
        try {
            const response = await fetch(searched ? `${Url}/?search=${searched}` : Url)
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
    }, [searched])
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