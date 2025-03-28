// src/components/Contato.js

'use client'; // Marca este arquivo como componente cliente

import React, { useState } from 'react';

import './style.css'

const FormContato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a lógica de envio, por exemplo, com uma API
    alert("Formulário enviado com sucesso!");
    console.log(formData); // Exemplo para mostrar os dados no console
  };

  return (
    <section className="contato" id="contato">
      <h2>Entre em Contato Conosco</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          required
        />
        <input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="Telefone"
          pattern="(\([0-9]{2}\))?[0-9]{4,5}-[0-9]{4}"
          title="Telefone no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX"
        />
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          placeholder="Mensagem"
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default FormContato;
