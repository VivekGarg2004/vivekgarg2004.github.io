import React from 'react';
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, featuring user authentication, payment processing, and inventory management.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/vivekgarg2004/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    imageUrl: '/project1.jpg'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/vivekgarg2004/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app'
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with interactive charts.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
    githubUrl: 'https://github.com/vivekgarg2004/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.vercel.app'
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;