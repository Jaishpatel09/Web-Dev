import React, { useReducer } from 'react'
import './Reducer.css'
const Reducer = () => {
  function reduser(state,action){
    if(action.type=="inc"){
      return state+1
    }else if(action.type=="d"){
      return state-1
    }else if(action.type=="reset"){
      return 0
    }
  }
  let [state,disptach]= useReducer(reduser,0)
  return (
    <div>
      <div className="container">
      <h2>{state}</h2>
      <div className="butten">
      <button onClick={()=>disptach({type:"inc"})}>++</button>
      <button onClick={()=>disptach({type:"d"})}>--</button>
      <button onClick={()=>disptach({type:"reset"})}>Reset</button>
      </div>
      </div>
    </div>
  )
}

export default Reducer