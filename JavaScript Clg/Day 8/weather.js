let inp=document.querySelector("input")
let btn=document.querySelector("button")
let h1=document.querySelector("h1")
let h2=document.querySelector("h2")

   btn.addEventListener("click",()=>{
    let apiK='9f6290d6cda9a36a63755fadee71f83d'
    let city=inp.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiK}`).

    then((data)=>{
        return data.json()
    }).then((info)=>{
        console.log(info);
        h1.innerText=info.name
        h2.innerText=info.main.temp
    })
   })
   
   