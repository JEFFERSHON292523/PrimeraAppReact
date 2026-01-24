
import './TodoCounter.css'

function TodoCounter({total, completed}) {
  return (
    <h2>
       Haz completado 
       <span>{completed}</span> de 
       <span>{total}</span> actividades
    </h2>
  );
}

export { TodoCounter };