// import React from 'react'

// import { useState } from "react"

// function App() {
//   return (
//     <div>Hello Dostoo</div>
//   )
// }

// let count=0



// const App=()=>{
//   // // function fun1(){
//   // //   count++
//   // //   console.log(count);
//   // }
    
//   let [count,SetCount]= useState(0)
// function fun1(){
//   SetCount(count++)
// }
// function fun2(){
//   SetCount(count--)
// }

//   return(
//     <div>
//       <h1>{count}</h1>


//     <button onClick={fun1} >Add</button>
//     <button onClick={fun2} >----</button>
//     </div>
//   )
// }

// export default App


// color

// import React, { useState } from 'react'

// const App = ()=> {

//   let [color,setColor]= useState("red");
//   function fun1(){
//     setColor("green");
//   }
//   return (
//     <div style={{backgroundColor:VideoColorSpace,width:"100px",height:"100px"}}>App
//     <button onClick={fun1}>Green</button></div>
//   )
// }

// export default App



// 0col


// import { useState } from 'react';
   
// const App = () => {
//   let [color, setColor] = useState('red');
//   function fun1() {
//     setColor('green');
//   }
//   return (<div style={{backgroundColor: color,width:"400px",height:"400px"}}>
//       <button onClick={fun1}> blue </button>
//     </div>)

// }
// export default App

// import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }


// export default App


// Import From Home File



// import React from 'react'
// import Home from './Home'

// const App = () => {
//   let user = "Jaish"
//   return (
//     <div>

//     <Home data={user} />

//     </div>
//   )
// }

// export default App


// Data Flow
// App->Home->A


import React, { useState } from 'react'

const App = () => {
  let [count,SetCount] = useState(0)
  function fun1(){
    SetCount(count+1)
  }
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={fun1}>Click</button>
    </div>
  )
}


export default App