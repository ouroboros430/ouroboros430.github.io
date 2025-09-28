import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Resume({ language }) {
  const content = {
    en: {
      title: "Resume",
      subtitle: "Download my latest resume",
      description: "Get a comprehensive overview of my professional experience, skills, and achievements.",
      downloadText: "Download PDF",
      viewText: "View Online",
      lastUpdated: "Last updated: December 2024"
    },
    zh: {
      title: "简历",
      subtitle: "下载我的最新简历",
      description: "全面了解我的专业经验、技能和成就。",
      downloadText: "下载PDF",
      viewText: "在线查看",
      lastUpdated: "最后更新：2024年12月"
    }
  };

  const currentContent = content[language] || content.en;

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <div className="resume-section">
            <div className="mb-4">
              <span style={{ fontSize: '4rem' }}>📄</span>
            </div>
            
            <h1 className="display-5 fw-bold mb-3">{currentContent.title}</h1>
            <p className="lead text-muted mb-4">{currentContent.subtitle}</p>
            <p className="text-muted mb-4">{currentContent.description}</p>
            
            <div className="d-flex gap-3 justify-content-center mb-4">
              <Button variant="primary" size="lg">
                {currentContent.downloadText}
              </Button>
              <Button variant="outline-primary" size="lg">
                {currentContent.viewText}
              </Button>
            </div>
            
            <p className="small text-muted">{currentContent.lastUpdated}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;