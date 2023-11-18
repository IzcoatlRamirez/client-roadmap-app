import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Icon from '@mui/material/Icon';


function Materias(props) {
  const [materiasSeleccionadas, setMateriasSeleccionadas] = useState([]);
  const [completadoOption, setCompletadoOption] = useState('1');
  const [botonGuardadoHabilitado, setBotonGuardadoHabilitado] = useState(true); // Estado para habilitar o deshabilitar el botón
  const [mostrarCheckboxes, setMostrarCheckboxes] = useState(false);
 

  const handleCompletadoChange = (e) => {//Cambia la opción de si el alumno ha completado las materias del semestre
    const valor = e.target.value;

    setCompletadoOption(valor);
    setMostrarCheckboxes(valor === '0');
    if (valor === '1') {
      setMateriasSeleccionadas([]); // Limpia las materias seleccionadas
    }
  };

 
  const handleMateriaSeleccionada = (materia) => {
    const yaSeleccionada = materiasSeleccionadas.includes(materia);
    if (yaSeleccionada) {
      setMateriasSeleccionadas((prevMaterias) => prevMaterias.filter((m) => m !== materia));
    } else {
      setMateriasSeleccionadas([...materiasSeleccionadas, materia]);
    }
  };

  const getMateriasNoCursadas = () => {
    if (completadoOption === '1') {
      return props.materias; // Si el estudiante ha completado las materias, devolvemos todas las materias disponibles
    } else {
      return props.materias.filter((materia) => !materiasSeleccionadas.includes(materia));
    }
  };
  const guardarMaterias = () => {
    if (!botonGuardadoHabilitado) {
      return; // Si el botón ya está deshabilitado, no hacer nada
    }
  
    setBotonGuardadoHabilitado(false);
    if (completadoOption === '0') {
      props.anadirAlRoadmap(getMateriasNoCursadas());
    }
  };

  return (
    
    <div>
        <div className='semestre'>
      <label className='semestre'>Semestre: {props.semestre}</label>
      </div>
      <div>
      <div className='pregunta1'>
        <label htmlFor={`semestrecursado-${props.semestre}`}>
          Se completaron las materias del semestre {props.semestre}?
        </label>
        </div>
        <div className="radioGroupCustom">
  <RadioGroup row
    aria-label={`semestrecursado-${props.semestre}`}
    name={`semestrecursado-${props.semestre}`}
    value={completadoOption}
    onChange={handleCompletadoChange}
    
  >
    <FormControlLabel
      value="1"
      control={<Radio />}
      label={<span className="radioLabel">Si</span>}
      disabled={!botonGuardadoHabilitado}
    />
    <FormControlLabel
      value="0"
      control={<Radio />}
      label={<span className="radioLabel">No</span>}
      disabled={!botonGuardadoHabilitado}
    />
  </RadioGroup>
  </div>
       
      </div>
      {mostrarCheckboxes && 
        <div className='pregunta1'>
        Seleccione las materias que haya cursado:
      </div>
      }
      
      {mostrarCheckboxes && // Mostrar checkboxes si mostrarCheckboxes es true
      
      props.materias.map((materia) => (
          <div key={materia}>
            <label>
              <Checkbox
                color="primary"
                checked={materiasSeleccionadas.includes(materia)}
                onChange={() => handleMateriaSeleccionada(materia)}
                disabled={completadoOption === '1' || !botonGuardadoHabilitado}
              />
              <span>{materia}</span>
            </label>
          </div>
        ))}
      <br />
      
      <Button variant="contained" onClick={guardarMaterias} disabled={!botonGuardadoHabilitado} className="btnstyl" >
      <Icon sx={{ fontSize: 15, marginRight: 2}}>add_circle</Icon>Salvar semestre
      </Button>
      <br />
    </div>
  );
}

export default Materias;