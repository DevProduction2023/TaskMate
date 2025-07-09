import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'About', path: '#about' }, // if you use anchor
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-[85%] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          TaskMate
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-blue-700 font-medium">
          {navLinks.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="hover:text-blue-500 transition relative after:block after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-blue-600 text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 flex flex-col gap-3 shadow">
          {navLinks.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="text-blue-700 font-medium hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
