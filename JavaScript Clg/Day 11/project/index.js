fetch("https://dummyjson.com/products").then((res)=>{

    return res.json()
}) .then((data)=>{
    let body=document.querySelector("body")



   data.products.map((a)=>{
       console.log(a);
       body.innerHTML+=`<div style="border:2px solid black;
       padding:20px;
       margin:20px;
       width:300px;
       border-radius:20px">
        <img src="${a.thumbnail}" width="200px">
       <h2> ${a.title}</h2>
       <h2> ${a.brand}</h2>
       <h2> ${a.price}</h2>

       <button style ="background-color:rgb(92, 92, 244)">ADD</button>
       </div>`
       

       
   })
})
    
    
