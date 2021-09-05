import React from 'react'
import project1 from './project1.PNG'
import project2 from './project 2.PNG'
import project3 from './project3.jpeg'

const Project = () => {
    return (
        <div className="container-md projectsinfo" id="project">
            <h2>Projects</h2>
            <div className="container">
                <div className="row p-2 projects">
                    <div className="card-group py-4">
                        <div className="card col-md-6">
                            <div className="card-img"><img src={project1} alt="" srcset="" className="imgFluid1"/></div>
                            <p className="card-header">Einspector</p>
                            <div className="card-footer"> <button className="btnn2">Open Github</button></div>
                        </div>
                        <div className="card col-md-6">
                            <div className="card-img-top"><img src={project2} alt="" srcset="" className="imgFluid1"/></div>
                            <p className="card-header">Online Banking System</p>
                            <div className="card-footer"> <button className="btnn2">Open Github</button></div>
                        </div>
                        <div className="card col-md-6">
                            <div className="card-img-top"><img src={project3} alt="" srcset="" className="imgFluid1"/></div>
                            <p className="card-header">News App</p>
                            <div className="card-footer"> <button className="btnn2">Open Github</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
