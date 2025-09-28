import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects({ language }) {
  const content = {
    en: {
      title: "My Projects",
      subtitle: "Showcasing my technical skills and creativity",
      projects: [
        {
          title: "E-commerce Platform",
          description: "A full-featured online shopping platform built with React, Node.js, and MongoDB.",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          demoUrl: "#",
          githubUrl: "#"
        },
        {
          title: "Portfolio Website",
          description: "This responsive portfolio website showcasing my work and skills.",
          technologies: ["React", "Bootstrap", "Vite"],
          demoUrl: "#",
          githubUrl: "#"
        },
        {
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates.",
          technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
          demoUrl: "#",
          githubUrl: "#"
        }
      ]
    },
    zh: {
      title: "我的项目",
      subtitle: "展示我的技术技能和创造力",
      projects: [
        {
          title: "电商平台",
          description: "使用React、Node.js和MongoDB构建的全功能在线购物平台。",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          demoUrl: "#",
          githubUrl: "#"
        },
        {
          title: "作品集网站",
          description: "这个响应式作品集网站展示了我的工作和技能。",
          technologies: ["React", "Bootstrap", "Vite"],
          demoUrl: "#",
          githubUrl: "#"
        },
        {
          title: "任务管理应用",
          description: "具有实时更新功能的协作任务管理应用程序。",
          technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
          demoUrl: "#",
          githubUrl: "#"
        }
      ]
    }
  };

  const currentContent = content[language] || content.en;

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <h1 className="display-5 fw-bold mb-3">{currentContent.title}</h1>
          <p className="lead text-muted">{currentContent.subtitle}</p>
        </Col>
      </Row>
      
      <Row>
        {currentContent.projects.map((project, index) => (
          <Col lg={4} md={6} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="h4">{project.title}</Card.Title>
                <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                
                <div className="mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="badge bg-primary me-1 mb-1">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Button variant="outline-primary" size="sm" className="me-2">
                    {language === 'zh' ? '演示' : 'Demo'}
                  </Button>
                  <Button variant="outline-secondary" size="sm">
                    {language === 'zh' ? '代码' : 'Code'}
                  </Button>
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