import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import translations from './configs/Language.json';
import configs from '../../configs/configs.json';
import "./Navigator.css";

function Navigator(Props) {
    const [currentLanguage, setCurrentLanguage] = useState(Props.language);
    const [activeLink, setActiveLink] = useState('#home'); // 追踪当前选中的链接
    
    const languageOptions = Object.keys(translations.nav_button_language || {}).filter(
        key => key !== 'default' && key !== currentLanguage
    );

    const handleLanguageChange = (selectedLanguage) => {
        setCurrentLanguage(selectedLanguage);

        if (Props.onLanguageChange) {
            Props.onLanguageChange(selectedLanguage);
        }

        localStorage.setItem('preferred_language', selectedLanguage);
    };

    // 处理导航链接点击
    const handleNavClick = (href) => {
        setActiveLink(href);
    };

    return (
        <div className='container-fluid p-0'>
            <Navbar expand="lg" data-bs-theme="light">
                <Navbar.Brand href="#home" className='ms-2'>HU Jiaming</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link 
                            href="#home" 
                            className={activeLink === '#home' ? 'active' : ''}
                            onClick={() => handleNavClick('#home')}
                        >
                            {translations.nav_button_home?.[currentLanguage] || 'Home'}
                        </Nav.Link>
                        <Nav.Link 
                            href="#portfolio" 
                            className={activeLink === '#portfolio' ? 'active' : ''}
                            onClick={() => handleNavClick('#portfolio')}
                        >
                            {translations.nav_button_portfolio?.[currentLanguage] || 'Portfolio'}
                        </Nav.Link>
                        <Nav.Link 
                            href="#projects" 
                            className={activeLink === '#projects' ? 'active' : ''}
                            onClick={() => handleNavClick('#projects')}
                        >
                            {translations.nav_button_projects?.[currentLanguage] || 'Projects'}
                        </Nav.Link>
                        <Nav.Link 
                            href="#blog" 
                            className={activeLink === '#blog' ? 'active' : ''}
                            onClick={() => handleNavClick('#blog')}
                        >
                            {translations.nav_button_blog?.[currentLanguage] || 'Blog'}
                        </Nav.Link>
                        <Nav.Link 
                            href="#photography" 
                            className={activeLink === '#photography' ? 'active' : ''}
                            onClick={() => handleNavClick('#photography')}
                        >
                            {translations.nav_button_photography?.[currentLanguage] || 'Photography'}
                        </Nav.Link>
                        <Nav.Link 
                            href="#skills" 
                            className={activeLink === '#skills' ? 'active' : ''}
                            onClick={() => handleNavClick('#skills')}
                        >
                            {translations.nav_button_skills?.[currentLanguage] || 'Skills'}
                        </Nav.Link>
                        <Nav.Link 
                            href="#contact" 
                            className={activeLink === '#contact' ? 'active' : ''}
                            onClick={() => handleNavClick('#contact')}
                        >
                            {translations.nav_button_contact?.[currentLanguage] || 'Contact'}
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#resume">{translations.nav_button_resume?.[currentLanguage] || 'Resume'}</Nav.Link>
                        <NavDropdown
                            title={translations.nav_button_language?.[currentLanguage] || 'Language'}
                            id="language-nav-dropdown"
                            drop="down"
                            align="end"
                            data-bs-theme="light"
                        >
                            {languageOptions.map(lang => (
                                <NavDropdown.Item 
                                    key={lang} 
                                    eventKey={lang} 
                                    className="language-dropdown-item"
                                    onClick={() => handleLanguageChange(lang)}

                                >
                                    {translations.nav_button_language[lang]}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigator;