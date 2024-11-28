import React from 'react'
import './SelectionHome.css'
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

function SelectionHome() {
    const navigate = useNavigate();

  return (
   <Container className='selection-input'>
    <Row className='justify-content-center'>
        <Col >
        <div className="mt-4 mb-3">
            <div className=" d-flex flex-wrap ">
            <select name="" id="" className="selection-form mb-2">
                <option value="">City</option>
                <option value="">Pune</option>
                <option value="">Mumbai</option>
              </select>
              <select name="" id="" className="selection-form mb-2">
                <option value="">Professionals</option>
                <option value="">centers</option>
               
              </select>
              <select name="" id="" className="selection-form mb-2">
                <option value="">Category</option>
                <option value="">Pune</option>
                <option value="">Mumbai</option>
              </select>
                <button className="btn btn-selection-search mb-2" onClick={()=>navigate('/search-selection')}>Search</button>
            </div>
          </div>
        </Col>
    </Row>
   </Container>
   
  )
}

export default SelectionHome
