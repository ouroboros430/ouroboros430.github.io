import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Contact({ language }) {
  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Let's discuss opportunities and collaborate on exciting projects",
      description: "I'm always open to new opportunities and interesting projects. Whether you have a question, want to discuss a potential collaboration, or just want to say hello, I'd love to hear from you!",
      contactMethods: [
        {
          icon: "📧",
          title: "Email",
          value: "your.email@example.com",
          action: "Send Email"
        },
        {
          icon: "💼",
          title: "LinkedIn",
          value: "Connect with me professionally",
          action: "View Profile"
        },
        {
          icon: "🐙",
          title: "GitHub",
          value: "Check out my code",
          action: "View Projects"
        },
        {
          icon: "🐦",
          title: "Twitter",
          value: "Follow my tech journey",
          action: "Follow Me"
        }
      ],
      cta: "Ready to start a conversation?"
    },
    zh: {
      title: "联系我",
      subtitle: "让我们讨论机会并在精彩的项目上合作",
      description: "我始终对新机会和有趣的项目持开放态度。无论您有问题、想讨论潜在的合作，还是只是想打个招呼，我都很乐意收到您的来信！",
      contactMethods: [
        {
          icon: "📧",
          title: "邮箱",
          value: "your.email@example.com",
          action: "发送邮件"
        },
        {
          icon: "💼",
          title: "LinkedIn",
          value: "与我建立专业联系",
          action: "查看档案"
        },
        {
          icon: "🐙",
          title: "GitHub",
          value: "查看我的代码",
          action: "查看项目"
        },
        {
          icon: "🐦",
          title: "Twitter",
          value: "关注我的技术之旅",
          action: "关注我"
        }
      ],
      cta: "准备开始对话了吗？"
    }
  };

  const currentContent = content[language] || content.en;

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <h1 className="display-5 fw-bold mb-3">{currentContent.title}</h1>
          <p className="lead text-muted mb-4">{currentContent.subtitle}</p>
          <p className="text-muted">{currentContent.description}</p>
        </Col>
      </Row>
      
      <Row className="justify-content-center mb-5">
        {currentContent.contactMethods.map((method, index) => (
          <Col lg={6} md={6} key={index} className="mb-4">
            <Card className="h-100 shadow-sm text-center">
              <Card.Body>
                <div className="mb-3">
                  <span style={{ fontSize: '3rem' }}>{method.icon}</span>
                </div>
                <Card.Title className="h4">{method.title}</Card.Title>
                <Card.Text className="text-muted mb-3">{method.value}</Card.Text>
                <Button variant="outline-primary">{method.action}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <div className="bg-primary text-white rounded p-4">
            <h3 className="h4 mb-3">{currentContent.cta}</h3>
            <Button variant="light" size="lg">
              {language === 'zh' ? '立即联系' : 'Contact Now'}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;