"use client";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

// Reusable data for links to keep the JSX clean
const navLinks = [
  { href: "/resume", label: "RESUME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/contact", label: "CONTACT" },
];

const socialLinks = [
  { href: "https://github.com/VivekGarg2004", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/vivek-garg13", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.instagram.com/vivekk_garg/", label: "Instagram", icon: Instagram },
  { href: "mailto:vivekgarg2004@gmail.com", label: "Email", icon: Mail },
];

export default function HomePage() {
  // Animation variants for Framer Motion
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-16 text-white" // Restored py-16
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="mb-8" variants={itemVariants}> 
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={160} // Restored original size
          height={160} // Restored original size
          className="h-40 w-40 rounded-full object-cover border-2 border-neutral-700" // Restored original size
          priority
        />
      </motion.div>

      <motion.h1
        style={{ fontSize: '2rem' }}
        className="font-bold tracking-tight mb-4"
        variants={itemVariants}
      >
        Hi! I'm Vivek.
      </motion.h1>

      <p className="text-gray-200 max-w-lg text-center mb-6"> {/* Reduced from mb-10 to mb-6 */}
        I'm a student, developer, problem solver, and technology enthusiast at UCLA,
        specializing in full-stack development and software engineering.
      </p>

      {/* Using a motion.div as a divider */}
      <motion.div
        className="w-full max-w-sm border-t border-neutral-700 mb-6" 
        variants={itemVariants}
      />

      <motion.div
  className="grid w-full max-w-md grid-cols-2 gap-4 mb-10"
  variants={itemVariants}
>
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="border border-neutral-700 bg-black py-3 text-center font-medium text-neutral-300"
      style={{
        transition: "all 0.3s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "white";
        e.currentTarget.style.color = "white";
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.color = "";
        e.currentTarget.style.backgroundColor = "";
      }}
    >
      {link.label}
    </Link>
  ))}
</motion.div>

      <motion.div
        className="w-full max-w-sm border-t border-neutral-700 mb-10" // Restored divider style and mb-10
        variants={itemVariants}
      />

      <motion.div className="flex space-x-6" variants={itemVariants}>
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <motion.a
            key={href}
            href={href}
            aria-label={label}
            className="text-neutral-500 transition-colors hover:text-white"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="h-6 w-6" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}