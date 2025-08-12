import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-300">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-700 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-pink-500 transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="mailto:you@example.com"
          className="text-gray-600 hover:text-red-500 transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}
