import Todocount from "./Todo/Todocount";
import Addtodo from "./Todo/Addtodo";
import Todolist from "./Todo/Todolist";
import {useState} from 'react'
import React from 'react'

function Finaltodo() {
    const[todos,settodos]=useState([]);
    const onFormSubmit = (todoObj)=>
    {
        settodos([...todos,todoObj.todo]);
    }
 

    return (
    
        <div className='container text-center'>
         
               
               <div className="container bg-dark w-50 ">
               <h1 className='m-5 ms-auto'>.</h1>
               <h1 className='text-center text-info mt-5'> TO-DO LIST</h1>
               <hr style={{color:'white'}} className='mb-5'/>
               <Addtodo onFormSubmit={onFormSubmit}/>
             
               <div className='m-5'>
                 <p></p>
               <Todolist todos={todos} settodos={settodos}   />
               </div>
            <div className='pb-5'>
            <Todocount todos={todos}/>  
            </div>
              
               </div>
        </div>
       );
     
}

export default Finaltodo