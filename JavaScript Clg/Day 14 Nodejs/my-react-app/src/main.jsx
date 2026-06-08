import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Home from './Home.jsx'

import Form from './Form.jsx'
import {BrowserRouter} from 'react-router-dom'
import Context from './Context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <Context.Provider value="Yash"> */}
    <App />
    {/* </Context.Provider> */}

    </BrowserRouter>
    
    
  </StrictMode>,
)
