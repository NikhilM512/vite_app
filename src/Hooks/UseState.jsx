// import { useState } from "react";
// import "../App.css"

// function UseState(){
//   const [currAge,setAge] = useState(19);
  
//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <button onClick={handleAge}>Get Older</button>
//     </div>
//   );
// }

// export default UseState;


// import { useState } from "react";
// import "../App.css"

// function UseState(){
//   const [currAge,setAge] = useState(19);
//   const [currSib, setSib] = useState(1);
  
//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   const handleSib = ()=>{
//     setSib(currSib+1);
//   }


//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={handleAge}>Get Older</button>
//       <button onClick={handleSib}>Get more Sib</button>
//     </div>
//   );
// }

// export default UseState;



// import { useState } from "react";
// import "../App.css"


// function UseState(){

//   const [state, setState] = useState({age:19, siblings:3});

//   const handleState = (val)=>{
  
//     setState({
//       ...state,[val]:state[val]+1
//     })
//   }

//   const {age,siblings} = state;

//   return(
//     <div>
//       <h3>My Current Age is {age}</h3>
//       <h4>My siblings {siblings}</h4>
//       <button onClick={()=>handleState("age")}>age</button>
//       <button onClick={()=>handleState("siblings")}>sib</button>
//     </div>
//   )

// }

// export default UseState;

// import { useState } from "react";
// import "../App.css"


// function UseState(){

//   const [currAge, setAge] = useState(19);
//   const [currSib, setSib] = useState(3);

//   return(
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
//       <button onClick={()=>setSib(prev=>prev+1)}>sib</button>
//     </div>
//   )

// }

// export default UseState;


// import { useState } from "react";
// import { useEffect } from "react";

// function UseState(){

//   const [currAge, setAge] = useState(19);
//   const [currSib, setSib] = useState(3);

//   useEffect(()=>{
//     alert(`something changed ${currAge}`)
//     console.log(`something changed ${currAge}`)
//   },[])

//   return(
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
//       <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
//     </div>
//   )

// }


// export default UseState;

// import React, { useEffect, useState } from 'react';

// function UseState() {
//   const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Fetch data here
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //       const result = await response.json();
  //       console.log(result,data);
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();

  //   // Cleanup function
  //   return () => {
  //     console.log('Cleanup function: Component unmounted or dependencies changed');
  //     // Clean up resources here (runs when component unmounts or when dependencies change)
  //   };
  // }, []); // Empty dependency array means run effect once after the initial render

//   return (
//     <ul>
//       <h1>Hi</h1>
//       <h2>Hello</h2>
//       <h3>Hi</h3>
//       {data.map((item) => (
//         <li key={item.id}>{item.title}</li>
//       ))}
//     </ul>
//   );
// }

// export default UseState;


