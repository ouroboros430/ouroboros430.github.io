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

    return (
        <div className='container-fluid p-0'>
            <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
                <Navbar.Brand href="#home" className='ms-2'>HU Jiaming</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">{translations.nav_button_home?.[currentLanguage] || 'Home'}</Nav.Link>
                        <Nav.Link href="#portfolio">{translations.nav_button_portfolio?.[currentLanguage] || 'Portfolio'}</Nav.Link>
                        <Nav.Link href="#projects">{translations.nav_button_projects?.[currentLanguage] || 'Projects'}</Nav.Link>
                        <Nav.Link href="#blog">{translations.nav_button_blog?.[currentLanguage] || 'Blog'}</Nav.Link>
                        <Nav.Link href="#photography">{translations.nav_button_photography?.[currentLanguage] || 'Photography'}</Nav.Link>
                        <Nav.Link href="#skills">{translations.nav_button_skills?.[currentLanguage] || 'Skills'}</Nav.Link>
                        <Nav.Link href="#contact">{translations.nav_button_contact?.[currentLanguage] || 'Contact'}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#resume">{translations.nav_button_resume?.[currentLanguage] || 'Resume'}</Nav.Link>
                        <NavDropdown
                            title={translations.nav_button_language?.[currentLanguage] || 'Language'}
                            id="language-nav-dropdown"
                            drop="down"
                            align="end"
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