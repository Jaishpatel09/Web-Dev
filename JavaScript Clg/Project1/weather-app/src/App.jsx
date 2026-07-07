import React, { useState } from 'react'

function App() {
  let [city,setCity] =useState("")
  // console.log(city);
  let [weather,setWeather] = useState(null)

  function searchWeather(){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9925e016a9be85598f5f932410e08d2b&units=metric`

      fetch(url)
        .then((response)=>{
          return response.json()
          // console.log(response);
          
        }).then((data)=>{
          setWeather(data)
          
          console.log(weather);
        })
  }
  

  
  return (
    <>
    <h1>Weather App</h1>
    <input value={city}
    onChange={(e)=>{setCity(e.target.value)}}
    type="text" 
    placeholder='Enter Your City' />
    <button onClick={()=>{searchWeather()}}>Search</button>
     
     <h2>City: {weather?.name}</h2>
     <h3>Temperature🌡️ : {weather?.main.temp}°C </h3>
     <h3>☁️ Weather :{weather?.weather} </h3>
   
    </>
  )
}

export default App