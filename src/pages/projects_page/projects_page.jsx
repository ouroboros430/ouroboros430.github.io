import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import projectsData from './configs/Language.json';

function Projects({ language }) {
  const content = projectsData;

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <h1 className="display-5 fw-bold mb-3">{content.title[language] || content.title.default}</h1>
          <p className="lead text-muted">{content.subtitle[language] || content.subtitle.default}</p>
        </Col>
      </Row>
      
      <Row>
        {content.projects.map((project, index) => (
          <Col lg={4} md={6} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <Card.Title className="h5">{project.title[language] || project.title.default}</Card.Title>
                  <Badge 
                    bg={project.status === 'Completed' ? 'success' : project.status === 'Active' ? 'primary' : 'warning'}
                    className="ms-2"
                  >
                    {content.statuses[project.status] ? 
                      (content.statuses[project.status][language] || content.statuses[project.status].default) : 
                      project.status
                    }
                  </Badge>
                </div>
                
                <Badge bg="secondary" className="mb-2 align-self-start">
                  {content.categories[project.category] ? 
                    (content.categories[project.category][language] || content.categories[project.category].default) : 
                    project.category
                  }
                </Badge>
                
                <Card.Text className="flex-grow-1">
                  {project.description[language] || project.description.default}
                </Card.Text>
                
                <div className="mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} bg="primary" className="me-1 mb-1">
                      {content.technologies[tech] ? 
                        (content.technologies[tech][language] || content.technologies[tech].default) : 
                        tech
                      }
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-auto">
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      className="me-2"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content.buttons.demo[language] || content.buttons.demo.default}
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content.buttons.code[language] || content.buttons.code.default}
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;