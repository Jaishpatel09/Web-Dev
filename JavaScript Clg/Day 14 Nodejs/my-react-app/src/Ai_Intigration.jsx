import React, { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import './App.css'
const Ai_Intrigration = () => {
  let [searchData,setsearchData] = useState('')
  let [response,setResponse] = useState('')
    let genAi = new GoogleGenerativeAI("")

    async function search(){
      try{
        let model = genAi.getGenerativeModel({
          model: "gemini-2.5-flash"
        })
        let res = await model.generateContent(searchData)
        setResponse(res.response.text());
        console.log(response);
        
        
      }catch(err){
        console.log(err);
        
      }
    }
  return (
    <div id="main">
      <img
  src="https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg"
  alt="AI Bot"
  width="100"
/>

        <h1>
           Gemini Chat</h1>
        <input onChange={(e)=>{setsearchData(e.target.value)}}
        value={searchData}
        type="text" placeholder='Enter your text'/>
        <button onClick={search}>Send</button>

        <h3>{response}</h3>


    </div>
  )
}

export default Ai_Intrigration