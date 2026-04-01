import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción breve del proyecto. Explica las tecnologías utilizadas y el objetivo del proyecto.',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción breve del proyecto. Explica las tecnologías utilizadas y el objetivo del proyecto.',
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción breve del proyecto. Explica las tecnologías utilizadas y el objetivo del proyecto.',
    },
  ];

  return (
    <section id="projects" className="max-w-3xl mx-auto p-8">
      <h3 className="text-3xl font-semibold mb-4">Proyectos</h3>
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
              Ver más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;