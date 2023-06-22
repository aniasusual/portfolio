import React from 'react'
import CV from '../../assets/Resume (1).pdf'


const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className='btn' > Download CV</a>
            <a href="#contact" className='btn btn-primary'> Let's Contact</a>
        </div>
    )
}

export default CTA
