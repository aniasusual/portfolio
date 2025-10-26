import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'


const Experience = () => {
    return (
      <section id="experience">
        <h5>My Professional Journey</h5>
        <h2>Work Experience</h2>

        <div className="container experience__container">
          {/* Emergent (YC S24) */}
          <article className="experience__card">
            <div className="experience__head">
              <h3>Software Engineer</h3>
              <div className="experience__company">
                <span className="company-name">Emergent (YC S24)</span>
                <span className="company-badge">Y Combinator Startup</span>
              </div>
              <p className="experience__duration">May 2024 - Present</p>
            </div>

            <ul className="experience__list">
              <li>
                <BsFillCheckCircleFill className='experience__list-icon' />
                <p>
                  Part of an exclusive 20-person full-time engineering team at a Y Combinator S24 startup, ranked among the world's top 10 fastest-growing startups
                </p>
              </li>
              <li>
                <BsFillCheckCircleFill className='experience__list-icon' />
                <p>
                  Architected and deployed multiple AI-powered agents for the marketing team, automating campaign workflows and improving content generation efficiency by 40%
                </p>
              </li>
              <li>
                <BsFillCheckCircleFill className='experience__list-icon' />
                <p>
                  Developed a comprehensive diagnostic agent for the support team, reducing ticket resolution time by 35% through intelligent troubleshooting and automated issue detection
                </p>
              </li>
              <li>
                <BsFillCheckCircleFill className='experience__list-icon' />
                <p>
                  Collaborated with cross-functional teams on frontend development using React and modern JavaScript frameworks, implementing responsive UI components and optimizing user experience
                </p>
              </li>
              <li>
                <BsFillCheckCircleFill className='experience__list-icon' />
                <p>
                  Debugged and resolved critical customer application issues using Google Cloud Platform (GCP), leveraging Cloud Logging, Error Reporting, and monitoring tools to ensure 99.9% uptime
                </p>
              </li>
              <li>
                <BsFillCheckCircleFill className='experience__list-icon' />
                <p>
                  Built scalable backend services and APIs using Node.js and Express, implementing RESTful architectures for enterprise-level applications
                </p>
              </li>
              <li>
                <BsFillCheckCircleFill className='experience__list-icon' />
                <p>
                  Technologies: React, Node.js, Python, GCP, AI/ML Integration, RESTful APIs
                </p>
              </li>
            </ul>
          </article>

          {/* Antino */}
          <article className="experience__card">
            <div className="experience__head">
              <h3>Backend Developer</h3>
              <div className="experience__company">
                <span className="company-name">Antino Labs</span>
              </div>
              <p className="experience__duration">July 2023 - March 2024</p>
            </div>

            <ul className="experience__list">
              <li>
                <BsFillCheckCircleFill className='experience__list-icon' />
                <p>
                  Developed and architected the complete backend infrastructure for the RAK project using Strapi CMS, delivering a robust, scalable, and maintainable solution that exceeded client expectations
                </p>
              </li>
              <li>
                <BsFillCheckCircleFill className='experience__list-icon' />
                <p>
                  Designed and implemented the backend architecture for the KLUDI project using Strapi, incorporating best practices for performance optimization and security
                </p>
              </li>
              <li>
                <BsFillCheckCircleFill className='experience__list-icon' />
                <p>
                  Collaborated closely with frontend developers to integrate new features and develop enhanced functionalities for the main web application using Node.js and Strapi headless CMS
                </p>
              </li>
              <li>
                <BsFillCheckCircleFill className='experience__list-icon' />
                <p>
                  Engineered robust RESTful APIs using Node.js and Strapi, ensuring seamless integration with existing systems and improving data accuracy by 30%, facilitating efficient communication between front-end and back-end services
                </p>
              </li>
              <li>
                <BsFillCheckCircleFill className='experience__list-icon' />
                <p>
                  Implemented comprehensive API documentation and testing strategies, ensuring code quality and maintainability across multiple projects
                </p>
              </li>
              <li>
                <BsFillCheckCircleFill className='experience__list-icon' />
                <p>
                  Technologies: Node.js, Strapi CMS, RESTful APIs, MongoDB, Express.js, JavaScript/TypeScript, Git
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    )
}

export default Experience
