import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Experience({ language }) {
  const content = {
    en: {
      title: "Professional Experience",
      subtitle: "My journey in tech industry",
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "Tech Company",
          period: "2023 - Present",
          description: "Leading development of scalable web applications and mentoring junior developers."
        },
        {
          title: "Full-Stack Developer",
          company: "Startup Inc.",
          period: "2021 - 2023",
          description: "Built end-to-end solutions using React, Node.js, and cloud technologies."
        },
        {
          title: "Frontend Developer",
          company: "Digital Agency",
          period: "2020 - 2021",
          description: "Created responsive and interactive user interfaces for various clients."
        }
      ]
    },
    zh: {
      title: "职业经历",
      subtitle: "我在科技行业的成长历程",
      experiences: [
        {
          title: "高级软件工程师",
          company: "科技公司",
          period: "2023 - 至今",
          description: "负责可扩展Web应用程序的开发，并指导初级开发人员。"
        },
        {
          title: "全栈开发工程师",
          company: "创业公司",
          period: "2021 - 2023",
          description: "使用React、Node.js和云技术构建端到端解决方案。"
        },
        {
          title: "前端开发工程师",
          company: "数字机构",
          period: "2020 - 2021",
          description: "为各种客户创建响应式和交互式用户界面。"
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
      
      <Row className="justify-content-center">
        <Col lg={10}>
          {currentContent.experiences.map((exp, index) => (
            <Card key={index} className="mb-4 shadow-sm">
              <Card.Body>
                <Row>
                  <Col md={8}>
                    <Card.Title className="h4">{exp.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-primary">{exp.company}</Card.Subtitle>
                    <Card.Text>{exp.description}</Card.Text>
                  </Col>
                  <Col md={4} className="text-md-end">
                    <span className="badge bg-secondary fs-6">{exp.period}</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;