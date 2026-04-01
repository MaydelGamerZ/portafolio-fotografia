import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Sesión de Boda',
      description:
        'Cobertura completa de boda con edición profesional y álbum digital.',
    },
    {
      title: 'Retrato Artístico',
      description:
        'Fotografías creativas en estudio con iluminación y estilos personalizados.',
    },
    {
      title: 'Portfolio Web',
      description:
        'Desarrollo y diseño de portafolios modernos usando React y Tailwind.',
    },
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto p-8">
      <h3 className="text-3xl font-semibold mb-4">Proyectos</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow transition-colors"
          >
            <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Ver más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;