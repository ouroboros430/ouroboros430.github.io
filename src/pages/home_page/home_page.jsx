import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './home_page.css';
import translations from './configs/Language.json';

function Home({ language }) {
  return (
    <Container-fluid className="py-5">
      <Row className="justify-content-cent</div>er text-center">
        <Col>
          <div>
            <h1 className="display-4 fw-bold mb-3 mt-2">HU Jiaming</h1>
            <h2 className="h4 text-muted mb-4">{translations.softwareEngineer[language]}</h2>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} className="text-start introduction justify-content-center">
          <div className='introduction'>
            <img
              src='/hu_jiaming.JPG'
              alt='HU Jiaming'
            />
            <div className='text'>
              <h1 className="display-5">{translations.introductionContent[language]}</h1>
              <div className='subtext'>
                <span className="me-3 display-6">
                  <i className="fa-solid fa-gears text-primary"></i> DevOps
                </span>
                <span className="me-3 display-6">
                  <i className="fa-brands fa-docker text-info"></i> Kubernetes
                </span>
                <span className="me-3 display-6">
                  <i className="fa-solid fa-robot text-warning"></i> GenAI
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <div className="mb-3">
                    <img 
                      src="/Synopsys.svg" 
                      alt="Synopsys" 
                      className="card-logo"
                    />
                  </div>
                  <Card.Title>{translations.company_name[language]}</Card.Title>
                  <Card.Text>
                    <strong>{translations.devops_engineer[language]}</strong>
                    <br />
                    <small className="text-muted">{translations.dev_tools[language]} • {translations.dev_ops[language]} • {translations.gen_ai[language]} • {translations.microservices[language]}</small>
                    <br />
                    <small className="text-muted">2021-{translations.now[language]}</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Text>
                    <div className="mb-1">
                      <div>
                        <img 
                          src="/paris-saclay.svg" 
                          alt={translations.paris_saclay_university[language]}
                          className="card-logo mb-2"
                        />
                      </div>
                      <Card.Title className="mb-3">{translations.master_degree[language]}</Card.Title>
                      <strong>{translations.seti[language]}</strong>
                      <br />
                      <small className="text-muted">{translations.paris_saclay_university[language]}</small>
                      <br />
                      <small className="text-muted">2017-2018</small>
                      <br />
                    </div>
                    <div className='mb-1'>
                      <div>
                        <img 
                          src="/polytech_paris-saclay.svg" 
                          alt={translations.polytech_paris_saclay[language]}
                          className="card-logo mb-2"
                        />
                      </div>
                      <Card.Title className="mb-3">{translations.engineer_degree[language]}</Card.Title>
                      <strong>{translations.ece[language]}</strong>
                      <br />
                      <small className="text-muted">{translations.polytech_paris_saclay[language]}</small>
                    </div>
                    <small className="text-muted">2015-2018</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <div className="mb-3">
                    <img 
                      src="/xidian.svg" 
                      alt={translations.xidian_unibersity[language]}
                      className="card-logo"
                    />
                  </div>
                  <Card.Title>{translations.bachelor_degree[language]}</Card.Title>
                  <Card.Text>
                    <strong>{translations.cyber_security[language]}</strong>
                    <br />
                    <small className="text-muted">{translations.xidian_unibersity[language]}</small>
                    <br />
                    <small className="text-muted">2012-2016</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container-fluid>
  );
}

export default Home;