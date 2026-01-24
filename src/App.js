import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Tomar el curso de intro a React y Vite', completed: false },
];

function App() {
  return (
    <>  

      <TodoCounter total={20} completed={16} />
      <TodoSearch />

      <TodoList >
        {defaultTodos.map(todo=>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList> 
      
      <CreateTodoButton />

     </>
    
  );
}



export default App;
