import React from 'react'
import ReactTyped from 'react-typed'
import profile from './myimage.png'
import { FaInstagram, FaGithub, FaLinkedinIn, FaInbox } from 'react-icons/fa'

const Header = () => {
    return (
        <div className="header-wraper" id="home">
            <div className="main-info">
                <h2>Hii I am a Deep Coomer I am a </h2>
                <ReactTyped
                    className="typed-text"
                    strings={['Web Developer', 'App Developer']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <button className="btnn">DownLoad CV</button>
                <button className="btn1">Hire Me</button>
                <div className="profilepic">
                    <img src={profile} alt="" srcSet="" className="imgFluid" />
                </div>
                <div>
                    <ul className="smlist">
                        <li className="fa"><a href="#" className="fainstagram"><FaInstagram /></a></li><br />
                        <li className="fa"><a href="https://www.github.com/DeepCoomer" className="fainstagram"><FaGithub /></a></li><br />
                        <li className="fa"><a href="#" className="fainstagram"><FaLinkedinIn /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
