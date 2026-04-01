/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  // Habilitamos dark mode usando la clase `dark` en el elemento raíz.
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};