import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const UseRefDemo = () => {

    const [value,setValue] = useState('');
    const freq = useRef(1);
    const inputRef = useRef();

     // use ref to store prvious value of state ??

     const prevState = useRef();


    useEffect(()=>{
        freq.current = freq.current+1;
        prevState.current = value;
    },[value]);

   
    function focus (){
        inputRef.current.focus()
    }

    



  return (
    <div>

            <input ref={inputRef}  type='text' value={value} onChange={(e)=>{
                setValue(e.target.value);
            }}></input>

            <div><button onClick={focus}>focus</button></div>

            <div>My name is {value}</div>
            <div>I rendered {freq.current} times</div>
            <div>prev name {prevState.current}</div>

    </div>
  )
}


export default UseRefDemo