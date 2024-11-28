import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer text-dark py-5">

    <Container>

      <Row>
        <Col xs={7} md={7} lg={5}>
          <h6>Nutracare 360 Inc.</h6>
          <p className='footer-para mt-4 me-xl-5 para-mb'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam cum maxime laudantium laborum, nulla, magni </p>


          <div className='d-flex flex-wrap justify-content-between mt-5 mb-5 footer-email'>
          <div >
              <h6>Contact Us </h6>
              <p className='mt-3 me-5 mb-5'><Link className='footer-para'>canayu360@gmail.com</Link></p>
          </div>
              <div className='me-xl-5'>
                 <h6>Connect on Social Media</h6>
                 <div className='d-flex mt-4 mb-5 gap-2'>
                     <Link><div className='footer-icon-div'><span>i</span></div></Link>
                     <Link><div className='footer-icon-div'><span>i</span></div></Link>
                     <Link><div className='footer-icon-div'><span>i</span></div></Link>
                     <Link><div className='footer-icon-div'><span>i</span></div></Link>
                 </div>
              </div>
         </div>
        </Col>
        <Col xs={{span:4, offset:1}} md={{span:4, offset:1}} lg={{span:2, offset:1}} >
          <h6>Links</h6>
          <p className='mt-4'><Link className='footer-para' to={'/'}>Home</Link></p>
          <p><Link className='footer-para' to={'/blogs'}>Blogs</Link></p>
          <p><Link className='footer-para' to={'/about-us'}>About Us</Link></p>
          <p><Link className='footer-para' to={'/contact-us'}>Join Us</Link></p>
          <p className='mb-5'><Link className='footer-para'>Categories</Link></p>
        </Col>
        <Col xs={6} md={6} lg={2}>
          <h6>Top Categories</h6>
          <p className='mt-4'><Link className='footer-para'>General Physician</Link></p>
          <p><Link className='footer-para'>Medicine</Link></p>
          <p><Link className='footer-para'>Gynacologist</Link></p>
          <p><Link className='footer-para'>Paediatric</Link></p>
          <p><Link className='footer-para'>Orthopedic</Link></p>
          <p className='mb-5'><Link className='footer-para'>Dentist</Link></p>
        </Col>
        <Col xs={6} md={6} lg={2}>
           <h6>Top Categories</h6>
           <p className='mt-4'><Link className='footer-para'>Skin & Hair</Link></p>
           <p><Link className='footer-para'>Ayurved</Link></p>
           <p><Link className='footer-para'>Homeopathy</Link></p>
           <p><Link className='footer-para'>Physiothetapy</Link></p>
           <p><Link className='footer-para'>Dietitian</Link></p>
           <p className='mb-5'><Link className='footer-para'>Yoga</Link></p>
        </Col>
        <Col md={12} className='text-center'>
        <p className='footer-para'>Copyright ©2024 All rights reserved | Made by<span className='fw-bold'>  Canayu Nutracare 360 Pvt Ltd.</span></p>
        </Col>
      </Row>
  </Container>
</footer>
  )
}

export default Footer
