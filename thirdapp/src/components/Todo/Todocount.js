import React from 'react';

function Todocount({todos}) {
  return <div>
    
      <mt-4>
          {
             <h3 className='text-info text-center font-weight-bold' >COUNT:{todos.length}</h3>
          }
      </mt-4>

  </div>;
}

export default Todocount;
