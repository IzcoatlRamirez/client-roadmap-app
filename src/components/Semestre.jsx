import React from 'react';
import Materia from './Materia';

function Semestre({ materias }) {
  return (
    <div>
      {materias.map((materia) => (
        <Materia
          key={materia.id}
          nombre={materia.nombre}
          codigo={materia.codigo}
          creditos={materia.creditos}
        />
      ))}
    </div>
  );
}

export default Semestre;