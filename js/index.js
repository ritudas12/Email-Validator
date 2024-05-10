console.log("This is my script")
let result ={
    
    
    "tag": "",
    "free": true,
    "role": false,
    "user": "ritudas0561",
    "email": "ritudas0561@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
  
  
}


submitBtn.addEventListener("click",async(e)=>{
    e.preventDefault()
    console.log("Clicked!")
    resultContainer.innerHTML =` <img width="100" src="img/loading.svg" alt="">`
   let  key="ema_live_YjduqiGXzL5KCVkX2xfVewKcOmBm6gN3C1YSeKvB"
    let email = document.getElementById("username").value
    
let url =`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
let res = await fetch(url)
let result = await res.json()
let str = ``
for (key of Object.keys(result)){
    if(result[key]!=="" && result[key] !==" "){
    str = str + `<div>${key}: ${result[key]}</div>`
}
}

console.log(str)
resultContainer.innerHTML = str; 
})


