import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import translations from './configs/Language.json';

function Footer(Props) {
    const currentYear = new Date().getFullYear();
    const currentLanguage = Props.language
    const emailAddress= "hu.jiaming@hotmail.com"


    return (
        <footer className="py-3"  >
            <Container>
                <Row className="py-0">
                    {/* Quick Links */}
                    <Col md={3} className="mb-0">
                        <h5 className="footer-title mb-3">
                            {translations.quickLinks?.[currentLanguage] || "Quick Links"}
                        </h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#home" className="footer-link">{translations.home?.[currentLanguage] || 'Home'}</a></li>
                            <li><a href="#projects" className="footer-link">{translations.projects?.[currentLanguage] || 'Projects'}</a></li>
                            <li><a href="#experience" className="footer-link">{translations.experience?.[currentLanguage] || 'Experience'}</a></li>
                            <li><a href="#skills" className="footer-link">{translations.skills?.[currentLanguage] || 'Skills'}</a></li>
                            <li><a href="#photography" className="footer-link">{translations.photography?.[currentLanguage] || 'Photography'}</a></li>
                        </ul>
                    </Col>

                    {/* Contact Info */}
                    <Col md={3} className="mb-0">
                        <h5 className="footer-title mb-3">
                            {translations.contact?.[currentLanguage] || "Contact"}
                        </h5>
                        <div className="footer-contact">
                            <p className="mb-2">
                                <i className="fas fa-envelope me-2"></i>
                                <a href={`mailto:${emailAddress}`} className="footer-link">
                                    {emailAddress}
                                </a>
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-map-marker-alt me-2"></i>
                                {translations.location[currentLanguage]}
                            </p>
                        </div>
                    </Col>

                    {/* Social Links */}
                    <Col md={3} className="mb-0">
                        <h5 className="footer-title mb-3">
                            {translations.followMe[currentLanguage]}
                        </h5>
                        <div className="footer-social">
                            <a 
                                href="https://github.com/ouroboros430" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="footer-social-link me-3"
                            >
                                <i className="fab fa-github"></i> {translations.github[currentLanguage]}
                            </a>
                            <a 
                                href="#linkedin" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="footer-social-link me-3"
                            >
                                <i className="fab fa-linkedin"></i> {translations.linkedin[currentLanguage]}
                            </a>
                            <a 
                                href="#twitter" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="footer-social-link"
                            >
                                <i className="fab fa-twitter"></i> {translations.twitter[currentLanguage]}
                            </a>
                        </div>
                    </Col>

                    {/* About Me */}
                    <Col md={3} className="mb-0">
                        <h5 className="footer-title mb-3">HU Jiaming</h5>
                        <p className="footer-description">
                            {translations.description[currentLanguage]}
                        </p>
                    </Col>
                </Row>

                {/* Copyright */}
                <hr className="footer-divider mt-0" />
                <Row>
                    <Col className="text-center">
                        <p className="footer-copyright mb-0">
                            © {currentYear} {translations.copyright[currentLanguage]}
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
