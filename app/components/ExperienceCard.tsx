"use client";
import Image from 'next/image';
import SkillTag from './SkillTag';
import { Experience } from '@/lib/types';

type Props = {
  experience: Experience;
};

const ExperienceCard: React.FC<Props> = ({ experience }) => {
  const { logo, company, role, date, location, description, skills } = experience;

  return (
    <div className="flex max-w-5xl gap-8 rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-800/80 to-neutral-900/60 backdrop-blur-sm p-8 text-neutral-200 items-center transition-all duration-300 group hover:border-amber-400 hover:shadow-2xl hover:scale-[1.025] hover:bg-gradient-to-br hover:from-neutral-800/90 hover:to-amber-900/30">
      
      {/* Logo Container - Improved styling */}
      <div className="relative flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-2xl p-5 group-hover:scale-105 transition-transform duration-300">
        <Image
          src={logo}
          alt={`${company} logo`}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-1 flex-col gap-2">
        
        {/* Company and Role - On one line with space between */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-white font-serif tracking-tight">
            {company}
          </h3>
          <span>{location}</span>
        </div>
        
        {/* Date and Location - Improved layout */}
        <div className="flex items-center justify-between text-sm text-neutral-400 font-mono tracking-wide pb-2 border-b border-neutral-700/50">
         <p className="text-lg font-medium text-amber-400 font-sans">
            {role}
          </p>
          <span>{date}</span>
        </div>
        
        {/* Description - Better spacing and typography */}
        <p className="text-base leading-relaxed text-neutral-300 font-light">
          {description}
        </p>
        
        {/* Skills - Improved spacing and layout */}
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillTag key={skill} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;