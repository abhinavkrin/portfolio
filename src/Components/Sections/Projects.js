import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import publicIcon from '../../Assets/images/public.svg';
import devIcon from '../../Assets/images/construction.svg';
import { ProjectsList } from '../../ProjectData/projects';


function ProjectCard({icon,name,desc,link}){
    return (
        <Col xs={12} lg={4} className="p-2">
            <div className="w-100 h-100 p-2 text-center bg-white rounded border rounded shadow-sm d-flex flex-column">
                <img src={icon} alt="name" className="project-icon"/>
                <div className="project-name">
                    <span>{name}</span>
                </div>
                <div className="project-desc">
                    <p>
                        {desc}
                    </p>
                </div>
                <div className={(link?"project-link":"project-dev")+" fix-link"}>
                    <span className="d-flex align-items-center justify-content-center">
                        <img src={link?publicIcon:devIcon} alt={link?name:"In development"} className="project-meta"/>
                        <span>{link?
                            <a href={link}>{link}</a>
                            :"In development"}
                        </span>
                    </span>
                </div>
            </div>
        </Col>
    )
}
class Projects extends React.Component {
    render(){
        return (
            <Container className="pt-5">
                <Row>
                    <Col xs={12} className="text-center">
                        <span className="section-title text-dark-primary">
                            My Projects
                        </span>
                    </Col>
                </Row>
                <Row className="m-1">
                    {ProjectsList.map((P,i)=>(
                        <ProjectCard icon={P.icon} name={P.name} desc={P.desc} link={P.link} key={P.name+i}/>
                    ))}
                </Row>
            </Container>
        )
    }
} 

export default Projects;