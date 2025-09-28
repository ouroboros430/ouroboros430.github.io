import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Blog({ language }) {
  const content = {
    en: {
      title: "Blog & Articles",
      subtitle: "Sharing knowledge and insights from my tech journey",
      posts: [
        {
          title: "Building Scalable React Applications",
          excerpt: "Best practices and patterns for creating maintainable React apps that can grow with your team.",
          date: "December 15, 2024",
          readTime: "5 min read",
          tags: ["React", "JavaScript", "Best Practices"]
        },
        {
          title: "Modern CSS Techniques for Better UX",
          excerpt: "Exploring CSS Grid, Flexbox, and modern layout techniques to create beautiful user experiences.",
          date: "November 20, 2024",
          readTime: "7 min read",
          tags: ["CSS", "UI/UX", "Frontend"]
        },
        {
          title: "API Design Principles",
          excerpt: "Key principles for designing RESTful APIs that are intuitive, scalable, and developer-friendly.",
          date: "October 5, 2024",
          readTime: "6 min read",
          tags: ["API", "Backend", "Architecture"]
        }
      ]
    },
    zh: {
      title: "博客与文章",
      subtitle: "分享我在技术路上的知识与见解",
      posts: [
        {
          title: "构建可扩展的React应用程序",
          excerpt: "创建可维护的React应用程序的最佳实践和模式，让你的应用程序能够随着团队的成长而发展。",
          date: "2024年12月15日",
          readTime: "5分钟阅读",
          tags: ["React", "JavaScript", "最佳实践"]
        },
        {
          title: "现代CSS技术提升用户体验",
          excerpt: "探索CSS Grid、Flexbox和现代布局技术，创造美丽的用户体验。",
          date: "2024年11月20日",
          readTime: "7分钟阅读",
          tags: ["CSS", "UI/UX", "前端"]
        },
        {
          title: "API设计原则",
          excerpt: "设计直观、可扩展且对开发者友好的RESTful API的关键原则。",
          date: "2024年10月5日",
          readTime: "6分钟阅读",
          tags: ["API", "后端", "架构"]
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
          {currentContent.posts.map((post, index) => (
            <Card key={index} className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title className="h4 mb-2">{post.title}</Card.Title>
                <div className="text-muted small mb-2">
                  {post.date} • {post.readTime}
                </div>
                <Card.Text className="mb-3">{post.excerpt}</Card.Text>
                <div>
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="badge bg-light text-dark me-2 mb-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
      
      <Row className="justify-content-center mt-4">
        <Col lg={8} className="text-center">
          <p className="text-muted">
            {language === 'zh' ? '更多文章即将发布，敬请期待！' : 'More articles coming soon. Stay tuned!'}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;