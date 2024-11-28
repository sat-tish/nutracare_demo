import React from 'react'
import './SuccessStories.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SuccessStories() {

    const slideObjects = [
        {
            id:0,
            image: 'Images/Illustrations/person_1.jpg.webp',
            para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet placeat molestias eius iusto repellat quidem nemo debitis, aperiam, consequatur tempore qui perspiciatis incidunt maxime! Amet fugiat nesciunt ea vel adipisci. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet placeat molestias eius iusto repellat quidem nemo debitis, aperiam, consequatur tempore qui perspiciatis incidunt maxime! Amet fugiat nesciunt ea vel adipisci. ",
            fName: "Dr Full Name",
            designation: "Padiactric"
        },
        {
            id:1,
            image: 'Images/Illustrations/manisha-photo.jpg',
            para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet placeat molestias eius iusto repellat quidem nemo debitis, aperiam, consequatur tempore qui perspiciatis incidunt maxime! Amet fugiat nesciunt ea vel adipisci. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet placeat molestias eius iusto repellat quidem nemo debitis, aperiam, consequatur tempore qui perspiciatis incidunt maxime! Amet fugiat nesciunt ea vel adipisci.",
            fName: "Dr Full Name",
            designation: "Gynacologist"
        },
        {
            id:2,
            image: 'Images/Illustrations/person_1.jpg.webp',
            para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet placeat molestias eius iusto repellat quidem nemo debitis, aperiam, consequatur tempore qui perspiciatis incidunt maxime! Amet fugiat nesciunt ea vel adipisci. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet placeat molestias eius iusto repellat quidem nemo debitis, aperiam, consequatur tempore qui perspiciatis incidunt maxime! Amet fugiat nesciunt ea vel adipisci.",
            fName: "Dr Full Name",
            designation: "Orthopedic"
        }
    ];
    const slideItems = slideObjects.map((sl)=>{
        return(
                   <div key={sl.id}>
                      <div className="row">
                        <div className="col-12 col-md-5 offset-md-1 p-0">
                          <div>
                            <img
                              className="achi-img"
                              src={sl.image}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-5 p-0">
                          <div className="achi-text d-flex flex-column justify-content-center p-md-3 p-lg-5">
                            <p>
                              {sl.para}
                            </p>
                            <h6 className="mt-5 mb-3">{sl.fName}</h6>
                            <p>{sl.designation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
        )
    });
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
      };
    

  return (
    <section className="achievements">
    <div className="achievements-wrapper container-fluid">
      <div className="row">
        <div className="col-12 col-lg-10 col-xl-10 mx-auto">
          <h4 className="mb-5 text-center">Successful Stories</h4>
          <div className="row">
            <div className="col-12">
              <div className="slider-container">
              <Slider {...settings}>
                  {slideItems}
              </Slider>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SuccessStories
