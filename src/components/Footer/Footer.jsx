import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Link } from 'react-router-dom';
import translations from './configs/Language.json';

function Footer(Props) {
    const currentYear = new Date().getFullYear();
    const currentLanguage = Props.language
    const emailAddress= "hu.jiaming@hotmail.com"


    return (
        <footer className="footer">
            <Container>
                <Row>
                    {/* Quick Links */}
                    <Col md={3}>
                        <h5 className="footer-heading">
                            {translations.quickLinks?.[currentLanguage] || "Quick Links"}
                        </h5>
                        <div className="footer-list">
                            <Link to="/" className="footer-item">{translations.home?.[currentLanguage] || 'Home'}</Link>
                            <Link to="/projects" className="footer-item">{translations.projects?.[currentLanguage] || 'Projects'}</Link>
                            <Link to="/experience" className="footer-item">{translations.experience?.[currentLanguage] || 'Experience'}</Link>
                            <Link to="/skills" className="footer-item">{translations.skills?.[currentLanguage] || 'Skills'}</Link>
                            <Link to="/photography" className="footer-item">{translations.photography?.[currentLanguage] || 'Photography'}</Link>
                            {/* <Link to="/blog" className="footer-item">{translations.blog?.[currentLanguage] || 'Blog'}</Link> */}
                        </div>
                    </Col>

                    {/* Contact Info */}
                    <Col md={3}>
                        <h5 className="footer-heading">
                            {translations.contact?.[currentLanguage] || "Contact"}
                        </h5>
                        <div>
                            <p>
                                <i className="fas fa-envelope me-2"></i>
                                <a href={`mailto:${emailAddress}`} className="footer-item">
                                    {emailAddress}
                                </a>
                            </p>
                            <p>
                                <i className="fas fa-map-marker-alt me-2"></i>
                                {translations.location[currentLanguage]}
                            </p>
                        </div>
                    </Col>

                    {/* Social Links */}
                    <Col md={3}>
                        <h5 className="footer-heading">
                            {translations.followMe[currentLanguage]}
                        </h5>
                        <div className="footer-list">
                            <a 
                                href="https://github.com/ouroboros430" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="footer-item"
                            >
                                <i className="fab fa-github"></i> {translations.github[currentLanguage]}
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/jiaming-hu-85aa98128/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="footer-item"
                            >
                                <i className="fab fa-linkedin"></i> {translations.linkedin[currentLanguage]}
                            </a>
                        </div>
                    </Col>

                    {/* About Me */}
                    <Col md={3}>
                        <h5 className="footer-heading">HU Jiaming</h5>
                        <p className="footer-text">
                            {translations.description[currentLanguage]}
                        </p>
                    </Col>
                </Row>

                <hr className="footer-divider" />
                <Row>
                    <Col className="text-center">
                        <p className="footer-text mb-0">
                            © {currentYear} {translations.copyright[currentLanguage]}
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
