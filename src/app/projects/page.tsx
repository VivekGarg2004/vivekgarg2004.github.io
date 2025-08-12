import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'Description of project one.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'Description of project three.',
    link: '#',
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} link={project.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;