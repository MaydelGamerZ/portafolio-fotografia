import React from 'react';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="bg-gray-800 dark:bg-gray-700 text-white p-4 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Mi Portafolio</h1>
      <nav className="hidden md:flex space-x-6 text-gray-300">
        <a href="#about" className="hover:text-white">Sobre mí</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#projects" className="hover:text-white">Proyectos</a>
        <a href="#contact" className="hover:text-white">Contacto</a>
      </nav>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-700 dark:bg-gray-600 text-white px-3 py-2 rounded hover:bg-gray-600 dark:hover:bg-gray-500"
      >
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </header>
  );
}

export default Header;