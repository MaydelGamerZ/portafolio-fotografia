import React from 'react';

function Skills() {
  const skills = [
    { title: 'React', description: 'Biblioteca de UI' },
    { title: 'Tailwind', description: 'Framework CSS' },
    { title: 'JavaScript', description: 'Lenguaje de programación' },
    { title: 'HTML/CSS', description: 'Maquetación web' },
    { title: 'Node.js', description: 'Backend' },
  ];

  return (
    <section id="skills" className="max-w-3xl mx-auto p-8">
      <h3 className="text-3xl font-semibold mb-4">Skills</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <li key={skill.title} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <span className="block text-xl font-bold mb-2">{skill.title}</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;