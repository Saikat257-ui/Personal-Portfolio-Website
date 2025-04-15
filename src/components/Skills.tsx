import { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = {
    'Programming Languages': ['Java', 'C', 'Python', 'JavaScript/TypeScript'],
    'Web Technologies': ['HTML', 'CSS', 'React.js', 'Spring Boot', 'Tailwind CSS'],
    'Databases': ['MySQL', 'MongoDB'],
    'Tools & Frameworks': ['Git', 'Docker', 'Node.js', 'Express.js'],
    'Machine Learning': ['TensorFlow', 'PyTorch', 'Scikit-learn']
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-bar');
            bars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              if (width) {
                (bar as HTMLElement).style.setProperty('--final-width', width);
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md hover-pop">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div key={skill} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-2 bg-blue-600 rounded-full"
                        data-width={`${Math.floor(Math.random() * (95 - 75) + 75)}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;