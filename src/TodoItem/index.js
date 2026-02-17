
import React from 'react';
import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'
import './TodoItem.css'

function TodoItem(props) {
  
  return (
    <li> 
      <CompleteIcon
      completed={props.completed}
      onComplete={props.complete}
      /> 
      
      <p className={`text ${props.completed && 'text-complete' } `}>{props.text}</p>
      
      <DeleteIcon
      onDelete={props.delete}
      />
     

    </li>
  );
}
export { TodoItem };