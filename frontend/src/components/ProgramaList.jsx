import React, { useEffect, useState } from 'react';
import API from '../services/api';
import ProgramaForm from './ProgramaForm';

function ProgramaList() {
  const [programas, setProgramas] = useState([]);

  const fetchProgramas = () => {
    API.get('/programas')
      .then((res) => setProgramas(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProgramas();
  }, []);

  return (
    <div>
      <h2>Programas académicos</h2>
      <ProgramaForm onCreated={fetchProgramas} />
      <ul>
        {programas.map((p) => (
          <li key={p.id}>{p.nombre} - {p.facultad}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProgramaList;
