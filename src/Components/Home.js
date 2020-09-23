import React,{Component} from 'react';
import About from './Sections/About';
import Blogs from './Sections/Blogs';
import Footer from './Sections/Footer';
import Lander from './Sections/Lander';
import Projects from './Sections/Projects';
//import Container from 'react-bootstrap/Container';

class Home extends Component {
    constructor(){
        super();
        this.do = null;
    }
    componentDidMount(){
        
    }
    render(){
        return (
            <div className="home">
                <Lander/>
                <About/>
                <Projects/>
                <Blogs/>
                <Footer/>
            </div>
        )
    }
}

export default Home;