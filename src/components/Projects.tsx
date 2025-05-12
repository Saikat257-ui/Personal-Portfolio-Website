import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/useTheme';

const Projects = () => {
  const { darkMode } = useTheme();
  const projects = [
    {
      title: 'TrackinInvestedStock',
      description: 'A comprehensive stock portfolio tracker built with the MERN stack, featuring real-time market data integration and advanced analytics.',
      tech: ['MongoDB', 'Express.js', 'React', 'Tailwind css', 'Spring Boot'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/Saikatp440/TrackinInvestedStock',
      live: '#'
    },
    {
      title: 'SmartDebugger',
      description: 'An AI-powered system that automatically detects and suggests fixes for common programming bugs using machine learning techniques.',
      tech: ['Python', 'TensorFlow', 'Pytorch', 'Transformer'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/Saikatp440/SmartDebugger',
      live: '#'
    },
    {
      title: 'CVScanPro',
      description: 'A web application that uses deep learning to analyze and shortlist resumes, providing feedback to job seekers on how to improve their chances of getting hired.',
      tech: ['Python', 'HTML', 'CSS', 'JavaScript', 'FastAPI'],
      image: 'https://plus.unsplash.com/premium_photo-1661288470388-c5006797bdff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/Saikatp440/CVScanPro'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden rainbow-glow-hover ${
                darkMode ? 'bg-gray-800 shadow-blue-500/5' : 'bg-white shadow-lg'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-400 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode 
                          ? 'bg-blue-900/30 text-blue-400' 
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className={`flex items-center transition-all duration-300 hover:scale-110 ${
                      darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className={`flex items-center transition-all duration-300 hover:scale-110 ${
                      darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;