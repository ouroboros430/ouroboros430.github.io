import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import contactData from './configs/Language.json';

function Contact({ language }) {
  const content = contactData;

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <h1 className="display-5 fw-bold mb-3">{content.title[language] || content.title.default}</h1>
          <p className="lead text-muted mb-4">{content.subtitle[language] || content.subtitle.default}</p>
          <p className="text-muted">{content.description[language] || content.description.default}</p>
        </Col>
      </Row>
      
      <Row className="justify-content-center mb-5">
        {content.contactMethods.map((method, index) => (
          <Col lg={6} md={6} key={index} className="mb-4">
            <Card className="h-100 shadow-sm text-center">
              <Card.Body>
                <div className="mb-3">
                  {method.icon.endsWith('.svg') ? (
                    <img 
                      src={method.icon} 
                      alt={method.title[language] || method.title.default}
                      style={{ width: '48px', height: '48px' }}
                    />
                  ) : (
                    <span style={{ fontSize: '3rem' }}>{method.icon}</span>
                  )}
                </div>
                <Card.Title className="h4">{method.title[language] || method.title.default}</Card.Title>
                <Card.Text className="text-muted mb-3">{method.value[language] || method.value.default}</Card.Text>
                <Button 
                  variant="outline-primary"
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {method.action[language] || method.action.default}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <div className="bg-primary text-white rounded p-4">
            <h3 className="h4 mb-3">{content.cta[language] || content.cta.default}</h3>
            <Button 
              variant="light" 
              size="lg"
              href="mailto:hu.jiaming@hotmail.com"
            >
              {content.contactNow[language] || content.contactNow.default}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;