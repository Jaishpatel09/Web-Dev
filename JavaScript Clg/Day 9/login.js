let formdata=document.querySelector("#formData")

formdata.addEventListener("submit",(e)=>{
    e.preventDefault()

    // console.log(formdata[0].value);
    // console.log(formdata[1].value);
    // console.log(formdata[2].value);
    
    // console.log("hello");

    let data={
        name:formdata[0].value,
        email:formdata[1].value,
        password:formdata[2].value
    }
    localStorage.setItem("userData",JSON.stringify(data))
    
})

// login

  let LoginData = document.querySelector("#LoginData")

   LoginData.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("iiiiiii");
    

    let login={
        email:LoginData[0].value,
        password:LoginData[1].value,

    }


   let localStorageData= localStorage.getItem("userData")
   console.log(localStorageData);
 let mainData=    JSON.parse(localStorageData)
 console.log(mainData);

 if(login.email===mainData.email && login.password===mainData.password){
    alert("aapne sab kuch sahi kiya haii...")
 }else{
    alert("kuch nhi ho sakta aapse...")
 }
 
   

 })



