import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState,useMemo } from 'react'


// useCallBack: 

//  same as useMemo but 
//  useCallBack - returns a fucntion 
//  useMemo - returns an output of that fucntion 

//  so by using usecalback we can send even paramenters to that fucntion: 

// const getItems =  useCallback(()=>{
//     return [number,number+1,number+2]
// },[number]
// )cd 




const UseMemoHook = () => {

    const [number,setNumber] = useState(2);
    const [dark,setDark] = useState(false);


    // even that one slow fucntion renders on every change so to aviod that we use useMemo to chace


   // const doubleNum = slowFunction(number);
    const doubleNum = useMemo(()=>{
        return slowFunction(number);
    },[number]);
    // so when number changes only its gets rendersd else same

    // another use case of memo is that when we want usEffect to run on themestyle chnage,
    // but still if we change number it gets runs as when component is re renders the addres of previous themesyle 
    // is not same as new themestyle and in use effect it keeps on printing enterd,
    // so inordfer to avoid this i.e printngn  themestyle when number is changes  we 
    // wrap that themestyle in memo so that that will be ficxed obj 
    // and its memory wont change , hence useeffect works

    // const themeStyles = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color : dark ? 'white' : 'black'
    // }

    const themeStyles = useMemo( ()=>{
      return   {
        backgroundColor: dark ? 'black' : 'white',
        color : dark ? 'white' : 'black'
    }},[dark]);

   // use memo  use case 2: 


    useEffect(()=>{
            console.log('insode use effct -theme style changed');
    },[themeStyles]);


  return (
    <div>

            <input type='number' value={number} onChange={(e)=>{
                setNumber(parseInt(e.target.value))
            }}></input>
            <button onClick={()=>setDark(!dark)} >Change theme</button>
             <div style={themeStyles}> {doubleNum} </div>


    </div>
  )
}

function slowFunction(num){
    for(let i=1;i<1000000000;i++){}
    return num*2;
}

export default UseMemoHook