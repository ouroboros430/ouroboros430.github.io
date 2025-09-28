import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

function Skills({ language }) {
  const content = {
    en: {
      title: "Technical Skills",
      subtitle: "Technologies and tools I work with",
      categories: [
        {
          title: "Frontend Development",
          skills: [
            { name: "React", level: 90 },
            { name: "JavaScript/TypeScript", level: 85 },
            { name: "HTML/CSS", level: 90 },
            { name: "Bootstrap", level: 80 },
            { name: "Vue.js", level: 70 }
          ]
        },
        {
          title: "Backend Development",
          skills: [
            { name: "Node.js", level: 85 },
            { name: "Python", level: 80 },
            { name: "Express.js", level: 80 },
            { name: "RESTful APIs", level: 85 },
            { name: "GraphQL", level: 70 }
          ]
        },
        {
          title: "Database & Cloud",
          skills: [
            { name: "MongoDB", level: 80 },
            { name: "PostgreSQL", level: 75 },
            { name: "AWS", level: 70 },
            { name: "Firebase", level: 75 },
            { name: "Docker", level: 65 }
          ]
        },
        {
          title: "Tools & Others",
          skills: [
            { name: "Git/GitHub", level: 85 },
            { name: "VS Code", level: 90 },
            { name: "Figma", level: 70 },
            { name: "Agile/Scrum", level: 80 },
            { name: "CI/CD", level: 65 }
          ]
        }
      ]
    },
    zh: {
      title: "技术技能",
      subtitle: "我使用的技术和工具",
      categories: [
        {
          title: "前端开发",
          skills: [
            { name: "React", level: 90 },
            { name: "JavaScript/TypeScript", level: 85 },
            { name: "HTML/CSS", level: 90 },
            { name: "Bootstrap", level: 80 },
            { name: "Vue.js", level: 70 }
          ]
        },
        {
          title: "后端开发",
          skills: [
            { name: "Node.js", level: 85 },
            { name: "Python", level: 80 },
            { name: "Express.js", level: 80 },
            { name: "RESTful APIs", level: 85 },
            { name: "GraphQL", level: 70 }
          ]
        },
        {
          title: "数据库与云服务",
          skills: [
            { name: "MongoDB", level: 80 },
            { name: "PostgreSQL", level: 75 },
            { name: "AWS", level: 70 },
            { name: "Firebase", level: 75 },
            { name: "Docker", level: 65 }
          ]
        },
        {
          title: "工具与其他",
          skills: [
            { name: "Git/GitHub", level: 85 },
            { name: "VS Code", level: 90 },
            { name: "Figma", level: 70 },
            { name: "敏捷开发", level: 80 },
            { name: "CI/CD", level: 65 }
          ]
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
        {currentContent.categories.map((category, categoryIndex) => (
          <Col lg={6} key={categoryIndex} className="mb-4">
            <div className="skills-category">
              <h3 className="h4 mb-3 text-primary">{category.title}</h3>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="fw-medium">{skill.name}</span>
                    <span className="text-muted">{skill.level}%</span>
                  </div>
                  <ProgressBar 
                    now={skill.level} 
                    variant="primary"
                    style={{ height: '8px' }}
                  />
                </div>
              ))}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;