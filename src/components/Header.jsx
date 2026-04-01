import React from 'react';
import Logo from './Logo.jsx';

/**
 * Cabecera con logotipo, navegación y botón de modo oscuro.
 */
function Header({ darkMode, setDarkMode }) {
  return (
    <header className="bg-gray-900 dark:bg-gray-800 bg-opacity-90 text-white p-4 flex items-center justify-between fixed w-full z-20">
      <div className="flex items-center space-x-3">
        <Logo size={50} />
        {/* Muestra el nombre solo en pantallas medianas y grandes */}
        <span className="text-lg sm:text-xl font-bold hidden sm:block">MGZ Memories</span>
      </div>
      <nav className="hidden md:flex space-x-6 text-gray-300 font-medium">
        <a href="#about" className="hover:text-white transition-colors">Sobre mí</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
        <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
      </nav>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-purple-600 hover:bg-purple-500 text-white px-3 py-2 rounded transition-colors"
      >
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </header>
  );
}

export default Header;