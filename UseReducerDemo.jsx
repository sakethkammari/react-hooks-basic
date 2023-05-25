import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

const UseReducerDemo = () => {

 //const [value,setValue] = useState(0);

 function reduce(state,action){

    switch(action.type){
        case 'increment':   return {count: state.count+1}
        case 'decrement':   return {count: state.count-1}
        case 'default': return state;
    }

      
 }

const [state,dispatch]   =   useReducer(reduce,{count:0})

 function inc(){
   dispatch({type:'increment'});
 }

 function dec(){

 }

  return (
    <div>

        <button onClick={inc}>+</button>
        {state.count}
        <button onClick={dec}>-</button>
        
    </div>
  )
}

export default UseReducerDemo