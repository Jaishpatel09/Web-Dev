import React, { createContext, useReducer } from "react";
export const storeContext = createContext();
const initialState = {
      input:"",
      todos:[]
};
function reducer(store, action) {
    
    if(action.type=="Set"){
        return{
            ...store,
            input:action.payload
        }
    }else if(action.type=="Add"){
        return{
            ...store,
            todos:[...store.todos,store.input]
        }
    }
}
const Context = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <storeContext.Provider value={{ store, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export default Context;