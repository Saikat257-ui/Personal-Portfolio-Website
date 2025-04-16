import { Award, BookOpen, Code, Star, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/useTheme';

const Achievements = () => {
  const { darkMode } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (showModal) {
      setTimeout(() => setIsModalVisible(true), 10);
    }
  }, [showModal]);

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setShowModal(false), 300);
  };

  const achievements = [
    {
      icon: <Award className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
      title: 'Smart India Hackathon 2024',
      description: 'Participant in national-level hackathon',
      link: 'https://drive.google.com/file/d/1hE4AA8-az0Td8l37THNgfVLhZBqPrEaK/view?usp=sharing'
    },
    {
      icon: <Code className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
      title: 'Competitive Coding',
      description: 'Active on Unstop, Leetcode, and HackerRank'
    },
    {
      icon: <BookOpen className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
      title: 'INTEL Industrial Training',
      description: 'Completed intensive training program'
    },
    {
      icon: <Star className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
      title: 'Penetration Testing & R-programming Workshop',
      description: 'Completed advanced security workshop',
      isWorkshop: true
    }
  ];

  const handleWorkshopClick = () => {
    setShowModal(true);
  };

  const handleCertificateClick = (certificateType: 'r-programming' | 'penetration-testing') => {
    const certificateLinks = {
      'r-programming': 'https://drive.google.com/file/d/15CQwn1LwPuioFT6v3MZsu6li7PjKSnUe/view?usp=sharing',
      'penetration-testing': 'https://drive.google.com/file/d/10yLrudoKBcGvx8vc-4LPjXPqxwmaPikI/view?usp=sharing'
    };
    window.open(certificateLinks[certificateType], '_blank');
    handleCloseModal();
  };

  return (
    <section id="achievements" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Achievements & Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out ${
                darkMode ? 'bg-gray-900 shadow-blue-500/5' : 'bg-white'
              }`}
              onClick={() => {
                if (achievement.isWorkshop) {
                  handleWorkshopClick();
                } else if (achievement.link) {
                  window.open(achievement.link, '_blank');
                }
              }}
              style={{ cursor: achievement.link || achievement.isWorkshop ? 'pointer' : 'default' }}
            >
              <div className="mb-4 transform hover:scale-110 transition-transform duration-200">
                {achievement.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {achievement.title}
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div 
              className={`fixed inset-0 modal-backdrop ${isModalVisible ? 'show' : ''} ${
                darkMode ? 'bg-black/75' : 'bg-black/65'
              }`}
              onClick={handleCloseModal}
            ></div>
            <div className={`relative max-w-md w-full mx-4 modal-content ${isModalVisible ? 'show' : ''} ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-xl p-8`}>
              <button
                onClick={handleCloseModal}
                className={`absolute top-4 right-4 transition-colors duration-200 ${
                  darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <X className="h-6 w-6" />
              </button>
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Select Certificate
              </h3>
              <div className="space-y-4">
                <button
                  onClick={() => handleCertificateClick('r-programming')}
                  className={`w-full p-4 text-left rounded-lg transition-all duration-300 flex items-center group ${
                    darkMode 
                      ? 'bg-blue-900/20 hover:bg-blue-900/30' 
                      : 'bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200'
                  }`}
                >
                  <div className="flex-1">
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-800 group-hover:text-blue-900'
                    }`}>R-Programming Workshop</h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-blue-300 group-hover:text-blue-200' : 'text-blue-600 group-hover:text-blue-700'
                    }`}>View certificate of completion</p>
                  </div>
                </button>
                <button
                  onClick={() => handleCertificateClick('penetration-testing')}
                  className={`w-full p-4 text-left rounded-lg transition-all duration-300 flex items-center group ${
                    darkMode 
                      ? 'bg-purple-900/20 hover:bg-purple-900/30' 
                      : 'bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200'
                  }`}
                >
                  <div className="flex-1">
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-purple-400 group-hover:text-purple-300' : 'text-purple-800 group-hover:text-purple-900'
                    }`}>Penetration Testing & Bug Bounty Workshop</h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-purple-300 group-hover:text-purple-200' : 'text-purple-600 group-hover:text-purple-700'
                    }`}>View certificate of completion</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;