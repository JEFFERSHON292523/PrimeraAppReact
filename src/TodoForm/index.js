import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    
    const {
        addTodo,
        setopenModal,
    }= React.useContext(TodoContext);

    const [NewTodoValue,setNewTodoValue]=React.useState('');

    const onSubmit=(event)=>{
        event.preventDefault();
        addTodo(NewTodoValue);
        setopenModal(false);
    }

    const onchange=(event)=>{
        setNewTodoValue(event.target.value);
        if(!event.target.value){
            console.log('No puedes agregar un TODO vacio');
        }
    }

    const onCancel=()=>{
        setopenModal(false);}
    return(    
        <form onSubmit={onSubmit}>  
            <label>Escribe tu primer TODO</label>
            <textarea 
            placeholder="Cortar cebolla para el almuerzo"
            onChange={onchange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                className="TodoForm-button TodoForm--button--cancel"
                >Añadir</button>
                <button 
                type="button"
                className="TodoForm-button TodoForm--button--cancel"
                onClick={onCancel}
                >Cancelar</button>

            </div>
        </form>
    );
}

export {TodoForm};