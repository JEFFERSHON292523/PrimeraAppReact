
import React  from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';


function TodoSearch() {
  const {searchValue,setsearchValue} = React.useContext(TodoContext);
  return (
    <div className="TodoSearch">
      <input 
      value={searchValue}
      className="TodoSearch__input" 
      placeholder="Ingrese aqui su todo" 
      onChange={(event)=>{
        setsearchValue(event.target.value);
      }}
      />
    </div>
  );
}

export { TodoSearch };