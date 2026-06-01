
// Task --1

// import React, { useState } from 'react'

// const Task = () => {
//     let [search,SetSearch] = useState("")
//     console.log(search);

//     async function apicall(){

//         // if(!search.trim()){
//         //     alert("Not Found")
//         //     return;
//         // }

//         let res= await fetch(`https://dummyjson.com/products/search?q=${search}`)
//         let data = await  res.json()
//         console.log(data)
//     }
//     apicall()
    
//   return (
//     <div>
//         <input onChange={(e)=> SetSearch(e.target.value)} />
//         <button onClick={apicall} >Click</button>
//     </div>
//   )
// }

// export default Task


//Task --2

import React, { useState ,useEffect} from 'react'
import "./Task.css"

const Task = () => {
    let [search,SetSearch] = useState("")
    let [ApiData,SetApiData] = useState([])
    console.log(search);

    async function apicall(){

        // if(!search.trim()){
        //     alert("Not Found")
        //     return;
        // }

        let res= await fetch(`https://dummyjson.com/products/search?q=${search}`)
        let data = await  res.json()
        console.log(data)

        SetApiData(data.products)
    }

     useEffect(() => {
        fetch('https://dummyjson.com/products').then((res) => {
            return res.json()

        }).then((data) => {
            console.log(data);
            SetApiData(data.products)

        })

    }, [])

    function fun1(){
        let sortData= [...ApiData].sort((a,b)=>{
            return a.price-b.price
        })
        SetApiData(sortData)
    }
    function fun2(){
        let sortData= [...ApiData].sort((a,b)=>{
            return b.price-a.price
        })
        SetApiData(sortData)
    }

    
  return (
    <div>
        <input onChange={(e)=> SetSearch(e.target.value)} />
        <button onClick={apicall} >Click</button>
        <button onClick={fun1}>Low</button>
        <button onClick={fun2}>High</button>

        {
            ApiData.map((a)=>{
                return(
                <div>
                    <img src={a.thumbnail} />
                        <h3>{a.id}</h3>
                </div>)
                           
                        

            })
        }
    </div>
  )
}

export default Task