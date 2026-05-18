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