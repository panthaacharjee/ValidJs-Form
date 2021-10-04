let email = document.querySelector("#email");
let password = document.querySelector("#password");
let subBtn = document.querySelector("#sub-btn");
let emailParg = document.querySelector("#email-parg");
let passParg = document.querySelector("#password-parg");

subBtn.addEventListener("click", function(){
    var val = false;
    const test = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(email.value == ""){
        emailParg.innerText = "This field is required!"
        val= false;
    }
    else{
        val=true;
        if(!test.test(email.value)){
            emailParg.innerText="Email is not valid";
            val = false;
        }
        else{
            emailParg.innerText="";
            val = true;
        }
    }

    

    if(password.value == ""){
        passParg.innerText = "This field is required!"
        val = false;
    }
    else{
        passParg.innerText = ""
        val = true;
    }

    if(val == true){
        console.log(email.value, password.value)
    }
})