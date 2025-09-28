import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer(Props) {
    const currentYear = new Date().getFullYear();
    const currentLanguage = Props.language
    
    // Footer translations
    const translations = {
        copyright: {
            en: `© ${currentYear} HU Jiaming. All rights reserved.`,
            zh: `© ${currentYear} 胡嘉明。保留所有权利。`
        },
        builtWith: {
            en: 'Built with React & Bootstrap',
            zh: '使用 React 和 Bootstrap 构建'
        },
        sections: {
            quickLinks: {
                en: 'Quick Links',
                zh: '快速链接'
            },
            contact: {
                en: 'Contact',
                zh: '联系方式'
            },
            followMe: {
                en: 'Follow Me',
                zh: '关注我'
            }
        },
        links: {
            home: { en: 'Home', zh: '首页' },
            about: { en: 'About', zh: '关于' },
            portfolio: { en: 'Portfolio', zh: '作品集' },
            blog: { en: 'Blog', zh: '博客' },
            contact: { en: 'Contact', zh: '联系' }
        },
        contactInfo: {
            email: 'hu.jiaming@example.com',
            location: {
                en: 'Location: Earth 🌍',
                zh: '位置：地球 🌍'
            }
        },
        socialLinks: {
            github: 'GitHub',
            linkedin: 'LinkedIn',
            twitter: 'Twitter'
        }
    };

    return (
        <footer className="py-3"  >
            <Container>
                <Row>
                    {/* Quick Links */}
                    <Col md={3} className="mb-4">
                        <h5 className="footer-title mb-3">
                            {translations.sections.quickLinks[currentLanguage]}
                        </h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#home" className="footer-link">{translations.links.home[currentLanguage]}</a></li>
                            <li><a href="#about" className="footer-link">{translations.links.about[currentLanguage]}</a></li>
                            <li><a href="#portfolio" className="footer-link">{translations.links.portfolio[currentLanguage]}</a></li>
                            <li><a href="#blog" className="footer-link">{translations.links.blog[currentLanguage]}</a></li>
                            <li><a href="#contact" className="footer-link">{translations.links.contact[currentLanguage]}</a></li>
                        </ul>
                    </Col>

                    {/* Contact Info */}
                    <Col md={3} className="mb-4">
                        <h5 className="footer-title mb-3">
                            {translations.sections.contact[currentLanguage]}
                        </h5>
                        <div className="footer-contact">
                            <p className="mb-2">
                                <i className="fas fa-envelope me-2"></i>
                                <a href={`mailto:${translations.contactInfo.email}`} className="footer-link">
                                    {translations.contactInfo.email}
                                </a>
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-map-marker-alt me-2"></i>
                                {translations.contactInfo.location[currentLanguage]}
                            </p>
                        </div>
                    </Col>

                    {/* Social Links */}
                    <Col md={3} className="mb-4">
                        <h5 className="footer-title mb-3">
                            {translations.sections.followMe[currentLanguage]}
                        </h5>
                        <div className="footer-social">
                            <a 
                                href="https://github.com/ouroboros430" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="footer-social-link me-3"
                            >
                                <i className="fab fa-github"></i> {translations.socialLinks.github}
                            </a>
                            <a 
                                href="#linkedin" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="footer-social-link me-3"
                            >
                                <i className="fab fa-linkedin"></i> {translations.socialLinks.linkedin}
                            </a>
                            <a 
                                href="#twitter" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="footer-social-link"
                            >
                                <i className="fab fa-twitter"></i> {translations.socialLinks.twitter}
                            </a>
                        </div>
                    </Col>

                    {/* About Me */}
                    <Col md={3} className="mb-4">
                        <h5 className="footer-title mb-3">HU Jiaming</h5>
                        <p className="footer-description">
                            {currentLanguage === 'en' 
                                ? "Passionate developer creating amazing web experiences with modern technologies."
                                : "热衷于使用现代技术创造出色网页体验的开发者。"
                            }
                        </p>
                        <p className="footer-built-with">
                            {translations.builtWith[currentLanguage]}
                        </p>
                    </Col>
                </Row>

                {/* Copyright */}
                <hr className="footer-divider my-4" />
                <Row>
                    <Col className="text-center">
                        <p className="footer-copyright mb-0">
                            © 2025
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
