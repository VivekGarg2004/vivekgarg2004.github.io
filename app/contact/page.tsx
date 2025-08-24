"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
      }
    },
  };

  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            variants={itemVariants}
          >
            Let&apos;s Connect
          </motion.h1>
          
          <motion.p 
            className="text-neutral-300 max-w-lg mb-12" 
            variants={itemVariants}
          >
            I&apos;m always excited to collaborate on interesting projects or discuss
            new opportunities.
          </motion.p>
          
          <motion.div 
            className="w-full max-w-lg bg-neutral-800/50 border border-neutral-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
            variants={itemVariants}
          >
            
            <p className="text-neutral-300 text-center mb-8">
                Feel free to reach out via email or connect with me on social media.
                I look forward to hearing from you!
            </p>
            
            <motion.a
              href="mailto:vivek.garg@ucla.edu"
              className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 mb-8"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="h-5 w-5" />
              SEND ME AN EMAIL
            </motion.a>
            
            <div className="text-center text-neutral-400 mb-6">
              or find me on
            </div>
            
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://github.com/vivekgarg2004"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-neutral-700 rounded-lg hover:border-amber-500 hover:bg-neutral-800 transition-all duration-300"
                whileHover={{ y: -3, borderColor: "#f59e0b" }}
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/vivek-garg13"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-neutral-700 rounded-lg hover:border-amber-500 hover:bg-neutral-800 transition-all duration-300"
                whileHover={{ y: -3, borderColor: "#f59e0b" }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-neutral-500 mt-12 text-sm font-mono"
            variants={itemVariants}
          >
            Based in LA/SF but willing to relocate.
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}