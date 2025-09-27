import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigator from './components/Navigator/Navigator.jsx'
import Footer from './components/Footer/Footer.jsx'
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
    <div className="d-flex flex-column min-vh-100">
      <Navigator 
        language={currentLanguage} 
        onLanguageChange={handleLanguageChange}
      />
      
      {/* Main content area - add your page content here */}
      <main className="flex-grow-1">
        {/* Your page content will go here */}
        <div className="container mt-4">
          <h1>Welcome to My Portfolio</h1>
          <p>This is where your main content will go.</p>
        </div>
      </main>
      
      <Footer language={currentLanguage} />
    </div>
  )
}

export default App

