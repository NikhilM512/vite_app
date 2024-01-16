import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { ToggleTheme } from '../App';

const UseState2 = () => {

    let [like,setLike] = useState(0);
    let [para,setPara] = useState("");
    let [click,setClick]=useState(false);

    const theme = useContext(ToggleTheme);
    const themeStyle = {
      backgroundColor: theme?"black":"grey",
      color:theme?"grey":"black",
      padding:"2rem",
      margin:"2rem"
    }

    const handlePara=()=>{
        setClick(!click);
        alert("content button clicked");
    }

    useEffect(()=>{
        setPara((para)=>para==""?"Lorem":"");
    },[click])

    // console.log(click,para)

  return (
    <div style={themeStyle}>
    <p>{para}</p>
    <button onClick={handlePara}>Content</button>
    <p>{like}</p>
    <button>Like</button>
    </div>
  )
}

export default UseState2