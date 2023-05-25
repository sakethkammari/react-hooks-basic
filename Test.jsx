import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Test = () => {

    const [reference,setReferenceType] = useState('');
    const [data,setData] = useState([]);

    const [windowwidth,setWindowWidth] = useState(window.innerWidth);

    const handleResize = () =>{
        setWindowWidth(window.innerWidth)
    }

    useEffect(()=>{
        
        fetch(`https://jsonplaceholder.typicode.com/${reference}`)
      .then(response => response.json())
      .then(json => setData(json));

      window.addEventListener('resize',handleResize);

      return () => {
        //clean up code 
        window.removeEventListener('resize',handleResize);
      }

    },[reference]);

  return (
    
    <>
            <button onClick={()=>setReferenceType('users')} >users</button>
            <button onClick={()=>setReferenceType('posts')}>posts</button>
            <button onClick={()=>setReferenceType('comments')}>comments</button>

            {reference}
    <br></br>
            {data.map(item=>{
                return <pre>{JSON.stringify(item)}</pre>
            })}

            {windowwidth}


    </>



  )
}

export default Test