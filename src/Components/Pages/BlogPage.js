import React, {useState, useEffect} from 'react'
import axios from 'axios';
import BlogSingle from '../CommonComponents/BlogSingle/BlogSingle';
import { Container, Row, Col } from 'react-bootstrap';

function BlogPage() {
    const[blogItem, setBlogItem] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setBlogItem(res.data))
        .catch((err)=>console.log(err))
    },[blogItem])

  return (
<section className='blogpage-bg'>
   <Container className='pt-5 text-center'>
  <Row>
      <Col>
        <h4 className='mb-5'>Blogs by our Expert Health Professionals</h4>
        </Col>
   </Row>
    <Row>
      {blogItem.map((list, index)=>{
          return(
            <Col md={6} lg={4} xl={3}>
            <BlogSingle index={index} name={list.name} />
            </Col>
          )      
      })}
      
    </Row>
  </Container>
 </section>
  )
}

export default BlogPage
