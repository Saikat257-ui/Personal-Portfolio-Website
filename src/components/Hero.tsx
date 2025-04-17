import { useState, useEffect, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/useTheme';

const Hero = () => {
  const { darkMode } = useTheme();
  const roles = useMemo(() => ['Saikat Patra', 'a Full-stack developer', 'a UI designer'], []);
  const [currentRole, setCurrentRole] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingInterval = 100; // Speed of typing
    const deletingInterval = 50; // Speed of deleting
    const pauseTime = 2000; // Time to pause after typing

    const type = () => {
      const currentText = roles[currentIndex];
      
      if (!isDeleting) {
        setCurrentRole(currentText.substring(0, currentRole.length + 1));
        
        if (currentRole === currentText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        setCurrentRole(currentText.substring(0, currentRole.length - 1));
        
        if (currentRole === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deletingInterval : typingInterval);
    return () => clearTimeout(timer);
  }, [currentRole, currentIndex, isDeleting, roles]);

  return (
    <section id="home" className={`pt-20 md:pt-32 pb-20 ${darkMode ? 'bg-gray-800' : 'gradient-bg'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Hi, I'm {' '}
              <span className="text-blue-400 min-h-[1.5em] inline-block">
                {currentRole}<span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A passionate software developer specializing in web applications and deep learning.
              Currently pursuing B.Tech in Computer Science at Brainware University.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className={`${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} 
                  text-white px-6 py-3 rounded-lg flex items-center button-pop transition-colors duration-300`}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#projects"
                className={`border-2 px-6 py-3 rounded-lg button-pop transition-colors duration-300
                  ${darkMode 
                    ? 'border-blue-400 text-blue-400 hover:bg-blue-900/50' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&h=600"
              alt="Profile"
              className={`rounded-full w-64 h-64 object-cover hero-rainbow-glow ${darkMode ? 'shadow-blue-500/20' : 'shadow-2xl'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;