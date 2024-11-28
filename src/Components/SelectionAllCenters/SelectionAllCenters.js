import React from 'react'
import './SelectionAllCenters.css'
import SelectionHome from '../SelectionHome/SelectionHome'
import { Container, Row, Col } from 'react-bootstrap'
import SingleCenter from '../CommonComponents/SingleCenter/SingleCenter'

function SelectionAllCenters() {

    const centerList =[
        {
            imgCenter: "url(Images/Illustrations/resort1.jpg)"
        },
        {
            imgCenter: "url(Images/Illustrations/resort2.jpg)"
        },
        {
            imgCenter: "url(Images/Illustrations/resort3.jpeg)"
        },
        {
            imgCenter: "url(Images/Illustrations/resort4.jpeg)"
        },
        {
            imgCenter: "url(Images/Illustrations/resort1.jpg)"
        },
        {
            imgCenter: "url(Images/Illustrations/resort2.jpg)"
        },
        {
            imgCenter: "url(Images/Illustrations/resort2.jpg)"
        },
        {
            imgCenter: "url(Images/Illustrations/resort3.jpeg)"
        },
        {
            imgCenter: "url(Images/Illustrations/resort4.jpeg)"
        },
    ]

  return (
    <section style={{backgroundColor:"rgb(247, 247, 253)"}}>
        <SelectionHome/>
        <Container className=''>
        <Row className='centers-row'>
            <Col>
            <h3 class="fs-3 mb-5 mt-5 text-center">All Centers</h3>
            </Col>
        </Row>
        <Row className='centers-row'>
           {centerList.map((element, index)=>{
                  return(
                     <Col md={6} lg={4}>
                        <SingleCenter imgCenter={element.imgCenter} index={index}/>
                     </Col>
                  )
           })}
        </Row>
        
    </Container>
    </section>
  )
}

export default SelectionAllCenters
