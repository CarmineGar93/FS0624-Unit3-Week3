import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { retrieveAdsAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const jobs = useSelector(store=>store.ads.ads)
  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
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
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
        <Col xs={10} className="mx-auto">
          <Button variant='danger' onClick={()=>navigate('/favourites')}>Go to your favourites</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
