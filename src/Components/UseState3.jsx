import React, { useEffect, useState } from 'react'

const useState3 = () => {

    const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run after every render
    // console.log('Effect ran!');
    alert("content button clicked");
    // Imagine some code that modifies the state
    // setCount(count + 1);
  },[state]);


  const handleState=()=>{

  }

  const handleLike=()=>{
    
  }
  
  return (
    <>
    <h3>{state}</h3>
    <button>Content</button>
    <h3>{like}</h3>
    <button>Like</button>
    </>
  )
}

export default useState3