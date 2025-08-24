"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { Project } from "@/lib/types";
import SnapshotLogo from '@/public/projects/snapshot.jpg';
import SpotifyLogo from '@/public/projects/spotify.svg';
import ProjectCard from '../components/ProjectCard'; // Your reusable card component

// Project data remains the same
const projects: Project[] = [
  {
    title: "SnapShot",
    summary: "AR Sports Insights Platform",
    image: SnapshotLogo,
    github: "https://github.com/vivekgarg2004/snapshot",
    description: "Architected a real-time AR sports application that integrates with Snapchat Spectacles, featuring AI video recognition and context-aware voice Q&A using Google Gemini API.",
    skills: ["Python", "Flask", "MongoDB", "Lens Studio", "TypeScript", "Google Gemini API", "AR"],
  },
  {
    title: "SpotiFriends",
    summary: "Social Music Sharing Platform",
    image: SpotifyLogo,
    github: "https://github.com/vivekgarg2004/spotifriends",
    demo: "https://spotifriends-demo.vercel.app",
    description: "Built a full-stack music application with social features including OAuth authentication, friend requests, and playlist sharing using Next.js and Express.js with PostgreSQL.",
    skills: ["Next.js", "Docker", "PostgreSQL", "TypeScript", "Express.js", "Prisma", "OAuth"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Introduction Section (unchanged) */}
        <motion.div 
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Projects
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            A showcase of my technical projects, demonstrating problem-solving skills and technical expertise.
          </p>
          
          <div className="mt-8 w-24 h-1 bg-amber-500/60 mx-auto rounded-full" />
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            // The motion.div now acts as a simple animation wrapper.
            // All the card styling is handled by the ProjectCardNew component itself.
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </main>
      <footer className="py-10 text-center text-neutral-500">
        <p>Looking for new opportunities • Open to collaborations</p>
      </footer>
    </div>
  );
}