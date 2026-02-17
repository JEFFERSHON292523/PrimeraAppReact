import React from "react";
import { useLocalStorage } from "./useLocalStorage";

 const TodoContext = React.createContext();

 function TodoProvider({children}){

            const {
            item: todo,
            saveItem: saveTodo,
            loading,
            error,
        }= useLocalStorage('TODOS_V1',[]);
        const [searchValue, setsearchValue] = React.useState('');
        console.log(searchValue);
        const [openModal,setopenModal]= React.useState(false);
        const totalTodos = todo.length;
        const completedTodos = todo.filter(
        todo=>todo.completed === true).length

        const congratsTodos = ()=>{
            if(completedTodos === totalTodos && totalTodos >0){          
            console.log('¡Felicidades! Has completado todas tus tareas.');
            }
        }
        const searchedTodos = todo.filter((todo)=>{
            //convertir  minusculas 
            const textTodo = todo.text.toLowerCase();
            const textSerch = searchValue.toLowerCase();
            return textTodo.includes(textSerch);
        });
        const funcionComplete =(text)=>{
            const todoNew = todo.map((todo)=>{
            if(text === todo.text){
                todo.completed = !todo.completed;
            }
            return todo;
            });
            saveTodo(todoNew);
        }
        const funcionDelete =(text)=>{
            const todoNew = todo.filter((todo)=>{
            return text !== todo.text;
            }
            );
            saveTodo(todoNew);
        }
        const addTodo = (text) => {
            if (!text.trim()) return; // evita vacíos
            const newTodo = [...todo];
            newTodo.push({
                id: crypto.randomUUID(), // 👈 ID ÚNICO
                text,
                completed: false,
            });
            saveTodo(newTodo);
            };


    return(
        <TodoContext.Provider value={
            {
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setsearchValue,
                searchedTodos,
                funcionComplete,
                funcionDelete, 
                congratsTodos,
                openModal,
                setopenModal,
                addTodo,
            }
        } >
            {children}
        </TodoContext.Provider>
    );
 }

export {TodoContext, TodoProvider};