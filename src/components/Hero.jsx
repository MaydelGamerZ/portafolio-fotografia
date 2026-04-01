import React from 'react';
import Logo from './Logo.jsx';

/**
 * Sección principal del hero. Usa tu logotipo y un fondo oscuro para un aspecto profesional.
 */
function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-gray-900 dark:bg-gray-900 text-white relative">
      <Logo size={220} className="mb-6" />
      <p className="max-w-xl text-lg sm:text-xl mb-8">
        Capturando tus recuerdos más preciados con estilo profesional.
      </p>
      <a
        href="#projects"
        className="inline-block bg-purple-600 hover:bg-purple-500 dark:bg-purple-700 dark:hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-colors"
      >
        Ver proyectos
      </a>
    </section>
  );
}

export default Hero;