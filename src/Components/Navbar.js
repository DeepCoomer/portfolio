import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark" id="navbar">
            <div className="container">
                <div className="container-fluid">
                    <Link
                        to="home"
                        className="navbar-brand">Deep Coomer</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "blue" }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="project"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
