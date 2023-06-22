import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
// import { FaAward } from 'react-icons/fa'
// import { FiUsers } from 'react-icons/fi'
// import { VscFolderLibrary } from 'react-icons/vsc'
import {GiNinjaHead} from 'react-icons/gi'
import {GoOrganization} from 'react-icons/go'
import {RiTeamFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>About my</h5>
      <h2>Work and Projects</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Animesh Dhillon" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <GiNinjaHead className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ years experience</small>
              </article>
              {/* <article className="about__card">
                <GoOrganization className='about__icon'/>
                <h5>W</h5>
                <small>+ Clients</small>
              </article> */}
              <a href="https://github.com/aniasusual" target='_blank'>
                <article className="about__card">
                  <RiTeamFill className='about__icon'/>
                  <h5>Projects</h5>
                  <small>5+ Projects in web developement and AI</small>
                </article>
              </a>
            </div>
            <p>
            Hi I am Animesh Dhillon and I am a MERN stack developer and tech enthusiast. I' ve been learning and working with MERN stack for almost 2 years now.
            I have an experience of 5+ projects in Web Developement. In addition to that I am familiar with version control systems like Git and have experience collaborating with teams using platforms like GitHub or GitLab.
            Along with that I have excellent problem-solving skills and can identify and resolve issues or bugs in the code efficiently.
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About

