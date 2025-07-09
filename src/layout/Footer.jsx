import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-50 border-t border-blue-100 text-blue-900">
      <div className="max-w-[85%] mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo + Text */}
        <div className="flex items-center gap-3 text-lg font-semibold">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          TaskMate
        </div>

        {/* Social or Navigation */}
        <div className="flex gap-6 text-xl text-blue-600">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-blue-800 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-blue-500 py-2 md:py-3 lg:py-4 bg-blue-100">
        © {new Date().getFullYear()} TaskMate. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
