import React, { useEffect, useState } from 'react'
import './Testimonials.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

function Testimonials() {
    const[list, setList] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setList(res.data))
        .catch((err)=>console.log(err));
    },[list])

    var settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000
      };

  return (
    <section className='testimonial container-fluid mt-5 mb-5'>
    <div className="container testimonial-wrapper">
        <div className="row">
            <div className="col-12">
                <h4 className='text-center mb-5'>Feedback from our Users</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <Slider {...settings}>

                {list.map((element, index)=>{
                     return(
                        <div key={index} className='d-flex flex-column align-items-center gap-3 testimonial-main'>
                        <p className='text-center lh-base'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a laboriosam eaque enim eius ducimus, 
                           nulla tenetur incidunt veritatis impedit at qui labore quisquam, repellendus repellat quae nihil dolorum hic.</p>
                       <div className='d-flex flex-nowrap gap-3 justify-content-center'>
                           <img className='img-testimonial' src='Images/Illustrations/person_1.jpg.webp' alt="" />
                           <h6 className='mt-2'>{element.name}</h6>
                        </div>
                   </div>
                     )
                })}

               
               
            </Slider>
            </div>
        </div>
    </div>
</section>
  )
}

export default Testimonials
