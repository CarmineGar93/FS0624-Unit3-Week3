import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { AddToFavouritesAction, removeFromFavouritesAction } from "../redux/actions";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch()
  const fav = useSelector(state => state.companies.favourites)
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
          <h1 className="display-4">Job posting for: {params.company} <button className="p-0 border-0 bg-transparent" onClick={() => {
            !fav.includes(params.company) ?
              dispatch(AddToFavouritesAction(params.company)) : dispatch(removeFromFavouritesAction(params.company))
          }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={
            fav.includes(params.company) ? 'red' : "currentColor"
          } className="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
            </svg></button></h1>

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
