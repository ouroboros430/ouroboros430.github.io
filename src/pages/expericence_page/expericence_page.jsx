import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './expericence_page.css';
import translations from './configs/Language.json';

function Experience({ language }) {

  const content = translations;

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <h1 className="display-5 fw-bold mb-3">{content.title[language] || content.title.default}</h1>
          <p className="lead text-muted">{content.subtitle[language] || content.subtitle.default}</p>
        </Col>
      </Row>

      {/* Professional Experience Section */}
      <Row className="justify-content-center mb-5">
        <Col lg={10}>
          <h2 className="h3 mb-4 text-start">{content.workTitle[language] || content.workTitle.default}</h2>
          {content.experiences.map((exp, index) => (
            <Card key={index} className="mb-4 shadow-sm">
              <Card.Body>
                <Row className="mb-2">
                  <Col lg={9} md={8} sm={12}>
                    <Card.Title className="h4">{exp.title[language] || exp.title.default}</Card.Title>
                  </Col>
                  <Col lg={3} md={4} sm={12} className="text-lg-end text-md-end text-sm-start">
                    <span className="badge fs-6 company-badge">{exp.period[language] || exp.period.default}</span>
                  </Col>
                </Row>
                <Card.Subtitle className="mb-2 company-subtitle">{exp.company[language] || exp.company.default}</Card.Subtitle>
                <Card.Text>
                  {Array.isArray(exp.description) ? (
                    <ul className="mb-3">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item[language] || item.default}</li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mb-3">{exp.description[language] || exp.description.default}</div>
                  )}
                  {exp.skills && (
                    <div className="mt-3">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="badge bg-primary me-2 mb-1">
                          {skill[language] || skill.default}
                        </span>
                      ))}
                    </div>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>

      {/* Education Section */}
      <Row className="justify-content-center">
        <Col lg={10}>
          <h2 className="h3 mb-4 text-start">{content.educationTitle[language] || content.educationTitle.default}</h2>
          {content.education.map((edu, index) => (
            <Card key={index} className="mb-4 shadow-sm">
              <Card.Body>
                <Row className="mb-2">
                  <Col lg={9} md={8} sm={12}>
                    <Card.Title className="h4">{edu.title[language] || edu.title.default}</Card.Title>
                  </Col>
                  <Col lg={3} md={4} sm={12} className="text-lg-end text-md-end text-sm-start">
                    <span className="badge bg-info fs-6">{edu.period[language] || edu.period.default}</span>
                  </Col>
                </Row>
                <Card.Subtitle className="mb-2 text-success">{edu.school[language] || edu.school.default}</Card.Subtitle>
                {edu.major && (
                  <div className="mb-2">
                    <strong>{edu.major[language] || edu.major.default}</strong>
                  </div>
                )}
                <Card.Text>
                  {Array.isArray(edu.description) ? (
                    <ul className="mb-3">
                      {edu.description.map((item, idx) => (
                        <li key={idx}>{item[language] || item.default}</li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mb-3">{edu.description[language] || edu.description.default}</div>
                  )}
                  {edu.skills && (
                    <div className="mt-3">
                      {edu.skills.map((skill, idx) => (
                        <span key={idx} className="badge bg-success me-2 mb-1">
                          {skill[language] || skill.default}
                        </span>
                      ))}
                    </div>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;