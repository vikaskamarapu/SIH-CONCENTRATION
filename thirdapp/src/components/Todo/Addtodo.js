import React from 'react';
import {useForm} from 'react-hook-form'

function Addtodo({onFormSubmit}) {
    const {register,handleSubmit,formState:{errors}}= useForm();
   
  return <div>

          <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className="mb-3 ">
                  <div className="row">
                      <div className="col-8">
                      <input type="text" placeholder='Enter a task' id="todo" className='form-control '   {...register("todo",{required:true})}/>
                  {errors.todo?.type==='required'&& <p className='text-danger'>*Task is required</p> }
                      </div>
                      <div className="col-4">
                            
                  <button className="btn btn-warning form-control" type='submit'>Add Todo</button>
                      </div>
                  </div>
               
              </div>
              

         </form>
         

  </div>;
}

export default Addtodo;
