// import React from 'react'
// import './Basics.css'
// const Basics = () => {
//     // let name = 'Jaish';
//     // let a=10;
//     // let b=23;
//   return (
//     <div>
//     {/* <h1 className="hello">Hello {name}</h1> */}
//     {/* <h1>{a+b}</h1> */}

// import { useState } from "react";

// <h1>Hello Dosto,</h1>
// <p>Kaise hai aap log aasha karta hu abadhiya hi honge</p>

//     </div>
//   )
// }

// export default Basics

// import React from 'react'

// const Basics = () => {
//   return (
//     <div>
//       <h2>Name:Jaish Patel</h2>
//       <h3>Course: B.Tech</h3>
//       <h3>Semester: 4th</h3>
//     </div>
//   )
// }

// export default Basics

//Props

// import React from 'react'

// const Basics = (props) => {
//   return (
//     <div>
//       <h2>Name:{props.name}</h2>
//       <h3>Salary:{props.salary}</h3>
//     </div>
//   )
// }

// export default Basics

// useState onClick
// import React, { useState } from 'react'
// import './Basics.css'


// const Basics = () => {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <div className="container">

//       <h1>Count:{count}</h1>
//       <div id="buttons">
//       <button onClick={()=>{setCount(count+1)}}>Increase</button>
//       <button id="dec" onClick={()=>{setCount(count-1)}}>Decrease</button>
//       <button onClick={()=>{setCount(0)}}>Reset</button>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Basics




//useState onChange 
//Event Object
// import React, { useState } from 'react'


// const Basics = () => {
//   const [name, setName] = useState("")

//   return (
//     <div>
//       <input
//         value={name}
//         onChange={(e) => { setName(e.target.value) }} placeholder='Enter Your Name' />
//       <h1>{name}</h1>

//       {name.length > 10
//         ? <h2>Maximum 10 Characters Allowed</h2>
//         : <h2>Valid Input</h2>
//       }

//       {/* {name.length > 10 && (
//   <h2>Maximum 10 Characters Allowed</h2>)} */}

//       <h2>Characters Count:{name.length}</h2>

//       {/* <h2>Upper Case:{name.toUpperCase()}</h2> */}

//       <button onClick={(e) => { setName("") }}>Clear</button>
      
//       {/* {name ? <h1>Hello {name}</h1> : <h1>Please Enter Name</h1>} */}
//     </div>
//   )
// }

// export default Basics

//Show/Hide Message

// import React, { useState } from 'react'

// const Basics = () => {
//   const [show,setShow] = useState(false)
//   return (
//     <div>
//     <button onClick={()=>{setShow(!show)}}>
//       {show ? "Hide Message" : "Show Message"}
//     </button>
//     <h1>
//     {show && "Hello Jaish Patel"}
//     </h1>
//     </div>
//   )
// }

// export default Basics


// import React, { useState } from 'react'
// import './Basics.css'


// const Basics = () => {
//   const [count,setCount] = useState(0)
//   return (
//     // <div className='display'>
//     <div id="boxx">
//       <h1>{count}</h1>
//       {count === 0 && <h2>Minimum Limit Reached</h2>}
//       {count === 10 && <h2>Maximum Limit Reached</h2>}
//       <div className="buttons">
//       <button id='inc' onClick={()=>{
//         if(count<10){
//         setCount(count+1)}
//       }}>Increase</button>
//       <button id='dec' onClick={()=>{
//            if (count>0){
//         setCount (count-1)
//       }}
//     }
//         >Decrease</button>
//       <button id='reset' onClick={()=>setCount(0)}>Reset</button>
//       </div>
//     </div>
//     // </div>
//   )
// }

// export default Basics

//Password Length Checker

import React, { useState } from 'react'

const Basics = () => {
  let [pass,setPass] = useState("")
  return (
    <div>
      {/* <h2>{pass}</h2> */}
      <input type='password' onChange={(e)=>
        {setPass(e.target.value)}
        } placeholder='Enter Password'/>
        {pass.length<8 ? <h3>Weak Password</h3>: <h3>Strong Password</h3>}
        <button onClick={()=>{setPass(<h2>{pass}</h2>)}}>Show Pass</button>
    </div>
  )
}

export default Basics