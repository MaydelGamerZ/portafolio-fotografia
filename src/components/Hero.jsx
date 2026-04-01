import React from 'react';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <h2 className="text-5xl font-extrabold mb-4">¡Hola! Soy Tu Nombre</h2>
      <p className="max-w-2xl text-lg mb-6">
        Desarrollador web especializado en React y Tailwind CSS. Me apasiona crear interfaces elegantes y funcionales.
      </p>
      <a href="#projects" className="inline-block bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100">
        Ver proyectos
      </a>
    </section>
  );
}

export default Hero;