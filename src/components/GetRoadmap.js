

function GetRoadmap(props) {
  const { roadmap} = props;
  
  
  const roadmapLimpio = roadmap.replace(/,\s*/g, '');//Elimina todas las"," seguida de cualquier cantidad de espacios en blanco "\s*" 

  props.guardarRoadmapF(roadmapLimpio);//Llama la funcion y se le pasa el valor de radmapLimpio como argumento
    // No mostramos los créditos en el componente
    return null;
  
}

export default GetRoadmap;