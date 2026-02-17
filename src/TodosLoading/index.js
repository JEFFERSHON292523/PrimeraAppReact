
import React  from 'react';
import './TodosLoading.css';


function TodosLoading() {
  
  return (
  <div className="loading-wrapper">
  {"Cargando".split("").map((letra, i) => (
    <span
      key={i}
      className="loading-letter"
      style={{ animationDelay: `${i * 0.15}s` }}
    >
      {letra}
    </span>
  ))}
</div>


  );
}

export { TodosLoading };