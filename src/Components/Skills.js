import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython } from 'react-icons/fa'

const Skills = () => {
    return (
        <div className="container-md skilsinfo" id="skills">
            <h2 className="headerskills">Skills</h2><br /><br />
            <div className="mb-1 skilldes">
                <span> HTML5<FaHtml5 size = {40} color="darkorange" /></span>
                <div className="containerskills">
                    <div className="skills html">90%</div>
                </div><br />
                <span>CSS3 <FaCss3 size = {40} color="blue" /></span>
                <div className="containerskills">
                    <div className="skills css">85%</div>
                </div><br />
                <span>JavaScript <FaJs size = {40} color="yellow" /></span>
                <div className="containerskills">
                    <div className="skills js">75%</div>
                </div><br />
                <span>ReactJs <FaReact size = {40} color="skyblue" /></span>
                <div className="containerskills">
                    <div className="skills reactjs">65%</div>
                </div><br />
                <span>Python <FaPython size = {40} color="blue" /></span>
                <div className="containerskills">
                    <div className="skills reactjs">60%</div>
                </div><br />
            </div>
        </div>
    )
}

export default Skills
