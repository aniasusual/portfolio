import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
import { MdWork } from 'react-icons/md';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#about');
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            // Optional: Update active section based on scroll position
            updateActiveSection();
        };

        // Function to determine active section based on scroll position
        const updateActiveSection = () => {
            const sections = ['#about', '#portfolio', '#experience', '#contact'];

            // Only update if we're actually scrolling through the page
            if (window.scrollY > 100) {
                for (let i = sections.length - 1; i >= 0; i--) {
                    const section = sections[i];
                    if (section === '#') {
                        // Special case for home section
                        if (window.scrollY < 300) {
                            setActiveNav('#');
                            break;
                        }
                    } else {
                        const element = document.querySelector(section);
                        if (element) {
                            const position = element.getBoundingClientRect();
                            // If the section is in view or we've scrolled past it
                            if (position.top <= 300) {
                                setActiveNav(section);
                                break;
                            }
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    // Handle click transitions with smooth scrolling
    const handleNavClick = (e, section) => {
        e.preventDefault();
        setActiveNav(section);

        // Smooth scroll to section
        const targetElement = document.querySelector(section);
        if (targetElement) {
            // Adding a small offset to account for potential headers
            const offset = 80;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: section === '#' ? 0 : targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <div className="nav-container">
                <a
                    href="#about"
                    onClick={(e) => handleNavClick(e, '#about')}
                    className={activeNav === '#about' ? 'active' : ''}
                >
                    <AiOutlineUserAdd className="icon" />
                    <span className="tooltip">About</span>
                </a>
                <a
                    href="#portfolio"
                    onClick={(e) => handleNavClick(e, '#portfolio')}
                    className={activeNav === '#portfolio' ? 'active' : ''}
                >
                    <BsJournalBookmarkFill className="icon" />
                    <span className="tooltip">Projects</span>
                </a>
                <a
                    href="#experience"
                    onClick={(e) => handleNavClick(e, '#experience')}
                    className={activeNav === '#experience' ? 'active' : ''}
                >
                    <MdWork className="icon" />
                    <span className="tooltip">Experience</span>
                </a>
                <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className={activeNav === '#contact' ? 'active' : ''}
                >
                    <IoMdContact className="icon" />
                    <span className="tooltip">Contact</span>
                </a>
            </div>
        </nav>
    );
};

export default Nav;