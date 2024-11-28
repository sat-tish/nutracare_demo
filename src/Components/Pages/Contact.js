import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactOurInfo from '../ContactComponent/ContactOurInfo'
import ContactForm from '../ContactComponent/ContactForm'

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
        <h4 className='text-center mt-5 mb-5'>Contact Us</h4>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
        <ContactForm/>
        </Col>
        <Col lg={6}>
           <ContactOurInfo/>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
