
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


// import React, { useState } from 'react'

// const App = () => {
//   let [count,SetCount] = useState(0)
//   function fun1(){
//     SetCount(count+1)
//   }
//   return (
//     <div>
//       <h4>{count}</h4>
//       <button onClick={fun1}>Click</button>
//     </div>
//   )
// }


// export default App




// Print Input field outside the box by click

// import React, { useState } from 'react'
// const App = () => {
//    let [input,SetInput] =  useState("")
//    let [data,SetData] =  useState('')
//   function fun1(e){
//     SetInput(e.target.value)
  
//     // console.log(e.target.value);
    
    
//   }
//   function done(){
//     SetData(input)
//   }

//   return (
//     <div>
//       <h2>{data}</h2>
//       <input type="text" placeholder='Enter Your Name' onChange={fun1} />
//       <button onClick={done}>Click</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Form from './Form'
// const App = () => {
//   return (
//     <div>
//       <Form/>


//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [count,SetCount] = useState(0)

//   let [city,SetCity] = useState("Goa")
 
//   useEffect(()=>{
//     // console.log("Hellooo");

//     async function call(){
//       let res= await fetch("https://jsonplaceholder.typicode.com/todos/")
//       let data=  await  res.json()
//       console.log(data);
      
//     }

//     call()
    
//   },[])

//   function fun1(){
//     SetCount(count+1)
//   }


//   // let response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    
//   // let data = await response.json();
//   // console.log(data);





//   return (
//     <div>
//       <h4>{count}</h4>
//       <h4>{city}</h4>
//       <button onClick={fun1}>Click</button>
//       <button onClick={()=>SetCity("Manali")}>Change</button>
//     </div>
//   )
// }


// export default App





// Api Data  



// import './App.css'
// import React, { useEffect, useState } from 'react'

// const App = () => {
//  let [ApiData,SetApiData] =useState([])
 
//   useEffect(()=>{
//     // console.log("Hellooo");

//     async function call(){
//       let res= await fetch("https://jsonplaceholder.typicode.com/todos/")
//       let data=  await  res.json()
//       console.log(data);
//       SetApiData(data)
      
//     }

//     call()
    
//   },[])

//   return (
//     <div class="main">{
//     ApiData.map((a)=>{
//       return(
//         <div>
//           <div class="container">
//           <h1 class="h1"> User Id:{a.userId}</h1>
//           <h2>Id: {a.id}</h2>
//           <h2>Titel: {a.title}</h2>
//           </div>
//         </div>
//       )
//     })
// }
//     </div>
//   )
// }

// export default App


// 2nd Task Listing Product 

// import './App.css'
// import React, { useEffect, useState } from 'react'

// const App = () => {
//  let [ApiData,SetApiData] =    useState([])
 
//   useEffect(()=>{
//     // console.log("Hellooo");

//     async function call(){
//       let res= await fetch(`https://dummyjson.com/products`)
//       let data=  await  res.json()
//       // console.log(data);
//       SetApiData(data)
      
//     }

//     call()
    
//   },[])

//   return (
//     <div class="main">{
//     ApiData.map((a)=>{
//       return(

//         <div>
//           <h1>{a.id}</h1>
//         </div>

//         // <div>
//         //   <div class="container">
//         //   <h1 class="h1"> User Id:{a.userId}</h1>
//         //   <h2>Id: {a.id}</h2>
//         //   <h2>Titel: {a.title}</h2>
//         //   </div>
//         // </div>
//       )
//     })
// }
//     </div>
//   )
// }

// export default App


// 1st Questins

// import React from 'react'
// import Task from './Task'

// const App = () => {
//   return (
//     <Task/>
//   )
// }

// export default App


// 02/06/2026 lec

// import React from 'react'
// import NavBar from './NavBar'
// import { Route,Routes } from 'react-router-dom'
// import Home from "./Home"
// import About from "./About"
// import Task from "./Task"



// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//       <Route    path="/"   element={<Home/>}/>
//       <Route    path="/about"   element={<About/>}/>
//       <Route    path="/task"   element={<Task/>}/>
//       </Routes>
//     </div>
//   )
// }




// GitHub

import React from 'react'
import NavBar from "./NavBar"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Task from "./Task"

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route  path="/"   element={<Home/>}/>
        <Route  path="/about"   element={<About/>}/>
        <Route  path="/task"   element={<Task/>}/>
      </Routes>
    </div>
  )
}

export default App