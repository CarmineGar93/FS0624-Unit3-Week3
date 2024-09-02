import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch()
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
  const navigate = useNavigate()

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-3" xs={12}>
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <Button variant="danger" onClick={() => {
            dispatch({
              type: 'ADD_TO_FAVOURITES',
              payload: params.company
            })
          }}>Add to favourties</Button>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
        <Col>
          <Button variant='danger' onClick={() => {
            navigate('/')
          }}>Homepage</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
