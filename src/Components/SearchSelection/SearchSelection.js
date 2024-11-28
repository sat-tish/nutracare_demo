import React, { useEffect, useState } from 'react'
import './SearchSelection.css'
import SelectionHome from '../SelectionHome/SelectionHome'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchSelection() {
    const [doctorList, setDoctorList] = useState([]);
    useEffect(()=>{
     axios
     .get("https://jsonplaceholder.typicode.com/users")
     .then((res) => setDoctorList(res.data))
     .catch((err) => console.log(err));
    },[]);
    const navigate =useNavigate()

  return (
    <>
    <Container fluid className='Search-selection-wrapper p-0'>
         <SelectionHome/>

    
    <Container>
        <Row className='justify-content-center'>
        <Col lg={9}>
            <h4 class="mt-5 mb-5">All Professionals</h4>
             {doctorList.map((doc, index)=>{
                 return(
                    <figure
                    className="professional-figure d-flex flex-nowrap gap-4 gap-xl-5 shadow p-3" key={index}
                  >
                    <div className="figure-img">
                      <img
                        className="personal-img"
                        src="Images/Illustrations/person_1.jpg.webp"
                        alt=""
                      />
                    </div>
                    <figcaption className="pro-fig">
                      <h5>{doc.name}</h5>
                      <h6>Homeopathic consultant</h6>
                      <p className="mt-3">7+ years experience</p>
                      <p className="mt-3">
                        {doc.address.street}, {doc.address.suite}, {doc.address.city}, {doc.address.zipcode}
                      </p>
                      <div className="d-flex flex-wrap justify-content-between">
                        <p className="">
                          consulting fees <span> 300+</span>
                        </p>
                        <button className="btn btn-primary fig-know-more btn-sm " onClick={()=>{
                             navigate('/professional-info', {state:{resultName:doc.name}})
                        }}>Know more..</button>
                       
                      </div>
                    </figcaption>
                  </figure>
                  
                 )
             })}
            </Col>
        </Row>
    </Container>
    </Container>
    </>
  )
}

export default SearchSelection
