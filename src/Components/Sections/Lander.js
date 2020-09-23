import React from 'react';
import icon from '../../Assets/images/icon.svg'
import avatar from '../../Assets/images/me.webp';
import github from '../../Assets/images/github.svg'
import twitter from '../../Assets/images/twitter.svg';
import linkedin from '../../Assets/images/linkedin.svg';
import blogging from '../../Assets/images/blogging.svg';
import gsap from 'gsap/gsap-core';
import CSSPlugin from 'gsap/CSSPlugin'
import { links } from '../../data/links';
import { Link } from 'react-router-dom';
class Lander extends React.Component {
    constructor(){
        super();
        this.dp =null;
    }

    componentDidMount(){
        gsap.registerPlugin(CSSPlugin);
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
        tl.to('.hide',{duration: 1, y: 0, opacity: 1, stagger: 0.3},1);
        tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.8 });
        tl.to(".intro", { y: "-100%", duration: 1 }, "-=0.9");
        tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
        tl.to(".animate-in", { opacity: 1,y: 0, duration: 0.8 }, "-=1.3");
        tl.fromTo(".hero-img", { opacity: 0 }, { opacity: 1, duration: 1 },"-=0.8");
        // tl.to('.hide',{duration: 0, y: 0, opacity: 1, stagger: 0});
        // tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0 });
        // tl.to(".intro", { y: "-100%", duration: 0 }, "-=0.9");
        // tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration:0 });
        // tl.to(".animate-in", { opacity: 1,y: 0, duration: 0 }, "-=1.3");
    }

    render(){
        return (
            <div className="lander">
                <div className="intro">
                    <div className="hide">Hi!</div>
                    <div className="hide">I am</div>
                    <div className="hide">Abhinav</div>
                </div>
                <div className="slider"></div>
                <header className="container">
                    <nav className="navbar">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <Link to="/"><img src={icon} alt="Abhinav Kumar" className="logo-icon"/></Link>
                            </li>
                            <li className="list-inline-item">
                                <a href={'mailto:'+links.email} title={'mailto:'+links.email} style={{textDecoration: "none"}}>
                                    <button className="contact-button">
                                        SAY HELLO
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="hero">
                        <div className="hero-primary-text animate-in">Front-end & Back-end Developer</div>
                        <div className="hero-secondary-text animate-in">I code ideas into simple robust web applications.</div>
                        <div className="animate-in">
                            <img src={avatar} alt="Abhinav Kumar" className="hero-avatar"/>
                        </div>
                        <div>
                            <ul className="list-inline animate-in p-1 m-1">
                                <li className="list-inline-item social-icon" >
                                    <a href={links.linkedIn} title="LinkedIn">
                                        <img src={linkedin} alt="Abhinav Kumar on Linkedin"/>
                                    </a>
                                </li>
                                <li className="list-inline-item social-icon">
                                    <a href={links.twitter}  title="Twitter">
                                        <img src={twitter} alt="Abhinav Kumar on Twitter"/>
                                    </a>
                                </li>
                                <li className="list-inline-item social-icon">
                                    <a href={links.github} title="Github">
                                        <img src={github} alt="Abhinav Kumar on Github'"/>
                                    </a>
                                </li>
                                <li className="list-inline-item social-icon">
                                    <a href={links.blogSite} title="My blogs">
                                        <img src={blogging} alt="Abhinav Kumar's Blog"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Lander;