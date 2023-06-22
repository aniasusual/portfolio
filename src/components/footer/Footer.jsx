import React from 'react'
import './footer.css'
import SocialIcons from '../socialicons/SocialIcons'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Animesh Dhillon</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>
        <SocialIcons position='footer__socialicons' />
        <div className="footer__copyright">
          <small>&copy; {new Date().getFullYear()} ANIMESH. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer