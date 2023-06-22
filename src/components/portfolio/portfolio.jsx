import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/home-so.png'
import IMG2 from '../../assets/food.png'
import IMG3 from '../../assets/personalPortfolio.png'
import IMG4 from '../../assets/anomaly.png'


// Data Array para preenhcer o portfolio
const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'JUIT socials',
    desc: 'A full stack social media application to connect all the passed out and current juit students.',
    github: 'https://github.com/aniasusual/JUIT-Social',
    // demo: 'https://beexclusivegym.com.br'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Eatery',
    desc: 'A food ordering website for JUIT students to place an order in the college canteen and avoid long standing queues.(backend) ',
    github: 'https://github.com/aniasusual/Food-app',
    // demo: 'https://embelezegama.com.br'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio',
    desc: 'A react js portfolio website which highlighting work and experience ',
    github: 'https://github.com',
    // demo: 'https://seoxperts.com.br'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Anomaly Detection System',
    desc: 'An anomaly detection system which detects anomaly in HTTP network data.',
    github: 'https://github.com/aniasusual/Anomaly-detection-system',
    // demo: 'https://modal.org.br'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Projects in</h5>
      <h2>
        Portfolio
      </h2>
      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, desc, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} className="image" alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Site</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio