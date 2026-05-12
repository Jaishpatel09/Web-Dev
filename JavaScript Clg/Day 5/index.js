// // let h1=document.querySelectorAll("h1")

// let h1=document.getElementsByClassName("two")
// // h1[0].style.color= 'red'

// let name= prompt("Enter your name")
// h3.innerText="Name"+" "+name

// for(let a of h1){
//     a.style.color = 'red'
// }


// console.log(h1,"Kyaa");


// let h1= document.querySelector("h1")

//   let p= document.createElement
// // h1.innerText="Hii..."
   




let inp = document.querySelector("input")
let h2= document.querySelector("h2")
let btn= document.querySelector("button")
  btn.addEventListener("click",function(e){
    // console.log("Hii Sir..");
         let data=inp.value
         h2.innerText=data
         inp.value=""
  })



// inp.addEventListener("input",function(e){
//     // console.log(e.target.value);
    
//     h2.innerText=e.target.value
    
// })




