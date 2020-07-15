// email pattern   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">

function validation() 
{
    const name = document.getElementById("name")
    const lastname = document.getElementById("lastname")
    const password = document.getElementById("password")
    const cpassword = document.getElementById("cpassword")
    const email = document.getElementById("email")
    const errName = document.getElementById("errorName")
    const errLastname = document.getElementById("errorLastname")
    const errPassword = document.getElementById("errorPassword")
    const errCPassword = document.getElementById("errorCpassword")
    const errEmail = document.getElementById("errorEmail")
    const patterSpecialSigns = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    const patternEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (name.value.trim() == '' || name.value.trim() == null) {
        errName.innerText = "Name can not be empty!"
        return false
    }
    if (name.value.trim() >= 0) {
        errName.innerText = "Name can not start with a number!"
        return false
    }
    if (name.value.trim().match(patterSpecialSigns)) {
        errName.innerText = "Cant use special signs,symbols"
        return false
    }    
    if (lastname.value.trim() == '' || lastname.value.trim() == null) {
        errLastname.innerText = "lastname can not be empty!"
        return false
    }    
    if (lastname.value.trim() >= 0) {
        errLastname.innerText = "lastname can not start with a number!"
        return false
    }
    if (lastname.value.trim().match(patterSpecialSigns)) {
        errLastname.innerText = "lastname use special signs,symbols"
        return false
    }    
    if (password.value.trim() == '' || password.value.trim() == null) {
        errPassword.innerText = "password can not be empty!"
        return false
    }
    if (password.value.length < 6) {
        errPassword.innerText = "Password is too short"
        return false
    }
    if (password.value.length > 20) {
        errPassword.innerText = "Password is too long"
        return false
    }
    if (password.value.trim() >= 0) {
        errPassword.innerText = "password can not start with a number!"
        return false
    }    
    if (password.value.trim().match(patterSpecialSigns)) {
        errPassword.innerText = "password use special signs,symbols"
        return false
    } 
    if (cpassword.value.trim() == '' || cpassword.value.trim() == null) {
        errCPassword.innerText = "Confirm password can not be empty!"
        return false
    }
    if (cpassword.value.trim() != password.value.trim()) {
        errCPassword.innerText = "passwords do not match!"
        return false
    }
    if (email.value.trim() == '' || email.value.trim() == null) {
        errEmail.innerText = "email can not be empty!"
        return false
    }
    if (email.value.trim() >= 0) {
        errEmail.innerText = "email can not start with a number!"
        return false
    }  
    if (patternEmail.test(email.value) == false) {
        errEmail.innerText = "Invalid Email, try again!"
        return false
    }  
    else
    {
        return true
    }
}