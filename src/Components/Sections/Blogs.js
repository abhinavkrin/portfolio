import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { blogposts } from '../../data/blogposts';

function BlogCard({title,excerpt,featureImage,link}){
    return (
        <Row className="shadow rounded bg-white p-3 ml-2 mr-2 mt-2 mb-2">
            <Col xs={12} md={4} lg={3} className="d-flex align-items-center">
                <a href={link}><img src={featureImage} alt={title} className="img-fluid"/></a>
            </Col>
            <Col>
                <Row>
                    <Col xs={12}>
                        <a href={link}><span className="blog-title">{title}</span></a>
                    </Col>
                    <Col xs={12}>
                        <p>
                            {excerpt}
                            <span>
                                <a href={link}>
                                    Read More...
                                </a>
                            </span>
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
class Blogs extends React.Component {
    render(){
        return (
            <section className="w-100 mt-5 pt-2 blogs">
                <div className="blogs-bg"/>
                <Container>
                    <Row>
                        <Col xs={12} className="d-flex justify-content-center">
                            <span className="text-white section-title">
                                My Blogs
                            </span>
                        </Col>
                    </Row>
                    {blogposts.map(B=>(
                        <BlogCard title={B.title} excerpt={B.excerpt} featureImage={B.featureImage} link={B.link}/>
                    ))}
                </Container>
            </section>
        )
    }
}

export default Blogs;