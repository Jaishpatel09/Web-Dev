import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import Home from './Home.jsx'

import Form from './Form.jsx'
import {BrowserRouter} from 'react-router-dom'
import Context from './Context.jsx'
import NxtToDo from './nxtToDo.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    {/* <Context.Provider value={{store,dispatch}}> */}
    {/* <Context> */}
   <App/>
   {/* </Context> */}
    {/* </Context.Provider> */}
    {/* </BrowserRouter> */}
    
    
  </StrictMode>,
)


