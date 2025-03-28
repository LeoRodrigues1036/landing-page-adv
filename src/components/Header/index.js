import React from 'react';

import './style.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo do Escritório de Advocacia" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <div className="cta">
        <a href="#contato" className="cta-button">Agendar Consultoria</a>
      </div>
    </header>
  );
}

export default Header;
