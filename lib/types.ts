import { StaticImageData } from 'next/image';

export type Experience = {
  logo: string | StaticImageData; // Can be a URL string or a statically imported image
  company: string;
  role: string;
  date: string;
  location: string;
  description: string;
  skills: string[];
};