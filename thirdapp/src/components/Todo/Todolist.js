import React from 'react';
import Modify from './Modify';

function Todolist({todos,settodos}) {
    const deleteitems= (id)=>
{
    settodos((todos)=>
    {
        return todos.filter((arrElem,index)=>{
          return index!==id;
        })
    })
}

  return <div>
      <mt-4>  
              <ul className='list-group list-group-flush'>
                {
                      todos.map((todo,index)=>{
                         return <Modify className='list-group-item list-group-item-secondary' todo={todo} key={index} id={index} onSelect={deleteitems}/>
                    })
                } 
              </ul>       
      </mt-4>
  </div>;
}

export default Todolist;
