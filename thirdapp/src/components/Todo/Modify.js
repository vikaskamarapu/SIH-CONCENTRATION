import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'

function modify({todo,key,id,onSelect}) {
  return <div>
    <div className="row">
    
      <div className="col-11">
        
      <p><li className='list-group-item list-group-item-secondary mb-1'>{todo}</li></p>
      </div>
      <div className="col-1">
      <button><FontAwesomeIcon icon={faTimes} size='lg' color='red' onClick={()=>{onSelect(id)}}></FontAwesomeIcon></button>
      </div>
     
    </div>
   
   
  </div>;
}

export default modify;
