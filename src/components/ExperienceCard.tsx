interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export default function ExperienceCard({ 
  title, 
  company, 
  period, 
  description, 
  technologies 
}: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-lg text-green-600 font-medium">{company}</p>
        </div>
        <span className="text-sm text-gray-500 mt-1 md:mt-0">{period}</span>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}