

import {ReactComponent as CheckSVG} from './check.svg'
import {ReactComponent as DeleteSVG} from './delete.svg' 
import './todoIcon.css'

const TypeIcon = {
    'check':(color)=><CheckSVG className="icon-svg" fill={color}/> ,
    'delete':(color)=><DeleteSVG className="icon-svg" fill={color}/> ,
}

function TodoIcon({type, color, onClick}){
    return(

        <span 
        className={`icon-container icon-${type}`}
        onClick={onClick}>
        {TypeIcon[type](color)}
        </span>
    )    
}

export { TodoIcon }; 