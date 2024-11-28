import React from "react";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SelectionHome from "../SelectionHome/SelectionHome";

function Header() {
  const headerList = [
    {
      img: "url(Images/BackgroundImages/bg_1.jpg.webp)",
      class: "img1",
      offset: 0,
    },
    {
      img: "url(Images/BackgroundImages/bg_2.jpg.webp)",
      class: "img2",
      offset: 0,
    },
    {
      img: "url(Images/BackgroundImages/bg_3.jpg.webp)",
      class: "img3",
      offset: 6,
    },
  ];
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };
  const headerAllList = headerList.map((element, index) => {
    return (
      <div key={index}>
        <div
          className="header-img img1"
          style={{
            backgroundImage: element.img,
          }}
        >
          {/* <div className="overlay" /> */}
          <Container>
            <Row>
              <Col md={9} lg={7} xl={{ span: 6, offset: element.offset }}>
                <div className="header-inner d-flex flex-column justify-content-center gap-2 ps-3">
                  <h2>Welcome to Nutracare360 Inc.</h2>
                  <h1 className="mb-5">Nutracare Holistic way of Healing</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  });

  return (
    <>
      <Container fluid className="header-wrapper p-0">
        <div className="slider-container">
          <Slider {...settings}>{headerAllList}</Slider>
        </div>
        <div className="header-position">
          <SelectionHome />
        </div>
      </Container>
    </>
  );
}

export default Header;
