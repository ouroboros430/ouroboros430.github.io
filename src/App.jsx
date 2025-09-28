import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navigator from './components/Navigator/Navigator.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Blog from './pages/Blog.jsx'
import Photography from './pages/Photography.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'
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

