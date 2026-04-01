import React from 'react';

function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto p-8">
      <h3 className="text-3xl font-semibold mb-4">Contacto</h3>
      <p className="text-lg">
        ¿Te gustaría colaborar o reservar una sesión? Escríbeme a{' '}
        <a
          href="mailto:correo@example.com"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          correo@example.com
        </a>{' '}
        o sígueme en redes sociales para ver más de mi trabajo.
      </p>
    </section>
  );
}

export default Contact;