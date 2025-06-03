import React, { useState } from 'react';
import API from '../services/api';

function ProgramaForm({ onCreated }) {
  const [nombre, setNombre] = useState('');
  const [facultad, setFacultad] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/programas', { nombre, facultad });
      setNombre('');
      setFacultad('');
      onCreated(); // Actualizar lista
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del programa"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Facultad"
        value={facultad}
        onChange={(e) => setFacultad(e.target.value)}
      />
      <button type="submit">Crear Programa</button>
    </form>
  );
}

export default ProgramaForm;
