import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList/index.js';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoItem } from '../TodoItem';
import React from 'react';
import { Modal } from '../TodoModal/index.js';
import { TodoForm } from '../TodoForm/index.js';
import { TodoContext } from '../TodoContext';

function AppUI() {
  const{
          loading,
          error,
          searchedTodos,
          funcionComplete,
          funcionDelete, 
          openModal,
          setopenModal,
  }=React.useContext(TodoContext);

  const {congratsTodos} = React.useContext(TodoContext);
    return (
    <>  
          <TodoCounter congratsTodos={congratsTodos()}/>

          <TodoSearch/>
            <TodoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {!loading && searchedTodos.length === 0 && <EmptyTodos />}

              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  complete={() => funcionComplete(todo.text)}
                  delete={() => funcionDelete(todo.text)}
                />
              ))}
            </TodoList>
        
          <CreateTodoButton 
            openModal={openModal}
            setopenModal={setopenModal}
          />

            {openModal&&(
              <Modal> 
                <TodoForm/>
              </Modal>)}

     </>
);
}


export { AppUI };