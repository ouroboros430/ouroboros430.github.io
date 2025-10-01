import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import translations from './configs/Language.json';
import configs from '../../configs/configs.json';
import "./Navigator.css";

function Navigator(Props) {
    const [currentLanguage, setCurrentLanguage] = useState(Props.language);
    const location = useLocation();
    
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

    // 判断当前链接是否激活
    const isActive = (path) => {
        return location.pathname === path || (path === '/' && location.pathname === '/');
    };

    return (
        <div className='container-fluid p-0'>
            <Navbar expand="lg" data-bs-theme="light">
                <Navbar.Brand as={Link} to="/" className='ms-2'>
                    <img src="/hu_jiaming.svg" alt="Logo" width="30" height="30" className="d-inline-block align-top" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            className={isActive('/') ? 'active' : ''}
                        >
                            {translations.nav_button_home?.[currentLanguage] || 'Home'}
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/experience" 
                            className={isActive('/experience') ? 'active' : ''}
                        >
                            {translations.nav_button_experience?.[currentLanguage] || 'Experience'}
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/projects" 
                            className={isActive('/projects') ? 'active' : ''}
                        >
                            {translations.nav_button_projects?.[currentLanguage] || 'Projects'}
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/skills" 
                            className={isActive('/skills') ? 'active' : ''}
                        >
                            {translations.nav_button_skills?.[currentLanguage] || 'Skills'}
                        </Nav.Link>
                        {/* <Nav.Link 
                            as={Link} 
                            to="/blog" 
                            className={isActive('/blog') ? 'active' : ''}
                        >
                            {translations.nav_button_blog?.[currentLanguage] || 'Blog'}
                        </Nav.Link> */}
                        <Nav.Link 
                            as={Link} 
                            to="/photography" 
                            className={isActive('/photography') ? 'active' : ''}
                        >
                            {translations.nav_button_photography?.[currentLanguage] || 'Photography'}
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/contact" 
                            className={isActive('/contact') ? 'active' : ''}
                        >
                            {translations.nav_button_contact?.[currentLanguage] || 'Contact'}
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {/* <Nav.Link as={Link} to="/resume">
                            {translations.nav_button_resume?.[currentLanguage] || 'Resume'}
                        </Nav.Link> */}
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