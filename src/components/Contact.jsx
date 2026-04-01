import React from 'react';

function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto p-8">
      <h3 className="text-3xl font-semibold mb-4">Contacto</h3>
      <p className="text-lg">
        Puedes contactarme en{' '}
        <a href="mailto:correo@example.com" className="text-blue-600 dark:text-blue-400 underline">
          correo@example.com
        </a>.
      </p>
    </section>
  );
}

export default Contact;