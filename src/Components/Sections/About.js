import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hero from '../../Assets/images/hero.svg';
import laptop from '../../Assets/images/phone-link.svg';
import code from '../../Assets/images/code.svg';
import selfImprovement from '../../Assets/images/self_improvement.svg';

class About extends React.Component {
    render(){
        return (
            <section className="about container-fluid">
                <Row>
                    <Col xs={12} className="pb-0 m-0 d-flex justify-content-center">
                        <img src={hero} alt="hero" className="hero-img"/>
                    </Col>
                </Row>
                <Row className="dark-section">
                    <Col xs={12} className="pb-0 m-0 d-flex justify-content-center bio-title">
                        <span>Hi, I'm Abhinav Kumar</span>
                    </Col>
                    <Col xs={12} className="pb-0 m-0">
                        <div className="container bio">
                            <p>Started coding since I was 14, Now I am a full stack web developer, blogger, and a full-time tech enthusiast. I spend my whole day playing with javascript, react, HTML, and CSS; experimenting with tech, and gulping a great variety of useful+useless information on the planet internet.
                            </p>
                            <p>I make web applications that charm and solve problems. I’m always curious and enjoy working on projects that challenge me to continuously learn and evolve.
                            </p> 
                            <p>
                            As of now, I am pursuing B.Tech. in Information Technology from Heritage Institute of Technology, Kolkata, India.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} className="pb-0 m-0 fill-divider">
                    </Col>
                </Row>
                <Row className="fix-divider-container">
                    <Col xs={12} className="fix-divider">
                        <div className="container skills">
                            <Row>

                                <Col xs={12} lg={4} className="skill-col">
                                    <div className="skill-icon">
                                        <img src={laptop} alt="frontend dev"/>
                                    </div>
                                    <div className="skill-h1">
                                        <span>Front-end Developer</span>
                                    </div>
                                    <div className="skill-text">
                                        <p>I enjoy crafting ideas into reality in the browser from scratch.</p>
                                    </div>
                                    <div className="skill-h2">
                                        <span>Languages I speak:</span>
                                    </div>
                                    <div className="skill-text">
                                        <p>Javascript, css, html, sass & less</p>
                                    </div>
                                    <div className="skill-h2">
                                        <span>Tools & frameworks:</span>
                                    </div>
                                    <div className="skill-list">
                                        <ul>
                                            <li>ReactJS</li>
                                            <li>Bootstrap</li>
                                            <li>Material UI</li>
                                            <li>Redux</li>
                                            <li>Webpack</li>
                                            <li>VS Code</li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col xs={12} lg={4} className="skill-col">
                                    <div className="skill-icon">
                                        <img src={code} alt="frontend dev"/>
                                    </div>
                                    <div className="skill-h1">
                                        <span>Back-end Developer</span>
                                    </div>
                                    <div className="skill-text">
                                        <p>I like making back-end solutions that are secure, fast & robust.</p>
                                    </div>
                                    <div className="skill-h2">
                                        <span>Languages I speak:</span>
                                    </div>
                                    <div className="skill-text">
                                        <p>Javascript (ES6) & Java</p>
                                    </div>
                                    <div className="skill-h2">
                                        <span>Tools & frameworks:</span>
                                    </div>
                                    <div className="skill-list">
                                        <ul>
                                            <li>NodeJS</li>
                                            <li>ExpressJS</li>
                                            <li>MongoDB</li>
                                            <li>Firebase</li>
                                            <li>Cloud Functions</li>
                                            <li>Google Cloud & AWS</li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col xs={12} lg={4} className="skill-col">
                                    <div className="skill-icon">
                                        <img src={selfImprovement} alt="frontend dev"/>
                                    </div>
                                    <div className="skill-h1">
                                        <span>Blogger & Competitive Programmer</span>
                                    </div>
                                    <div className="skill-text">
                                        <p>I enjoy blogging and solving problems</p>
                                    </div>
                                    <div className="skill-h2">
                                        <span>Blogging</span>
                                    </div>
                                    <div className="skill-text">
                                        <p>I believe in sharing whatever I have learnt with my fellow mates. Blogging is an excellent wat to practice it.</p>
                                    </div>
                                    <div className="skill-h2">
                                        <span>Competitive Programming</span>
                                    </div>
                                    <div className="skill-text">
                                        <p>
                                        Solving problems keep my adrenaline rush going. I do competitve programming to progressively increase my problem solving skills. 
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default About;