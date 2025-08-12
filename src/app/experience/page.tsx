import React from 'react';
import ExperienceCard from '../../components/ExperienceCard';

const experienceData = [
  {
    title: 'Software Engineer',
    company: 'Tech Company',
    period: 'June 2021 - Present',
    description: 'Developing and maintaining web applications using modern technologies. Led the development of key features that improved user engagement by 40%.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS']
  },
  {
    title: 'Software Engineering Intern',
    company: 'Another Tech Company',
    period: 'January 2021 - May 2021',
    description: 'Assisted in the development of internal tools and applications. Collaborated with senior developers to implement new features and fix bugs.',
    technologies: ['JavaScript', 'Python', 'Django', 'MySQL', 'Git']
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Inc.',
    period: 'June 2020 - December 2020',
    description: 'Built responsive web applications and improved user interface design. Worked closely with designers to implement pixel-perfect designs.',
    technologies: ['Vue.js', 'CSS3', 'HTML5', 'JavaScript', 'Figma']
  }
  // Add more experience entries as needed
];

const ExperiencePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Experience</h1>
      <div className="max-w-4xl mx-auto">
        {experienceData.map((experience, index) => (
          <ExperienceCard 
            key={index} 
            title={experience.title}
            company={experience.company}
            period={experience.period}
            description={experience.description}
            technologies={experience.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;