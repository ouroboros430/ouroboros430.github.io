import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Pagination, Modal, Button, Badge } from 'react-bootstrap';
import './photography_page.css';
import photosData from './configs/photos.json';

function Photography({ language }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const photosPerPage = 12;

  // 从JSON文件获取图片数据
  const photos = photosData.photos;

  const content = {
    en: {
      title: "Photography Portfolio",
      subtitle: "Capturing moments through my lens",
      totalPhotos: "photos",
      page: "Page",
      of: "of",
      close: "Close",
      previous: "Previous",
      next: "Next",
      all: "All",
      filter: "Filter by category:",
      camera: "Camera:",
      lens: "Lens:",
      settings: "Settings:",
      date: "Date:"
    },
    zh: {
      title: "摄影作品集",
      subtitle: "通过镜头捕捉美好瞬间",
      totalPhotos: "张照片",
      page: "第",
      of: "页，共",
      close: "关闭",
      previous: "上一页",
      next: "下一页",
      all: "全部",
      filter: "按类别筛选:",
      camera: "相机:",
      lens: "镜头:",
      settings: "设置:",
      date: "日期:"
    },
    fr: {
      title: "Portfolio Photographique",
      subtitle: "Capturer des moments à travers mon objectif",
      totalPhotos: "photos",
      page: "Page",
      of: "de",
      close: "Fermer",
      previous: "Précédent",
      next: "Suivant",
      all: "Tous",
      filter: "Filtrer par catégorie:",
      camera: "Appareil:",
      lens: "Objectif:",
      settings: "Réglages:",
      date: "Date:"
    }
  };

  const currentContent = content[language] || content.en;
  
  // 过滤照片
  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  // 计算分页数据
  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);
  const startIndex = (currentPage - 1) * photosPerPage;
  const currentPhotos = filteredPhotos.slice(startIndex, startIndex + photosPerPage);

  // 处理分类切换
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // 重置到第一页
  };

  // 处理图片点击
  const handleImageClick = (photo) => {
    setSelectedImage(photo);
    setShowModal(true);
  };

  // 处理分页
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showModal && selectedImage) {
        if (e.key === 'Escape') {
          setShowModal(false);
        } else if (e.key === 'ArrowLeft') {
          const currentIndex = filteredPhotos.findIndex(p => p.id === selectedImage.id);
          if (currentIndex > 0) {
            setSelectedImage(filteredPhotos[currentIndex - 1]);
          }
        } else if (e.key === 'ArrowRight') {
          const currentIndex = filteredPhotos.findIndex(p => p.id === selectedImage.id);
          if (currentIndex < filteredPhotos.length - 1) {
            setSelectedImage(filteredPhotos[currentIndex + 1]);
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showModal, selectedImage, filteredPhotos]);

  return (
    <Container className="py-5">
      {/* 标题部分 */}
      <Row className="justify-content-center mb-4">
        <Col lg={8} className="text-center">
          <h1 className="display-5 fw-bold mb-3">{currentContent.title}</h1>
          <p className="lead text-muted">{currentContent.subtitle}</p>
          <p className="text-muted">
            {filteredPhotos.length} {currentContent.totalPhotos}
          </p>
        </Col>
      </Row>

      {/* 分类过滤器 */}
      <Row className="justify-content-center mb-4">
        <Col lg={8}>
          <div className="text-center">
            <p className="mb-2 text-muted">{currentContent.filter}</p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <Badge 
                bg={selectedCategory === 'all' ? 'primary' : 'light'}
                text={selectedCategory === 'all' ? 'white' : 'dark'}
                className="p-2 cursor-pointer"
                style={{ cursor: 'pointer', fontSize: '0.9rem' }}
                onClick={() => handleCategoryChange('all')}
              >
                {currentContent.all}
              </Badge>
              {Object.keys(photosData.categories.default).map(category => (
                <Badge 
                  key={category}
                  bg={selectedCategory === category ? 'primary' : 'light'}
                  text={selectedCategory === category ? 'white' : 'dark'}
                  className="p-2 cursor-pointer"
                  style={{ cursor: 'pointer', fontSize: '0.9rem' }}
                  onClick={() => handleCategoryChange(category)}
                >
                  {photosData.categories[language]?.[category] || photosData.categories.default[category]}
                </Badge>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      
      {/* 图片网格 */}
      <Row className="mb-4">
        {currentPhotos.map((photo) => (
          <Col lg={3} md={4} sm={6} key={photo.id} className="mb-4">
            <Card 
              className="h-100 shadow-sm photo-card"
              style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
              onClick={() => handleImageClick(photo)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ paddingTop: '75%', position: 'relative', overflow: 'hidden' }}>
                <Card.Img 
                  variant="top" 
                  src={photo.thumbnail}
                  alt={photo.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <Card.Body className="p-3">
                <Card.Title className="h6 mb-1">
                  {photo.title[language] || photo.title.default}
                </Card.Title>
                <Card.Text className="text-muted small">
                  {photo.description[language] || photo.description.default}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 分页 */}
      {totalPages > 1 && (
        <Row className="justify-content-center">
          <Col xs="auto">
            <Pagination>
              <Pagination.First 
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              />
              <Pagination.Prev 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
              
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                if (
                  page === 1 || 
                  page === totalPages || 
                  (page >= currentPage - 2 && page <= currentPage + 2)
                ) {
                  return (
                    <Pagination.Item
                      key={page}
                      active={page === currentPage}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Pagination.Item>
                  );
                } else if (page === currentPage - 3 || page === currentPage + 3) {
                  return <Pagination.Ellipsis key={page} />;
                }
                return null;
              })}

              <Pagination.Next 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
              <Pagination.Last 
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
            <div className="text-center mt-2 text-muted small">
              {currentContent.page} {currentPage} {currentContent.of} {totalPages}
            </div>
          </Col>
        </Row>
      )}

      {/* 图片弹窗 */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="photo-modal"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>
            {selectedImage?.title[language] || selectedImage?.title.default}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {selectedImage && (
            <div className="position-relative">
              <img 
                src={selectedImage.src}
                alt={selectedImage.title[language] || selectedImage.title.default}
                className="w-100"
                style={{ maxHeight: '70vh', objectFit: 'contain' }}
              />
              
              {/* 导航按钮 */}
              <Button
                variant="light"
                className="position-absolute top-50 start-0 translate-middle-y ms-3"
                style={{ opacity: 0.8 }}
                onClick={() => {
                  const currentIndex = filteredPhotos.findIndex(p => p.id === selectedImage.id);
                  if (currentIndex > 0) {
                    setSelectedImage(filteredPhotos[currentIndex - 1]);
                  }
                }}
                disabled={filteredPhotos.findIndex(p => p.id === selectedImage.id) === 0}
              >
                ‹
              </Button>
              
              <Button
                variant="light"
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ opacity: 0.8 }}
                onClick={() => {
                  const currentIndex = filteredPhotos.findIndex(p => p.id === selectedImage.id);
                  if (currentIndex < filteredPhotos.length - 1) {
                    setSelectedImage(filteredPhotos[currentIndex + 1]);
                  }
                }}
                disabled={filteredPhotos.findIndex(p => p.id === selectedImage.id) === filteredPhotos.length - 1}
              >
                ›
              </Button>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="border-0">
          <div className="w-100">
            <div className="mb-3">
              <p className="mb-2">
                {selectedImage?.description[language] || selectedImage?.description.default}
              </p>
              {selectedImage && (
                <Row className="small text-muted">
                  <Col md={6}>
                    <div><strong>{currentContent.camera}</strong> {selectedImage.camera}</div>
                    <div><strong>{currentContent.lens}</strong> {selectedImage.lens}</div>
                  </Col>
                  <Col md={6}>
                    <div><strong>{currentContent.settings}</strong> {selectedImage.settings}</div>
                    <div><strong>{currentContent.date}</strong> {selectedImage.date}</div>
                  </Col>
                </Row>
              )}
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">
                {selectedImage && filteredPhotos.findIndex(p => p.id === selectedImage.id) + 1} / {filteredPhotos.length}
              </small>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                {currentContent.close}
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Photography;