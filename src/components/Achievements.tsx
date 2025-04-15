import { Award, BookOpen, Code, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Smart India Hackathon 2024',
      description: 'Participant in national-level hackathon',
      link: 'https://drive.google.com/file/d/1hE4AA8-az0Td8l37THNgfVLhZBqPrEaK/view?usp=sharing'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Competitive Coding',
      description: 'Active on Unstop, Leetcode, and HackerRank'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'INTEL Industrial Training',
      description: 'Completed intensive training program'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Penetration Testing & R-programming Workshop',
      description: 'Completed advanced security workshop'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Achievements & Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
              onClick={() => achievement.link && window.open(achievement.link, '_blank')}
              style={{ cursor: achievement.link ? 'pointer' : 'default' }}
            >
              <div className="text-blue-600 mb-4 transform hover:scale-110 transition-transform duration-200">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;