let passValidation = () =>{
    let password = document.getElementById("passName").value;
    let cpassword = document.getElementById("cpassName").value;
    
     if (password == cpassword){
        alert("Password Matched")
       
    }else{
        alert("password didn't match")
    }
}


 