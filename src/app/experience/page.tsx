import React from 'react';
import ExperienceCard from '@/components/ExperienceCard';

const experienceData = [
  {
    title: 'Software Engineer',
    company: 'Tech Company',
    duration: 'June 2021 - Present',
    description: 'Developing and maintaining web applications using modern technologies.',
  },
  {
    title: 'Intern',
    company: 'Another Tech Company',
    duration: 'January 2021 - May 2021',
    description: 'Assisted in the development of internal tools and applications.',
  },
  // Add more experience entries as needed
];

const ExperiencePage = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;