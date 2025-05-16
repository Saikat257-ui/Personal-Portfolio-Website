import { useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTheme } from './contexts/useTheme';

function AppContent() {
  const { darkMode } = useTheme();
  
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      section.classList.add('section-transition');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className={`${darkMode ? 'bg-black text-gray-300' : 'bg-gray-900 text-white'} py-8`}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/Saikat257-ui" className="hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>© 2024 Saikat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;