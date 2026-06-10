import React, { useContext, useReducer } from 'react'
import { storeContext } from './Context'

const NxtToDo = () => {

  let {store, dispatch} = useContext(storeContext)
  
  return (
    <div>
    <input onChange={(e)=>dispatch({type:"Set",payload:e.target.value})} />
    <button onClick={()=>dispatch({type:"Add"})}>Add</button>
    
    {
        store.todos.map((a)=>{
          // console.log(a);
          
          return(<>
          <h6>{a}</h6>
          </>)
        })
      }
   </div>
  )
}

export default NxtToDo