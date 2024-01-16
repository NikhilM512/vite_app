// // import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import UseState from './Hooks/useState'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//     <h2>Hi</h2>
//       <UseState></UseState>
//       <h1>Hello</h1>
      
//     </>
//   )
// }

// export default App
// import React from 'react'
// import { useState } from 'react';
// import './App.css'
// import UseContext from './Hooks/UseContext';
// export const ToggleTheme = React.createContext()

// function App() {

//   const [state,setState] = useState(true)

//   const handleToggle = ()=>{
//     setState(state=>!state)
//   }

//   return (
//     <ToggleTheme.Provider value={state}>
//       <button onClick={handleToggle}>Toggle</button>
//       <UseContext/>
//     </ToggleTheme.Provider>
//   );
// }

// export default App;


import React from 'react'
import { useState } from 'react'
import UseState3 from './Components/UseState3';
import UseContext from './Hooks/UseContext';
export const ToggleTheme=React.createContext();

const App = () => {

  const [theme,setTheme]=useState(true)

  const handleToggle=()=>{
    setTheme(!theme);
  }

  return (
    // <ToggleTheme.Provider value={theme}>
    //   <button onClick={handleToggle}>Toggle</button>
    // <UseState2/>
    // <UseContext/>
    // </ToggleTheme.Provider>
    <UseState3/>
  )
}

export default App