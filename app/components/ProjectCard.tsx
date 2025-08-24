"use client";

import Image from 'next/image';
import { Project } from '@/lib/types'; // Assuming types are in `lib/types.ts`
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import SkillTag from './SkillTag'; // Assuming SkillTag is a separate component

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { title, summary, image, demo, github, description, skills } = project;
  const [imageError, setImageError] = useState(false);

  return (
    // 1. Added a main card container. This is the root element for the card.
    // It uses `flex-col` to stack the image and content, `group` for the hover effect,
    // and `overflow-hidden` to clip the image to the rounded corners.
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800/50 transition-all duration-300 group hover:border-amber-400 hover:shadow-2xl hover:scale-[1.025] hover:bg-gradient-to-br hover:from-neutral-800/90 hover:to-amber-900/30">
      
      {/* Project Image */}
      {/* 2. Implemented image error handling. If the image fails to load, this container is hidden. */}
      {!imageError && (
        <div className="flex h-64 w-full items-center justify-center">

          {/* 2. This new div creates a fixed-size square with rounded corners. */}
          <div className="relative h-48 w-48 overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={title}
              fill
              // 3. We use `object-cover` again to CROP the image to fill the square.
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
              sizes="192px" // Set to the new fixed width of the image (w-48 = 192px)
            />
          </div>

        </div>
      )}
      
      {/* Content */}
      {/* 3. Refined the content layout for better vertical spacing. */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white font-serif tracking-tight">{title}</h2>
            <p className="font-medium text-amber-400 font-sans">{summary}</p>
          </div>
          
          {/* Links */}
          <div className="flex flex-shrink-0 gap-3">
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-neutral-800 p-2 transition-colors hover:bg-neutral-700"
              aria-label={`GitHub repository for ${title}`}
            >
              <Github className="h-5 w-5" />
            </a>
            {demo && (
              <a 
                href={demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-neutral-800 p-2 transition-colors hover:bg-neutral-700"
                aria-label={`Live demo for ${title}`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        {/* 4. Removed `flex-1` from the description for more predictable spacing. */}
        <p className="mt-4 text-neutral-300">{description}</p>
        
        {/* Skills - `mt-auto` pushes this section to the bottom of the card. */}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {skills.map(skill => (
            <SkillTag key={skill} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;