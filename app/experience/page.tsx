"use client";

import ExperienceCard from '../components/ExperienceCard';
import Header from '../components/Header';
import { Experience } from '@/lib/types';
import { motion } from 'framer-motion';

// Import your local logo file. Next.js processes this automatically.
import AmexLogo from '@/public/logos/amex.png';
import NetskopeLogo from '@/public/logos/netskope.jpg';
import SprihLogo from '@/public/logos/sprih.jpeg';

const amexExperience: Experience = {
  logo: AmexLogo, // Use the imported image object here
  company: 'American Express',
  role: 'Software Engineering Intern',
  date: 'June 2025 – Aug 2025',
  location: 'Phoenix, AZ',
  description: 'Built high-precision BigQuery data validation pipelines processing 100M+ monthly transactions, while ensuring regulatory compliance. Developed an enterprise RAG chatbot generator that enabled teams to autonomously create chatbots from internal knowledge bases.',
  skills: ['BigQuery', 'Airflow', 'SQL', 'Python', 'RAG', 'Data Validation'],
};

const netskopeExperience: Experience = {
  logo: NetskopeLogo, // Use the imported image object here
  company: 'Netskope',
  role: 'Platform Engineer Intern',
  date: 'Feb 2025 – May 2025',
  location: 'Los Angeles, CA',
  description: 'Engineered an AI-powered alert analysis framework processing 80 alerts per minute across 100+ data centers. Developed an automated monitoring portal with RBAC controls that reduced engineering workload by 55% while providing real-time KPI insights.',
  skills: ['AWS Bedrock', 'React', 'Grafana', 'Prometheus', 'AI Integration'],
};

const sprihExperience: Experience = {
  logo: SprihLogo, // Use the imported image object here
  company: 'Sprih',
  role: 'Data Science Intern',
  date: 'June 2024 – Nov 2024',
  location: 'Remote',
  description: 'Architected an end-to-end Python ETL pipeline processing 700,000+ sustainability data points, improving data accuracy by 60%. Implemented a robust test suite that boosted code coverage by 40% and reduced production failures by 98%.',
  skills: ['Python', 'ETL', 'AWS S3', 'pytest', 'ML'],
};


export default function ExperiencePage() {
  return (
    <div className="bg-neutral-900 min-h-screen">
      {/* Header */}
      <Header />
      
    <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col justify-center items-center min-h-[70vh]">
      {/* Introduction Section */}
      <motion.div 
        className="mb-16 md:mb-24 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
        Work Experience
        </h1>
        <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
        Here are some of the amazing places I have worked at, where I&apos;ve contributed to innovative projects and developed my skills.
        </p>
        <div className="mt-8 w-24 h-1 bg-amber-500/60 mx-auto rounded-full" />
      </motion.div>
      
      {/* Experience Cards */}
      <div className="space-y-8 md:space-y-10 flex flex-col items-center w-full">
          <ExperienceCard experience={amexExperience} />
          <ExperienceCard experience={netskopeExperience} />
          <ExperienceCard experience={sprihExperience} />
      </div>
    </main>
      
      {/* Optional: Add a footer or contact section */}
      <footer className="py-10 text-center text-neutral-500">
        <p>Looking for new opportunities • Open to collaborations</p>
      </footer>
    </div>
  );
}