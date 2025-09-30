import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import Navigator from './components/Navigator/Navigator.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/home_page/home_page.jsx'
import Experience from './pages/expericence_page/expericence_page.jsx'
import Projects from './pages/projects_page/projects_page.jsx'
import Skills from './pages/skills_page/skills_page.jsx'
import Blog from './pages/blog_page/blog_page.jsx'
import Photography from './pages/photography_page/photography_page.jsx'
import Contact from './pages/contact_page/contact_page.jsx'
import Resume from './pages/resume_pages/resume_page.jsx'
import configs from "./configs/configs.json"


function App() {
  // 初始化时考虑用户之前的选择
  const getInitialLanguage = () => {
    // 优先级：localStorage > 配置文件 > 'en'
    const savedLanguage = localStorage.getItem('preferred_language');
    return savedLanguage || configs?.default_language || 'en';
  };
  
  const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage());
  
  console.log('App.jsx is rendering with language:', currentLanguage);
  
  const handleLanguageChange = (newLanguage) => {
    setCurrentLanguage(newLanguage);
    console.log('Language changed to:', newLanguage);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigator 
          language={currentLanguage} 
          onLanguageChange={handleLanguageChange}
        />
        
        <main className="flex-grow-1 bg-light">
          <Routes>
            <Route path="/" element={<Home language={currentLanguage} />} />
            <Route path="/experience" element={<Experience language={currentLanguage} />} />
            <Route path="/projects" element={<Projects language={currentLanguage} />} />
            <Route path="/skills" element={<Skills language={currentLanguage} />} />
            <Route path="/blog" element={<Blog language={currentLanguage} />} />
            <Route path="/photography" element={<Photography language={currentLanguage} />} />
            <Route path="/contact" element={<Contact language={currentLanguage} />} />
            <Route path="/resume" element={<Resume language={currentLanguage} />} />
          </Routes>
        </main>
        
        <Footer language={currentLanguage} />
      </div>
    </Router>
  )
}

export default App

