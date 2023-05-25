import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

  const ACTIONS = {
    ADD_TODO : 'addTodo',
  }

const UseReducer2 = () => {
    const [name,setName] = useState('');
   const[state,dispatch]  = useReducer(reduce,[]);

   function reduce(todos,action){

    switch(action.type){
        case ACTIONS.ADD_TODO: return [...todos,newTodo(action.payload.name)] 
    }
        
   }

   function newTodo(name){
        return {id:Date.now() , name: name, completed: false};
   }    
   console.log(state);
    function handleSubmit(e){
        e.preventDefault();
        
        dispatch({type: ACTIONS.ADD_TODO , payload:{name:name}});
        
       

    }

  return (
    <form onSubmit={handleSubmit}>
    <div>

            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
            <button type='submit'>submit</button>
    </div>
    </form>
  )
}

export default UseReducer2