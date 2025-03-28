// src/components/Footer.js

import React from 'react';
import './style.css'
const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#privacy-policy">Política de Privacidade</a></li>
        <li><a href="#terms">Termos de Uso</a></li>
      </ul>
      <div className="social-media">
        <a href="[Link LinkedIn]">LinkedIn</a>
        <a href="[Link Instagram]">Instagram</a>
        <a href="[Link Facebook]">Facebook</a>
      </div>
    
    </footer>
  );
}

export default Footer;
