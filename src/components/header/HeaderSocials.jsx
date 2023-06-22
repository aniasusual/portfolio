import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'
import {SiGeeksforgeeks} from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/animesh-dhillon-a3387221b/" target="_blank"><SiLinkedin/></a>
            <a href="https://github.com/aniasusual" target="_blank"><FaGithub/></a>
            <a href="https://auth.geeksforgeeks.org/user/anni8sept/practice" target='_blank'><SiGeeksforgeeks/></a>
        </div>
    )
}

export default HeaderSocials
