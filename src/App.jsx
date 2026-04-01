import React from 'react';

// Componente principal del portafolio.
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Mi Portafolio</h1>
        <nav className="space-x-4 text-gray-300">
          <a href="#about" className="hover:text-white">Sobre mí</a>
          <a href="#projects" className="hover:text-white">Proyectos</a>
          <a href="#contact" className="hover:text-white">Contacto</a>
        </nav>
      </header>
      <main className="flex-grow p-4 space-y-8">
        {/* Sección Sobre mí */}
        <section id="about" className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Sobre mí</h2>
          <p>
            Soy un desarrollador apasionado por crear aplicaciones web modernas y
            atractivas. Tengo experiencia en React, Tailwind CSS y otras
            tecnologías de frontend.
          </p>
        </section>
        {/* Sección Proyectos */}
        <section id="projects" className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Proyectos</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Proyecto 1: Descripción breve del proyecto.</li>
            <li>Proyecto 2: Descripción breve del proyecto.</li>
            <li>Proyecto 3: Descripción breve del proyecto.</li>
          </ul>
        </section>
        {/* Sección Contacto */}
        <section id="contact" className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Contacto</h2>
          <p>
            Puedes contactarme en <a href="mailto:correo@example.com" className="text-blue-500">correo@example.com</a>.
          </p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2026 Tu Nombre
      </footer>
    </div>
  );
}

export default App;