import React from 'react';

interface ExperienceCardProps {
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ jobTitle, company, duration, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold">{jobTitle}</h3>
      <p className="text-gray-700">{company}</p>
      <p className="text-gray-500">{duration}</p>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default ExperienceCard;