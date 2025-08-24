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

export type Project = {
  title: string;
  summary: string;
  image: string | StaticImageData;
  demo?: string;
  github: string;
  description: string;
  skills: string[];
};
