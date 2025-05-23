import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'


const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">

                <div className="experience__frontend">
                    <h3>Frontend Developement</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>HTML</h4>
                            </div>
                            <progress value="90" max="100">90%</progress>
                            
                        </article>
                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>CSS</h4>
                            </div>
                            <progress value="70" max="100">70%</progress>
                            
                        </article>
                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>Javascript</h4>
                            </div>
                            <progress value="50" max="100">50%</progress>
                            
                        </article>
                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>ReactJs</h4>
                            </div>
                            <progress value="50" max="100">50%</progress>
                            
                        </article>
                    </div>

                </div>

                <div className="experience__backend">
                    <h3>Backend Developement</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>MongoDB</h4>
                            </div>
                            <progress value="40" max="100">40%</progress>
                            
                        </article>
                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>ExpressJS</h4>
                            </div>
                            <progress value="40" max="100">40%</progress>
                            
                        </article>
                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>NodeJS</h4>
                            </div>
                            <progress value="50" max="100">50%</progress>
                            
                        </article>
                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>Python</h4>
                            </div>
                            <progress value="40" max="100">40%</progress>
                            
                        </article>
                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>MySql</h4>
                            </div>
                            <progress value="50" max="100">50%</progress>
                            
                        </article>
                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>C/C++</h4>
                            </div>
                            <progress value="70" max="100">70%</progress>
                            
                        </article>
                    </div>
                </div>
                
                <div className="other__Coursework">
                    <h3>Coursework</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>DBMS</h4>
                            </div>
                            
                        </article>

                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>Operating Systems</h4>
                            </div>
                            
                        </article>

                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>Computer Networks</h4>
                            </div>
                        </article>

                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>Data Structures</h4>
                            </div>
                            
                        </article>

                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>Algorithms</h4>
                            </div>
                            
                        </article>
                        <article className="experience__details">
                            <div>
                                <BsFillCheckCircleFill className='experience__details-icons'/>
                                <h4>Advanced JAVA</h4>
                            </div>
                            
                        </article>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience
