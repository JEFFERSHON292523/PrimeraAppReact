
import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter({congratsTodos}) {

  const {completedTodos,totalTodos} = React.useContext(TodoContext);
  return (
    
    <h2  className={`${congratsTodos && 'congrats-todos'}`}>
       Haz completado 
       <span>{completedTodos}</span> de 
       <span>{totalTodos}</span> actividades
    </h2>
  );
}

export { TodoCounter };