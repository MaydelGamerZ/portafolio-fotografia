import React from 'react';
import logoImg from '../assets/logo.png';

/**
 * Muestra el logotipo como imagen. Puedes ajustar el tamaño con la prop `size`.
 */
function Logo({ size = 80, className = '' }) {
  return (
    <img
      src={logoImg}
      alt="MGZ Memories logo"
      className={`${className}`}
      style={{ width: size, height: 'auto' }}
    />
  );
}

export default Logo;