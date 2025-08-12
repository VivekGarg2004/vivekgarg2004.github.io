"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function Header({ title }: { title?: string }) {
  return (
    <motion.header 
      className="w-full py-6 px-4 md:px-8 flex justify-between items-center border-b border-neutral-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link 
        href="/" 
        className="flex items-center text-neutral-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        <span>Back Home</span>
      </Link>
      
      {title && (
        <h1 className="text-xl font-medium text-white">{title}</h1>
      )}
      
      <div className="w-24" /> {/* Spacer for centering */}
    </motion.header>
  );
}