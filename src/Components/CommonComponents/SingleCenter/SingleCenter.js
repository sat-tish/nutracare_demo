import React, { memo } from "react";
import "./SingleCenter.css";

function SingleCenter(props) {
  return (
    <div className="card mb-5" key={props.index}>
      <div className="card-img-parent">
        <div
          className="info-img img-scroll"
          style={{ backgroundImage: props.imgCenter }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">Name of center</h5>
        <p className="card-text">short address of center.</p>
        <p className="card-text">emailinf0@gmail.com</p>
        <h6 className="mb-3">Our services</h6>
        <div className="d-flex flex-wrap justify-content-between">
          <p className="w-50 card-text">Ayurveda</p>
          <p className="w-50 card-text">Homeopathy</p>
          <p className="w-50 card-text">Accupressure</p>
          <p className="w-50 card-text">Chirotherapy</p>
        </div>
        <div className="fig w-100 d-flex flex-wrap gap-1 justify-content-end mt-4">
          <a href="/" className="btn fig-book-apt">
            Book Appointment
          </a>
          <a href="/" className="btn fig-read-more">
            View more..
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(SingleCenter);
