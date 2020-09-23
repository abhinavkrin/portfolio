import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import iconLight from '../../Assets/images/icon-light.svg';
import { links } from '../../data/links';
class Footer extends React.Component {
    render(){
        return (
            <footer>
                <Container>
                    <Row className="p-5">
                        <Col xs={12} lg={4} className="d-flex justify-content-center align-items-center">
                            <span className="start-project">Start a project</span>
                        </Col>
                        <Col xs={12} lg={4} className="d-flex justify-content-center align-items-center">
                            <p className="start-project-text">Interested in working together? Have an Idea in mind? Let us chat.</p>
                        </Col>
                        <Col xs={12} lg={4} className="d-flex justify-content-center align-items-center">
                            <a href={"mailto:"+links.email}>
                                <button className="start-project-button">Contact Me</button>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="d-flex justify-content-center">
                            <img src={iconLight} alt="Abhinav Kumar" className="footer-icon"/>
                        </Col>
                        <Col xs={12} lg={4} className="d-flex justify-content-center align-items-center">
                            <p className="start-project-text">Crafted by Abhinav Kumar with <span style={{color: "red"}}>♥</span></p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;