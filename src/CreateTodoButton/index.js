
import './CreateTodoButton.css'

function CreateTodoButton({openModal, setopenModal}) {
  return (
    <button className="CreateTodoButton"
    onClick={
      (event)=>{
        console.log('le diste click');
        console.log(event);
        console.log(event.target);
        setopenModal(prev=>!prev)
    }}>
      +
    </button>
  );
}

export { CreateTodoButton };