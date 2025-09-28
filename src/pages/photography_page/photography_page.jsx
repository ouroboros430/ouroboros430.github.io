import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Photography({ language }) {
  const content = {
    en: {
      title: "Photography Portfolio",
      subtitle: "Capturing moments through my lens",
      categories: [
        {
          title: "Landscape",
          description: "Natural beauty from around the world"
        },
        {
          title: "Street Photography",
          description: "Life and culture in urban environments"
        },
        {
          title: "Portrait",
          description: "Capturing human emotions and expressions"
        },
        {
          title: "Architecture",
          description: "Modern and historical structures"
        }
      ],
      comingSoon: "Photography gallery coming soon! I'm currently curating my best shots to showcase here."
    },
    zh: {
      title: "摄影作品集",
      subtitle: "通过镜头捕捉美好瞬间",
      categories: [
        {
          title: "风景摄影",
          description: "来自世界各地的自然美景"
        },
        {
          title: "街头摄影",
          description: "城市环境中的生活与文化"
        },
        {
          title: "人像摄影",
          description: "捕捉人类的情感与表情"
        },
        {
          title: "建筑摄影",
          description: "现代与历史建筑结构"
        }
      ],
      comingSoon: "摄影画廊即将上线！我正在精心挑选最佳作品在此展示。"
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
      
      <Row className="justify-content-center mb-5">
        {currentContent.categories.map((category, index) => (
          <Col lg={6} md={6} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-3">
                  <div 
                    className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: '80px', height: '80px' }}
                  >
                    📷
                  </div>
                </div>
                <Card.Title className="h4">{category.title}</Card.Title>
                <Card.Text className="text-muted">{category.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <div className="bg-light rounded p-4">
            <p className="mb-0 text-muted">{currentContent.comingSoon}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Photography;