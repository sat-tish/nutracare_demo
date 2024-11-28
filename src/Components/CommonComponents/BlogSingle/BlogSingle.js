import React, { memo } from 'react'
import './BlogSingle.css'

function BlogSingle(props) {
  return (
    <figure className="figure-blog shadow mb-5" key={props.index}>
    <div className="blog-img-div">
      <div
        className="blog-img img-scroll"
        style={{ backgroundImage: `url('Images/Illustrations/b2.jpeg')`}}
      />
    </div>
    <figcaption>
      <p>Date and Time</p>
      <h6 className="mb-3">{props.name}</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nihil corporis quae amet facere inventore illo obcaecati asperiores nisiquisquam voluptatibus?</p>
    </figcaption>
  </figure>
  )
}

export default memo(BlogSingle) 
