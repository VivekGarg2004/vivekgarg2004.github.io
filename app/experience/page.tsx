import ExperienceCard from '../components/ExperienceCard';
import { Experience } from '@/lib/types';

// Import your local logo file. Next.js processes this automatically.
import AmexLogo from '@/public/logos/amex.png';

const amexExperience: Experience = {
  logo: AmexLogo, // Use the imported image object here
  company: 'American Express',
  role: 'software engineering intern',
  date: 'June 2025 – Aug 2025',
  location: 'Phoenix, AZ',
  description: 'Oversaw the entire software development cycle of a project that ensured data validity and reduced operational risk during the process of awarding Credit Card points to card holders.',
  skills: ['Big Query', 'Airflow', 'SQL', 'Python', 'SARIMAX'],
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <ExperienceCard experience={amexExperience} />
    </main>
  );
}