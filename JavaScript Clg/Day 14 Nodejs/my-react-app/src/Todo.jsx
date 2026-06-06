// import React, { useState } from 'react'
// import './App.css'

// const Todo = () => {
//     const [task, setTask] = useState("");
//     const [todo, setTodos] = useState([]);
//   return (
//     <div>
//         <div id="container">
//         <h1>ToDo List</h1>

//         <input
//           type="text"
//           name="task"
//           value={task}
//           placeholder="Enter a task"
//           onChange={(e)=>setTask(e.target.value)}
//           />


//         <button onClick={()=>setTodos([...todos,task])}>Add</button>
//         </div>
//     </div>
//   )
// }

// export default Todo


// Git


// import React, { useEffect, useState } from "react";
// import "./App.css";

// const Todo = () => {
//     const [task, setTask] = useState("");
//     const [todos, setTodos] = useState(() => {
//         let data = localStorage.getItem("key")
//         if (data) {
//             return JSON.parse(data)
//         }
//         return []
//     });
//     let [index, SetIndex] = useState(null)

//     function edit(index) {
//         setTask(todos[index])
//         SetIndex(index)
//     }

//     function handleAorUpdate() {
//         if (task.trim() == "") {
//             return;
//         }
//         // console.log("helloooooo");

//         if (index !== null) {
//             let updateDATA = [...todos]
//             updateDATA[index] = task
//             setTodos(updateDATA)
//         } else {
//             setTodos([...todos, task])
//             setTask("")
//         }


//     }


//     useEffect(() => {
//         localStorage.setItem("key", JSON.stringify(todos))
//     }, [todos])

//     function del(id) {
//         console.log(id, "hello");
//         let updateData = todos.filter((a, b) => {
//             return b != id
//         })
//         setTodos(updateData)

//     }

//     return (
//         <div className="container">
//             <h1>Todo List</h1>

//             <div className="input-box">
//                 <input
//                     type="text"
//                     name="task"
//                     value={task}
//                     placeholder="Enter a task"
//                     onChange={(e) => setTask(e.target.value)}

//                 />

//                 <button onClick={handleAorUpdate}>
//                     {index !== null ? "Update" : "Add"}
//                 </button>
//             </div>


//             <div className="todo-list">
//                 {todos.map((todo, index) => (
//                     <div className="todo-item" key={index}>
//                         <span>{todo}</span>

//                         <div className="actions">
//                             <button onClick={() => edit(index)}>
//                                 Edit
//                             </button>

//                             <button onClick={() => del(index)} >
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Todo;


//ToDo by useReducer


import React, { useReducer } from 'react'
import './App.css';

const Todo = () => {
    let initialData={
        input:"",
        todos:[]
    }
function reducer(state,action){
    if(action.type=="SET_INPUT"){
        return{
            ...state,input:action.payload
        }
    } else if(action.type=="ADD_ToDo"){
        return{
            input:"",
            todos:[...state.todos,state.input]
        }
    } else if(action.type=="DEL_ToDo"){
        return{
            ...state,
            todos:state.todos.filter((_,id)=>{
                return id!==action.payload
            })
        }
    }
}
    let [state,disptach]= useReducer(reducer,initialData)
  return (
    <div className="container">
    
        <div className="ipd">
            hi
        <input onChange={(e)=>disptach({type:"SET_INPUT",payload:e.target.value})} />
        <button onClick={()=>disptach({type:"ADD_ToDo"})}>Add</button>
        
        <button onClick={()=>disptach({type:"DEL_ToDo"})}>Delete</button>
        </div>
        {
            state.todos.map((a)=>{
                return(<>
                <h1>{a}</h1>
                </>)
            })
        }
    
  </div>  
  )
}

export default Todo