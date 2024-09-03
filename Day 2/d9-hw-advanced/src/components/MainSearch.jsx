import { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { beginLoadingAction, removeAdAction, retrieveAdsAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const jobs = useSelector(store => store.ads.ads)
  const isLoading = useSelector(store => store.loaders.isLoading)
  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    dispatch(beginLoadingAction())
    e.preventDefault();
    dispatch(retrieveAdsAction(query))
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        {
          isLoading ? (
            <Col xs={10} className="text-center mx-auto">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            </Col>
          ) : (
            <Col xs={10} className="mx-auto mb-5">
              {jobs.map(jobData => (
                <Job key={jobData._id} data={jobData} />
              ))}
            </Col>
          )
        }
        <Col xs={10} className="mx-auto">
          <Button variant='danger' onClick={() => {
            dispatch(removeAdAction())
            navigate('/favourites')
          }}>Go to your favourites</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
