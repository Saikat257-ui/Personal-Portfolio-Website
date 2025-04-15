import { BookOpen, Code, Palette, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              As a third-year B.Tech Computer Science student at Brainware University, I'm deeply passionate
              about exploring the intersections of artificial intelligence, machine learning, and web development.
              My academic journey has been marked by a constant drive to learn and innovate, particularly in
              the realms of AI & ML.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond the classroom, I'm an enthusiastic participant in hackathons and technical competitions,
              where I've had the opportunity to apply my skills to real-world challenges. I also have a creative
              side, expressing myself through abstract art creation when I'm not coding.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg hover-pop">
              <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-gray-600">B.Tech in Computer Science</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg hover-pop">
              <Code className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Full-stack & ML Engineer</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg hover-pop">
              <Trophy className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2">Competitions</h3>
              <p className="text-gray-600">Hackathon Enthusiast</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg hover-pop">
              <Palette className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="font-semibold mb-2">Creativity</h3>
              <p className="text-gray-600">Abstract Artist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;