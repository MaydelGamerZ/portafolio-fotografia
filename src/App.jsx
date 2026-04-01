import React, { useState } from 'react';

// Este componente es la estructura principal de tu portafolio.
// Incluye un modo oscuro/oscuro que se activa mediante un botón y
// varias secciones (hero, sobre mí, skills, proyectos y contacto).
function App() {
  // Estado para controlar el modo oscuro. Por defecto está desactivado.
  const [darkMode, setDarkMode] = useState(false);

  // Alterna el modo oscuro cuando se hace clic en el botón.
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    // El contenedor principal usa la clase `dark` cuando darkMode es verdadero.
    <div className={darkMode ? 'dark' : ''}>
      {/* Contenedor que define el color de fondo y texto según el tema */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col">
        {/* Cabecera con título, navegación y botón para cambiar el tema */}
        <header className="bg-gray-800 dark:bg-gray-700 text-white p-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Mi Portafolio</h1>
          {/* Navegación visible en dispositivos medianos y grandes */}
          <nav className="hidden md:flex space-x-6 text-gray-300">
            <a href="#about" className="hover:text-white">Sobre mí</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Proyectos</a>
            <a href="#contact" className="hover:text-white">Contacto</a>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-700 dark:bg-gray-600 text-white px-3 py-2 rounded hover:bg-gray-600 dark:hover:bg-gray-500"
          >
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </header>

        {/* Contenido principal */}
        <main className="flex-grow">
          {/* Sección de presentación o "hero" */}
          <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
            <h2 className="text-5xl font-extrabold mb-4">¡Hola! Soy Tu Nombre</h2>
            <p className="max-w-2xl text-lg mb-6">
              Desarrollador web especializado en React y Tailwind CSS. Me apasiona crear interfaces elegantes y funcionales.
            </p>
            <a href="#projects" className="inline-block bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100">Ver proyectos</a>
          </section>

          {/* Sección Sobre mí */}
          <section id="about" className="max-w-3xl mx-auto p-8">
            <h3 className="text-3xl font-semibold mb-4">Sobre mí</h3>
            <p className="text-lg leading-relaxed">
              Soy un desarrollador apasionado por construir aplicaciones modernas. Me gusta aprender
              nuevas tecnologías y mejorar mis habilidades constantemente. En este portafolio encontrarás
              algunos de mis trabajos y proyectos personales.
            </p>
          </section>

          {/* Sección Skills */}
          <section id="skills" className="max-w-3xl mx-auto p-8">
            <h3 className="text-3xl font-semibold mb-4">Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <span className="block text-xl font-bold mb-2">React</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Biblioteca de UI</span>
              </li>
              <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <span className="block text-xl font-bold mb-2">Tailwind</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Framework CSS</span>
              </li>
              <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <span className="block text-xl font-bold mb-2">JavaScript</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Lenguaje de programación</span>
              </li>
              <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <span className="block text-xl font-bold mb-2">HTML/CSS</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Maquetación web</span>
              </li>
              <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <span className="block text-xl font-bold mb-2">Node.js</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Backend</span>
              </li>
            </ul>
          </section>

          {/* Sección Proyectos */}
          <section id="projects" className="max-w-3xl mx-auto p-8">
            <h3 className="text-3xl font-semibold mb-4">Proyectos</h3>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h4 className="text-2xl font-semibold mb-2">Proyecto 1</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Descripción breve del proyecto. Explica las tecnologías utilizadas y el objetivo del proyecto.</p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Ver más</a>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h4 className="text-2xl font-semibold mb-2">Proyecto 2</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Descripción breve del proyecto. Explica las tecnologías utilizadas y el objetivo del proyecto.</p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Ver más</a>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h4 className="text-2xl font-semibold mb-2">Proyecto 3</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Descripción breve del proyecto. Explica las tecnologías utilizadas y el objetivo del proyecto.</p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Ver más</a>
              </div>
            </div>
          </section>

          {/* Sección Contacto */}
          <section id="contact" className="max-w-3xl mx-auto p-8">
            <h3 className="text-3xl font-semibold mb-4">Contacto</h3>
            <p className="text-lg">
              Puedes contactarme en{' '}
              <a href="mailto:correo@example.com" className="text-blue-600 dark:text-blue-400 underline">correo@example.com</a>.
            </p>
          </section>
        </main>

        {/* Pie de página */}
        <footer className="bg-gray-800 dark:bg-gray-700 text-white p-4 text-center">
          &copy; 2026 Tu Nombre
        </footer>
      </div>
    </div>
  );
}

export default App;