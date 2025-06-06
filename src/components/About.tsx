import { BookOpen, Code, Palette, Trophy } from 'lucide-react';
import { useTheme } from '../contexts/useTheme';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className={`leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              As a final-year B.Tech Computer Science student at Brainware University, I'm deeply passionate
              about exploring the intersections of artificial intelligence, machine learning, and web development.
              My academic journey has been marked by a constant drive to learn and innovate, particularly in
              the realms of AI & ML.
            </p>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Beyond the classroom, I'm an enthusiastic participant in hackathons and technical competitions,
              where I've had the opportunity to apply my skills to real-world challenges. I also have a creative
              side, expressing myself through abstract art creation when I'm not coding.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className={`p-6 rounded-lg hover-pop ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
              <BookOpen className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>B.Tech in Computer Science</p>
            </div>
            <div className={`p-6 rounded-lg hover-pop ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
              <Code className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Development</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Full-stack & ML Engineer</p>
            </div>
            <div className={`p-6 rounded-lg hover-pop ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
              <Trophy className="h-8 w-8 text-green-400 mb-4" />
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Competitions</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Hackathon & Competitive Coding Enthusiast</p>
            </div>
            <div className={`p-6 rounded-lg hover-pop ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
              <Palette className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Creativity</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Abstract Artist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;