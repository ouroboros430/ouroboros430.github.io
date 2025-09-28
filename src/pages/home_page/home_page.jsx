import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home({ language }) {
  const content = {
    en: {
      title: "Welcome to My Portfolio",
      subtitle: "Full-Stack Developer & Tech Enthusiast",
      description: "I'm passionate about creating innovative solutions and bringing ideas to life through code. Explore my work, experience, and creative projects.",
      cta: "Let's build something amazing together!"
    },
    zh: {
      title: "欢迎来到我的作品集",
      subtitle: "全栈开发工程师 & 技术爱好者",
      description: "我热衷于创造创新的解决方案，通过代码将想法变为现实。探索我的作品、经验和创意项目。",
      cta: "让我们一起创造令人惊叹的作品！"
    }
  };

  const currentContent = content[language] || content.en;

  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <div className="hero-section">
            <h1 className="display-4 fw-bold mb-3">{currentContent.title}</h1>
            <h2 className="h4 text-muted mb-4">{currentContent.subtitle}</h2>
            <p className="lead mb-4">{currentContent.description}</p>
            <div className="hero-cta">
              <p className="h5 text-primary">{currentContent.cta}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;