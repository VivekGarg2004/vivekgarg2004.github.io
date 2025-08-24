"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header({ title }: { title?: string }) {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header 
      className="w-full py-6 px-4 md:px-8 flex justify-between items-center border-b border-neutral-800 backdrop-blur-md sticky top-0 z-50 bg-neutral-900/80"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link 
        href="/" 
        className="flex items-center text-neutral-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
        <span className="relative">
          Back Home
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </Link>
      
      {title && (
        <h1 className="text-xl font-medium text-white hidden sm:block">{title}</h1>
      )}
      
      <nav className="flex items-center gap-1 sm:gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <Link 
              key={item.path}
              href={item.path}
              className={`relative px-1.5 py-1.5 text-sm sm:text-base group transition-colors duration-200 ${
                isActive ? "text-amber-400" : "text-neutral-300 hover:text-white"
              }`}
            >
              <span className="relative">
                {item.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </span>
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
}