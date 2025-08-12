interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl, 
  imageUrl 
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {imageUrl && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
            >
              GitHub
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}