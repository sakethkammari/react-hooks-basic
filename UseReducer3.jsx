import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'
import Todo from './Todo';

 export const ACTIONS = {
    ADD_TODO : 'addTodo',
    TOGGLE_TODO: 'toggleTodo',
  }

const UseReducer3 = () => {
    const [name,setName] = useState('');
   const[state,dispatch]  = useReducer(reduce,[]);

   function reduce(todos,action){

    switch(action.type){
        case ACTIONS.ADD_TODO: return [...todos,newTodo(action.payload.name)] 
                               console.log('adding');
       case ACTIONS.TOGGLE_TODO: return todos.map((todo)=>{
        console.log('toggling');
                if(todo.id === action.payload.id)
                {
                    return {...todo,completed: !todo.completed}
                }
                return todo;
       })
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
    <div>
            {state.map((todo)=>{
                return <Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>
            })}
    </div>
    </form>
  )
}

export default UseReducer3