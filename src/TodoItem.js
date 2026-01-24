
import './TodoItem.css'

function TodoItem(props) {
  return (
    <li> 
      <span className={`check check-icon ${props.completed && 'check-icon--complete'}`}  >
        V
      </span>
      <p className={`text ${props.completed && 'text-complete' }`}>{props.text}</p>
      <span className='delete'>X</span>
    </li>
  );
}
export { TodoItem };